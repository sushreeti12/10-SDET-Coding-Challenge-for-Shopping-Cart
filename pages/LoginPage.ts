import { Page, Locator, expect } from '@playwright/test';
import webElements from '../tests/webElements.json';


export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errMsgInvalidUser: Locator;
  readonly errMsgWrongEmailFormat: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(webElements.loginElements.usernameElement);
    this.passwordInput = page.locator(webElements.loginElements.passwordElement);
    this.loginButton = page.locator(webElements.loginElements.loginButton);
    this.errMsgInvalidUser = page.locator(webElements.loginElements.errorMessage);
    this.errMsgWrongEmailFormat = page.locator(webElements.loginElements.invalidEmailMessage);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

    async getErrorMessageInvalidUser() {
    await expect(this.errMsgInvalidUser).toContainText("Invalid email or password");
  }

  async getErrorMessageWrongEmailFormat() {
    await expect(this.errMsgWrongEmailFormat).toContainText("Email format is invalid");
  }

}
