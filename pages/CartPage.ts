import { Page, Locator, expect } from '@playwright/test';
import webElements from '../tests/webElements.json';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton1: Locator;
  readonly checkoutButton2: Locator;
  readonly fillState: Locator;
  readonly fillPostcode: Locator;
  readonly checkoutButton3: Locator;
  readonly cartItems: Locator;
  readonly confirmButton: Locator;
  readonly paymentDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton1 = page.locator(webElements.cartElements.chkoutButton1);
    this.checkoutButton2 = page.locator(webElements.cartElements.chkoutButton2);
    this.fillState = page.locator(webElements.cartElements.addState);
    this.fillPostcode = page.locator(webElements.cartElements.addPostcode);
    this.checkoutButton3 = page.locator(webElements.cartElements.chkoutButton3);
    this.cartItems = page.locator(webElements.cartElements.cartItems);
    this.paymentDropdown= page.locator(webElements.cartElements.payOptions);
    this.confirmButton= page.locator(webElements.cartElements.finishShoppingButton);
  }

  async verifyItemInCart(productName: string) {
    await expect(this.cartItems).toContainText(productName);
  }

  async checkout1() {
    await this.checkoutButton1.click();
  }

   async checkout2() {
    await this.checkoutButton2.click();
  }

   async fillField(text: string) {
    await this.fillState.fill(text);
     await this.fillPostcode.fill(text);
  }

  async checkout3() {
    await expect(this.checkoutButton3).toBeEnabled();
    await this.checkoutButton3.click();
  }

  async selectPaymentMethod(paymentValue: string) {
    await this.paymentDropdown.selectOption({label: paymentValue});
  }

  async finishShopping() {
    await this.confirmButton.click();
  }
}
