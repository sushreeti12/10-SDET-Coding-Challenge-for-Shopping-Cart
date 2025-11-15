/*This test include two scenario
- Scenario 1 : Invalid credentials display an appropriate error message. US5 AC2 - Pass for both site
- Scenario 2 (Negative Test): Verify error message displayed "Email format is invalid"   - It fails for buggy site as error message not displayed for wrong email format instead displayed "Invalid email or password". Check here -> User Story 5 -> Issue 'a' 
*/

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import webElements from './webElements.json';

 test.describe('Login Scenarios', () => {

  //Verify Invalid credentials display an appropriate error message
  test('Invalid user login', async ({ page, baseURL }) => {
   const loginPage = new LoginPage(page);

  //Navigate to base URL
  await page.goto(baseURL!);

  //Click "Sign-In" button
  await page.waitForSelector(webElements.loginElements.signInTab);
  await page.locator(webElements.loginElements.signInTab).click();

  //Enter username and password
  await loginPage.login(process.env.INVALID_USERNAME!, process.env.INVALID_PASSWORD!);

  //Verify error message displayed "Invalid email or password"
  await loginPage.getErrorMessageInvalidUser();

  });

  // Verify message for wrong email format
  test('Negative Test -Login with incorrect email format', async ({ page, baseURL }) => {
    const login = new LoginPage(page);

  //Navigate to base URL
  await page.goto(baseURL!);

  //Click "Sign-In" button
  await page.waitForSelector(webElements.loginElements.signInTab);
  await page.locator(webElements.loginElements.signInTab).click();
  await login.login('invalid-email-format', 'XYZXXXXX');

  //Verify error message displayed "Email format is invalid""
  await login.getErrorMessageWrongEmailFormat(); //This will fail for buggy site as error message not displayed for wrong email format insted displaye "Invalid email or password"

  });

});

