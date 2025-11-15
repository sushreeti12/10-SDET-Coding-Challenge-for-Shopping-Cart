/*This test 
- Verify Contact text (Pass for actual site but fails for buggy site) - Check BUGS.md -> User Story 1 -> Issue 'a (ii)' “Contact” mis-spelled as “Contackt”
- Go to home
- Search for item not listed (Negative test for US1)
 */

import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { HomePage } from '../pages/HomePage';
import webElements from './webElements.json';

test('Add product to cart', async ({ page, baseURL }) => {
  const productsPage = new ProductsPage(page);
  const homePage = new HomePage(page);

   //Navigate to base URL
  await page.goto(baseURL!);

  //Check Contact button text
  await homePage.verifyContactText(webElements.homePageElements.textForContactType); //This will fail for buggy site as “Contact” mis-spelled as “Contackt”

  //Navigate to home
  await homePage.gotoHome();

  //Serch for "Unknown" product
  await homePage.searchUnknownProduct();

  //Result for Searching product not listed
  await homePage.verifyNoProductsMessage();
  


});
