import {test, expect} from '@playwright/test';
import webElements from "../webElements.json";

const base = require("@playwright/test");

const loginURL = process.env.ERRORFREE_LOGIN_URL?? "";

test("Verify user can add selected item to the cart", async ({page,}) => {

console.log("Test -------> Verify user can add selected item to the cart")



});