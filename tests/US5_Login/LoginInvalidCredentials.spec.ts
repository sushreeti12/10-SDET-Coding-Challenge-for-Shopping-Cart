import {test, expect} from '@playwright/test';
import webElements from "../webElements.json";

const base = require("@playwright/test");

//Reset storage state for this file to avoid being authenticated
test.use({storageState: {cookies: [], origins: []}});

const loginURL = process.env.ERRORFREE_LOGIN_URL?? "";

test("Verify Invalid credentials display an appropriate error message", async ({page,}) => {

console.log("Test -------> Verifies login with invalid credentials display error message")

//Go to URL
        await page.goto(loginURL);

//Verify Login screen appears
const loginPage = page.locator(webElements.loginElements.loginScreenElement);
await expect(loginPage).toBeVisible();

//Enter Invalid credentials
await page.locator(webElements.loginElements.usernameElement).fill(process.env.INVALID_USERNAME!);
await page.locator(webElements.loginElements.passwordElement).fill(process.env.INVALID_PASSWORD!);

//Click Login button
await page.locator(webElements.loginElements.loginButton).click();
await page.waitForTimeout(2000);

//Verify the error message is displayed
const errMsgDisplayed = page.locator(webElements.loginElements.errorMessage);
await expect(errMsgDisplayed).toBeVisible();

console.log("**-----End of Test----**")

})

