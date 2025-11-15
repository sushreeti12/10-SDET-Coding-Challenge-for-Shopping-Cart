import { Page, Locator, expect } from '@playwright/test';
import webElements from '../tests/webElements.json';

export class HomePage {
  readonly page: Page;
  readonly contactLink: Locator;
  readonly homeLink: Locator;
  readonly searchTextbox: Locator;
  readonly searchButton: Locator;
  readonly noProductsMessage: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.contactLink = page.locator(webElements.homePageElements.contactButton);
    this.homeLink = page.locator(webElements.homePageElements.homeButton);
    this.searchTextbox = page.locator(webElements.homePageElements.searchField);
    this.searchButton = page.locator(webElements.homePageElements.searchSubmit);
    this.noProductsMessage = page.locator(webElements.homePageElements.noProductFoundMessage);
  }

  async verifyContactText(contactText: string) {
    await expect(this.contactLink).toContainText(contactText); //This will fail for buggy site as “Contact” mis-spelled as “Contackt”
  }

  async gotoHome() {
   await this.homeLink.click();
  }

  async searchUnknownProduct() {
    await this.searchTextbox.click();    
    await this.searchTextbox.type('Unknown');   
    await this.searchButton.click();       
  }

   async verifyNoProductsMessage() {
    await expect(this.noProductsMessage).toBeVisible();
    await expect(this.noProductsMessage).toHaveText("There are no products found.");
  }

}
