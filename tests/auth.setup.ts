import {test as setup, expect} from '@playwright/test';
import webElements from "../tests/webElements.json";

const base = require("@playwright/test");
const loginURL = process.env.ERRORFREE_LOGIN_URL?? "";

const authFile = 'playwright/.auth/user.json';

    setup('Login_withValidUserCredentials_dasboardIsDisplayed', async ({page}) => {

        //Perform authentication steps.
        //Go to URL
        await page.goto(loginURL);

        const usernameInput = page.locator(webElements.loginElements.usernameElement);
        const passwordInput = page.locator(webElements.loginElements.passwordElement);
        const loginButton = page.locator(webElements.loginElements.loginButton);
        const dashboardDisplayed = page.locator(webElements.loginElements.dashboardVisible);

        console.log("Test -------> Verifies user with valid credentials logged in successfully")

        //Enter username and password
        await usernameInput.fill(process.env.USER1_USERNAME!);
        await passwordInput.fill(process.env.USER1_PASSWORD!);

        //Click Login button
        await loginButton.click();
        await page.waitForTimeout(2000);
    
        //Verify dashboard is displayed
        await expect(dashboardDisplayed).toBeVisible();

        //End of authentication steps.
        await page.waitForTimeout(2000);
        await page.context().storageState({path: authFile});

        console.log("**-----End of Test----**")
    });
