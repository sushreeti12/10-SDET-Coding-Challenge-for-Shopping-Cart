# 10-SDET-Coding-Challenge-for-Shopping-Cart
Automated test suite for the shopping cart

🥋 Getting Started with Automation Tests 
Welcome to the repository! 

How to install and run tests - Follow Step 1 to Step 8
Frameworks and libraries used - Follow Step 9
File Structure - Follow Step 10
How to Switch between the URLs - Follow Step 11
Negative Test Cases for the Test stories - Follow Step 12


1. 📥 Clone the Repo
Clone this repository to your local machine:


git clone https://github.com/sushreeti12/10-SDET-Coding-Challenge-for-Shopping-Cart.git

2. ☕ Install the Latest JDK
You must have Java (JDK) installed.
Download and install the latest JDK from Oracle:
👉 Download JDK from - https://www.oracle.com/java/technologies/downloads/
(I am currently using JDK 25)
Set the user and system variable

Follow the installation for your operating system (Windows, macOS, or Linux).

3. 🧑‍💻 Open in VSCode
Open Visual Studio Code
If you don’t have then Download VS Code using code.visualstudio.com/download
·  	Select the OS e.g. Click Windows for Windows OS
·  	If download doesn’t start, click “Direct Download Link”
·  	Then from your download folder double click “VSCodeUserSetup-x64-1.95.3”
o   A dialogue will open, from the License Agreement window click the radio button for “I accept the agreement”
o   Click Next
o   Click Browse to select the folder where you want to install the VSCode
o   Click Next
o   Click Next
o   Click Next
o   Click Install
·  	Click Finish
 
Now the VSCode application will open automatically. Keep it open

Go to File → Open Folder... and select the cloned repo

4. 🧑‍💻Download Node js using https://nodejs.org/en/
 
Using terminal npm init playwright@latest
Y
Typescript
Tests
True
True

Also using terminal type “npm install -save-dev dotenv”

5. 🧩 Install “Playwright Test for VSCode" Extension
	o   Search for “Playwright Test for VSCode”
o   Click Install
o   Click “Ctrl+Shift+P” to bring the Command Palette
o   Type “Install Playwright”
o   Click the “Install Playwright”
o   Click “OK”
 Ok to proceed(y) : type y and press enter
Next “Typescript” is highlighted in blue : Press Enter
(if not select “Typescript” using arrow key, when its highlighted blue press Enter)
Where to put end-to-end tests? >> tests : Press Enter
Add Github action workflow: type y and press enter
Install playwright browsers : Press Enter

6. ⚙️ From left menu click “Extension”
o   Search for “Test Runner for Java”
o   Click Install
 
7. From left menu click “Testing”
o   Click “tests”
o   Click play button for the test you wish to run


8. ✅ Done! Ready to Run the Tests
You can now use the Test Runner extension in VSCode to run and explore the tests directly from your IDE.


9. 📝 Frameworks and libraries : Playwright using Typescript
Framework: Playwright Test
Language: TypeScript
Libraries: dotenv, fs, path, Playwright itself

Make sure you have Node.js installed (v18+ recommended).
npm init -y
npm install -D playwright typescript ts-node @types/node dotenv
Optional but recommended: install browsers for Playwright
npx playwright install

10. 🗂️ File Structure of the Tests

10-SDET-Coding-Challenge-for-Shopping-Cart/tests   <- Main Directory
playwright/
├─ pages/
│  ├─ CartPage.ts
│  ├─ HomePage.ts
│  ├─ LoginPage.ts
│  └─ ProductsPage.ts
├─ tests/
│  ├─ auth.setup.ts
│  ├─ buyFromCart.spec.ts
│  ├─ login.spec.ts
│  ├─ negativeSearchForProductNotListed.spec.ts
│  ├─ negativeTestForLoginPage.spec.ts
│  └─ productsAddedToCart.spec.ts
├─ .env.good
├─ .env.buggy
├─ BUGS.md
├─ playwright.config.ts
└─ README.md

11. How to Switch between the URLs
npx playwright test
Playwright will pick up the projects defined in playwright.config.ts and run them sequentially (GOOD and BUGGY).

# Actual site only
npx playwright test --project=GOOD-SITE

# BUGGY site only
npx playwright test --project=BUGGY-SITE

# UI
npx playwright test --ui

12. Negative Test Cases for the Test stories
	US1: Search for product not listed - Test pass, no result found message displayed
	US2: Try clicking '-' to reduce the quantity to 0 or -1 - Test pass, don't go below 1
	US3: Search using special character - Test pass, no results found message displayed
	US4: Search category with no product - Test pass, no results found message displayed
	US5: Wrong email format - Test pass in actual site, error message displayed
	US6: Try to add "Out of Stock" product: Test Fail, item added successfully to the cart
	US7: Use backspace to update quantity: Test Fail, quantity reduced to 1 on using backspace
	US8: Invalid postcode : Test Fail, accepts any value
	US9: Try to clear session cookies to check if order history retain: Couldn't test as "Order History"    
	     page not available
	US10: Use combination that leads to zero result: Test Pass, There are no products found message displayed

