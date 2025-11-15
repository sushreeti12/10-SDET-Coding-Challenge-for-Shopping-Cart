/*This test verifies that the user with valid credential login successfully using user = Jane Doe. (US 5 - AC1)
- Once successfully signed-in
- Verify the "My Account" text (Pass for both the site)
- Verify logged in customer name (Pass for actual site but fails for buggy site) - Check BUGS.md -> User Story 5 -> Issue 'c'
- This test cover US5 - AC1
*/

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import webElements from './webElements.json';

const custName = process.env.USER1_CUSTOMERNAME!;

test('Login with valid credentials', async ({ page, baseURL }) => {
  const loginPage = new LoginPage(page);

  //Navigate to base URL
  await page.goto(baseURL!);

  //Click "Sign-In" button
  await page.waitForSelector(webElements.loginElements.signInTab);
  await page.locator(webElements.loginElements.signInTab).click();

  //Enter username and password
  await loginPage.login(process.env.USER1_USERNAME!, process.env.USER1_PASSWORD!);

  //Verify "My Account" text
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');

  //Verify logged in customer name
  await expect(page.locator('#menu')).toHaveText(custName); //This will fail for buggy site as customer name displayed as "User Data not found"


});
