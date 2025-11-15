/*This test verifies successfully buy the product added to the cart US8 - AC 1 & 3
- Once successfully signed-in
- Verify the "My Account" text (Pass for both the site)
- Select "Power Tools" from Categories
- Add product to the Cart 
- Verify Cart columns visible
- Verify "Product added to shopping cart." message is displayed (Pass for actual site but fails for buggy site) - Check BUGS.md -> User Story 6 -> Issue 'c'
- Product purchased successfully
*/

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

import webElements from './webElements.json';

test('Verify cart and checkout', async ({ page, baseURL }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

   //Navigate to base URL
  await page.goto(baseURL!);

  //Click "Sign-In" button
  await page.waitForSelector(webElements.loginElements.signInTab);
  await page.locator(webElements.loginElements.signInTab).click();

  //Enter username password
  await loginPage.login(process.env.USER1_USERNAME!, process.env.USER1_PASSWORD!);

  //Wait for "My Account" to appear
  await expect(page.locator(webElements.loginElements.dashboardVisible)).toBeVisible();

  //Click Category and select "Power Tools"
  await page.locator(webElements.dashboardElements.categoriesDropdown).click();
  await expect(page.locator(webElements.dashboardElements.categoriesDropdown)).toBeVisible();
  await page.locator(webElements.dashboardElements.powerTools).click();

  //Verify and add "Sheet Sander"
  await expect(page.locator(webElements.dashboardElements.sheetSander)).toBeVisible();
  await page.locator(webElements.dashboardElements.sheetSander).click();

  //Add product to the cart
  await productsPage.addProductToCart();
  await productsPage.goToCart();

  //Verify "Product added to shopping cart." message is displayed
  await expect(page.locator(webElements.cartElements.msgProductAdded)).toBeVisible(); //This will fail for buggy site as it display error message 'Oeps, something went wrong.']

  // Verify item added
  await cartPage.verifyItemInCart(webElements.cartElements.addedProductName);

  // Click "Proceed to Checkout" for Step 1
  await cartPage.checkout1();

  // Click "Proceed to Checkout" for Step 2
  await cartPage.checkout2();

  //Enter State and Postcode
  await cartPage.fillField("XYZ");

  // Click "Proceed to Checkout" for Step 3
  await cartPage.checkout3();

  //Select option from dropdown
 await cartPage.selectPaymentMethod("Cash on Delivery");

  //Click Confirm to finish
  await cartPage.finishShopping();

  //Verify message "Payment was successfull"
  await expect(page.locator(webElements.cartElements.msgConfirmationAfterSuccess)).toBeVisible();
});
