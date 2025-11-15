/*This test verifies product added successfully to the cart US6 - AC1
- Select "Power Tools" from Categories
- Add product to the Cart 
- Verify Cart columns visible
- Verify "Continue Shopping" button is visible (Pass for actual site but fails for buggy site) - Check BUGS.md -> User Story 7 -> Issue 'e'
*/

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import webElements from './webElements.json';

test('Add product to cart', async ({ page, baseURL }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

   //Navigate to base URL
  await page.goto(baseURL!);

  //Click "Sign-In" button
  await page.waitForSelector(webElements.loginElements.signInTab);
  await page.locator(webElements.loginElements.signInTab).click();

  //Enter username password
  await loginPage.login(process.env.USER1_USERNAME!, process.env.USER1_PASSWORD!);

  //Wait for "My Account" to appear
  await expect(page.locator(webElements.loginElements.dashboardVisible)).toBeVisible();

  //Click Category and select "Power Tools" = Sheet Sander
  await productsPage.selectSheetSanderFromPowerTools();

  //Add product to the cart
  await productsPage.addProductToCart();
  await productsPage.goToCart();

  //Check Cart columns heading is visible
  const cart = page.locator(webElements.cartElements.cartColumns);
  await expect(cart).toBeVisible();

  //Check "Continue Shopping" button is available
  await expect(page.locator(webElements.cartElements.cntdShoppingButton)).toBeVisible(); //This will fail for buggy site as "Continue Shopping" button is not visible

});
