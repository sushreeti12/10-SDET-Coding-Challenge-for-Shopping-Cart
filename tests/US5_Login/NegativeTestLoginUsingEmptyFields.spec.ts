import {test, expect} from '@playwright/test';
import webElements from "../webElements.json";

const base = require("@playwright/test");

//Reset storage state for this file to avoid being authenticated
test.use({storageState: {cookies: [], origins: []}});

const loginURL = process.env.ERRORFREE_LOGIN_URL?? "";

test("Negative Test : Verify Login using Empty fields display an appropriate error message", async ({page,}) => {

console.log("Test -------> Verify Login using Empty fields display an appropriate error message")

//Go to URL
        await page.goto(loginURL);

//Verify Login screen appears
const loginPage = page.locator(webElements.loginElements.loginScreenElement);
await expect(loginPage).toBeVisible();

//Enter Invalid credentials
await page.locator(webElements.loginElements.usernameElement).fill('');
await page.locator(webElements.loginElements.passwordElement).fill('');

//Click Login button
await page.locator(webElements.loginElements.loginButton).click();
await page.waitForTimeout(2000);

//Verify the error message is displayed
const errMsgEmailDisplayed = page.locator(webElements.loginElements.negativeEmailMessage);
const errMsgPasswordDisplayed = page.locator(webElements.loginElements.negativePasswordMessage);
await expect(errMsgEmailDisplayed).toBeVisible();
await expect(errMsgPasswordDisplayed).toBeVisible();

console.log("**-----End of Test----**")

})

