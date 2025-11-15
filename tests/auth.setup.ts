import { test as setup, expect } from '@playwright/test';
import webElements from './webElements.json';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

// Load environment variables based on the project (GOOD or BUGGY)
const envFile =
  process.env.PW_PROJECT === 'GOOD-SITE'
    ? path.resolve(__dirname, '../.env.actualsite')
    : path.resolve(__dirname, '../.env.buggysite');

if (!fs.existsSync(envFile)) {
  throw new Error(`Env file not found: ${envFile}`);
}

dotenv.config({ path: envFile });

// Auth state storage path
const authFile = 'playwright/.auth/user.json';

setup('Login_withValidUserCredentials_myaccountandcustomernameIsDisplayed', async ({ page, baseURL }) => {
  if (!process.env.URL) {
    throw new Error('No URL provided. Make sure .env.actualsite or .env.buggysite defines URL');
  }

  // Go to login page
  await page.goto(process.env.URL);

  // Fill username & password
  const usernameInput = page.locator(webElements.loginElements.usernameElement);
  const passwordInput = page.locator(webElements.loginElements.passwordElement);
  const loginButton = page.locator(webElements.loginElements.loginButton);
  const dashboardDisplayed = page.locator(webElements.loginElements.dashboardVisible);

  await usernameInput.fill(process.env.USER1_USERNAME!);
  await passwordInput.fill(process.env.USER1_PASSWORD!);
  await loginButton.click();

  // Wait for "My Account"" to appear
  await expect(dashboardDisplayed).toBeVisible();

  // Verify customer name
  if (process.env.USER1_CUSTOMERNAME) {
    const customerName = page.locator(webElements.dashboardElements.menuElement);
    await expect(customerName).toContainText(process.env.USER1_CUSTOMERNAME);
  }

  // Save auth state for downstream tests
  await page.context().storageState({ path: authFile });

  console.log(`✅ Login successful for ${process.env.URL}`);
});
