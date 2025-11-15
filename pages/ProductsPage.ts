import { Page, Locator, expect } from '@playwright/test';
import webElements from '../tests/webElements.json';

export class ProductsPage {
  readonly page: Page;
  readonly categoriesDropdown: Locator;
  readonly powerTools: Locator;
  readonly sheetSander: Locator;
  readonly addToCartButtons: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoriesDropdown = page.locator(webElements.dashboardElements.categoriesDropdown);
    this.powerTools = page.locator(webElements.dashboardElements.powerTools);
    this.sheetSander = page.locator(webElements.dashboardElements.sheetSander);
    this.addToCartButtons = page.locator(webElements.productsElements.addToCartButtons);
    this.cartIcon = page.locator(webElements.productsElements.cartIcon);
  }

  //Click Categories
  async openCategoryDropdown() {
    await this.categoriesDropdown.click();
    await expect(this.categoriesDropdown).toBeVisible();
  }

  //Select "Power Tool"
  async selectPowerTools() {
    await this.powerTools.click();
  }

  //Select Sheet Shander
  async openSheetSander() {
    await expect(this.sheetSander).toBeVisible();
    await this.sheetSander.click();
  }

  async selectSheetSanderFromPowerTools() {
    await this.openCategoryDropdown();
    await this.selectPowerTools();
    await this.openSheetSander();
  }
  
  //Click "Add to Cart" button
  async addProductToCart() {
    await this.addToCartButtons.click();
  }

  //Click "Cart" icon
  async goToCart() {
    await this.cartIcon.click();
  }
}
