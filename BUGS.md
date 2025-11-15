Bug Report Summary
Base URL for Buggy Site: https://with-bugs.practicesoftwaretesting.com/
Base URL for Site: https://practicesoftwaretesting.com/

Documented which tests failed and why (based on my analysis)
│  ├── buyfromcart.spec.ts : - Fails at Step 50 as this test verifies "Product added to shopping cart." message is displayed. It fails for buggy site as it display error message 'Oeps, 
                               something went wrong.' on adding item on cart- Check here -> User Story 6 -> Issue 'c'
│  ├─ login.spec.ts : Fails at Step 30 as this test verifies logged in user's customer name.It fails for buggy site since customer name is not displayed instead it display "User Data not 
                      found"- Check here -> User Story 5 -> Issue 'c'
│  ├─ negativeSearchforproductnotlisted.spec.ts - Fails at step 20 as this test verifies Contact text. It fails for buggy site as “Contact” mis-spelled as “Contackt”-
                                                  Check here -> User Story 1 -> Issue 'a (ii)' “Contact” mis-spelled as “Contackt”
│  ├─negativeTestForLoginPage.spec.ts Fails at Step 44 as this test verifies error message for wrong email 
                                      format.It fails for buggy site as error message not displayed for wrong email format instead displayed "Invalid email or password". 
                                      Check here -> User Story 5 -> Issue 'a' 
│  └─ productsaddedtocart.spec.ts - Fails at Step 44 as this test verifies "Continue Shopping" button is visible. It fails for buggy site as "Continue Shopping" button is not visible 
                                    Check here -> User Story 7 -> Issue 'e'


More Bugs related to the User Stories including the listed above(couldn't automate everything in given timeframe)

1.	View Product List
    a.	Bugs at “Home” page
        i.	“Home” button navigate to wrong page
            1.	Steps to Reproduce
                a.	Navigate to Base URL for Buggy Site
                b.	Click “Home”
            2.	Expected Behaviour : Stays at base URL and displays a list of products with names, images, and prices.
            3.	Actual Behaviour:Navigate user to Contact page i.e. https://with-bugs.practicesoftwaretesting.com/#/contact
        ii.	“Contact” mis-spelled as “Contackt”
            1.	Steps to Reproduce
                a.	Navigate to Base URL for Buggy Site
                b.	Check for “Contackt” on right top side
            2.	Expected Behaviour : It should spell “Contact”
            3.	Actual Behaviour:Spells “Contackt”
        iii.	“Tool Shop Demo” not displayed
            1.	Steps to Reproduce
                a.	Navigate to Base URL for Buggy Site
                b.	Check for the “Tool Shop Demo” image on left top corner
            2.	Expected Behaviour : Image should be loaded
            3.	Actual Behaviour:Broken.png displayed instead of actual image
        iv.	Language dropdown missing
            1.	Steps to Reproduce
                a.	Navigate to Base URL for Buggy Site
                b.	Check for “Language” dropdown
            2.	Expected Behaviour : “Language” dropdown should be available so that user can select preferred language
            3.	Actual Behaviour:Dropdown Missing


2.	View Product Details
    a.	Unable to change Product Quantity (- 0r +)
    Note: This bug exist in logged in version as well
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/category/hand-tools
            2.	Select any tool to view product details
            3.	Try to increase or decrease the quantity of the product by clicking + or -
        ii.	Expected Behaviour : Quantity should increase or decrease on clicking + or - respectively
        iii.	Actual Behaviour:Quantity stays 1
    b.	“Add to Cart” button overlaps with “Add to Favourites” button
    Note: This bug exist in logged in version as well
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/category/hand-tools
            2.	Select any tool to view product details
            3.	Check “Add to cart” button
        ii.	Expected Behaviour : “Add to Cart” button should display next to the “Add to Favourites” button without overlapping
        iii.	Actual Behaviour:“Add to Cart” button overlaps with “Add to Favourites” button


3.	Search for a Product
    a.	Search bar is missing from the buggy site
        i.	Steps to Reproduce : 
            1.	Since user can’t navigate to home page so can’t access “Search” bar
        ii.	Expected Behaviour : User should be navigated correctly to Home page to gain access to “Search Bar”
        iii.	Actual Behaviour:Navigate user to Contact page i.e. https://with-bugs.practicesoftwaretesting.com/#/contact


4.	Filter Products by Category
    a.	Two Category missing from the category dropdown
        i.	Steps to Reproduce
            1.Navigate to Base URL for Buggy Site
            2.Click the “Category” dropdown from the right top corner
        ii.	Expected Behaviour : 
            1.“Other” category should be listed
            2.“Special Tools” should be listed
        iii. Actual Behaviour:
            1.“Undefined” category listed
            2.“Chainsaws” is listed
    b.	Clicking on “Chainsaws” category throws 404 error page
        i.	Steps to Reproduce
            1.	Navigate to Base URL for Buggy Site
            2.	Click the “Category” dropdown from the right top corner
            3.	Select “Chainsaws”
        ii.	Expected Behaviour : “Special Tools” should be listed instead of “Chainsaws”
        iii. Actual Behaviour: Navigate user to 404 Error “Page not found”
 

5.	Login
    a.	No error message displayed for wrong email format (user not logged in)
        i.	Steps to Reproduce
            1.Navigate to https://with-bugs.practicesoftwaretesting.com/#/auth/login for buggy site
            2.Enter wrong email format e.g. “abc”
            3.Enter password e.g. “abc45666”
            4.Click login button
        ii.	Expected Behaviour : Email format is invalid and Password length is invalid should be displayed instead
        iii. Actual Behaviour: Invalid email or password is dispalyed instead
    b.	Issue on login page (user not logged in)
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/auth/login for buggy site
            2.	Check the following
                a.	Email Address Label
                b.	Password Label
                c.	Size of Password field textbox
        ii.	Expected Behaviour : 
                1.	Email Address Label should exist
                2.	Password Label should exist
                3.	Size of Password and email address field textbox should be equal 
        iii.	Actual Behaviour:
                1.	Email Address Label missing
                2.	Password Label missing
            3.	Size of Password field textbox smaller than email address field
    c.	Username not displayed after successful log in
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/auth/login for buggy site
            2.	Login as Jane Doe using email: customer@practicesoftwaretesting.com and password : welcome01
            3.	Check the user-menu
        ii.	Expected Behaviour : “Jane Doe” should be displayed
        iii.	Actual Behaviour:'User Data not found' displayed instead of username
    d.	User “Bob Smith” fails to login
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/auth/login for buggy site
            2.	Try to login as Bob Smith using email: customer3@practicesoftwaretesting.com and password : pass123
        ii.	Expected Behaviour : User should login successfully
        iii.	Actual Behaviour:Invalid email and password message displayed
    e. No error message displayed for password length (user not logged in)
        i.	Steps to Reproduce
            1.Navigate to https://with-bugs.practicesoftwaretesting.com/#/auth/login for buggy site
            2.Enter email as e.g. “abc@example.com”
            3.Enter password e.g. “abc”
            4.Click login button
        ii.	Expected Behaviour :"Password length is invalid" should be displayed instead
        iii. Actual Behaviour: Invalid email or password is dispalyed instead


6.	Add Product to Cart
    a.	Unable to change Product Quantity (- 0r +)
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/category/hand-tools
            2.	Select any tool to view product details
            3.	Try to increase or decrease the quantity of the product by clicking + or -
        ii.	Expected Behaviour : Quantity should increase or decrease on clicking + or - respectively
        iii.	Actual Behaviour:Quantity stays 1
    b.	Out of stock Item are added to the cart
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/product/28 for buggy site 
                Or
                Navigate to
                https://practicesoftwaretesting.com/product/01K9YZ49QV58B9TVM3RGP83MQ1 for actual site
            2.	Click “Add to Cart”
        ii.	Expected Behaviour : Product should not be added to the cart and message should be displayed to inform users the same.
        iii.	Actual Behaviour:Product added to the cart
    c.	Clicking on “Add to Cart” displays error message
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/category/hand-tools
            2.	Select any tool to view product details
            3.	Click “Add to cart” button
        ii.	Expected Behaviour : 
            1.	Product should be added to the cart as per selected quantity
            2.	“Product added to the shopping cart” Message should be displayed to confirm 
        iii.	Actual Behaviour:Clicking on “Add to Cart” 
            1.	Display error message “Oeps something went wrong” where “oeps” is mis-spelled and should be “oops”
            2.	Product is still added to the cart


7.	Update or Remove from Cart
    a.	Accepts 0 or -ve value for quantity on checkout screen
        i.	Steps to Reproduce
            1.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/auth/login for buggy site
            2.	Login as Jane Doe using email: customer@practicesoftwaretesting.com and password : welcome01
            3.	Select “Hand tools” from Categories dropdown
            4.	Select an item
            5.	Click “Add to Cart”
            6.	Click “Shopping Cart” icon
            7.	Change the quantity to 0 0r -1
        ii.	Expected Behaviour :
            1.	 Quantity should not accept negative value and 
            2.	Updating the quantity to 0 should remove the product from the cart
        iii.	Actual Behaviour:Accepts 0 or negative value
    b.	Line Price value stays $00.00
        i.	Steps to Reproduce
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Check Line Price total
        ii.	Expected Behaviour :
            1.	 Total should be calculated and displayed as per the added quantity
            iii.	Actual Behaviour:Line Price value stays $00.00
    c.	“Total” heading displayed about “Remove” icon
        i.	Steps to Reproduce
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Check the heading above “Remove” X icon (//table[contains(@class,'table table-hover')]/thead[1]/tr[1]/th[6])
        ii.	Expected Behaviour :“Total” heading should not be displayed about “Remove” icon
        iii.	Actual Behaviour:“Total” heading displayed about “Remove” icon
    d.	“Remove” icon doesn’t work
        i.	Steps to Reproduce
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Click “Remove” X icon to remove the product from the cart
        ii.	Expected Behaviour :Product should be removed
        iii.	Actual Behaviour:X button is disabled, doesn’t remove the product
    e.	“Continue Shopping” button missing
        i.	Steps to Reproduce
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://practicesoftwaretesting.com/checkout for actual site
            3.	Use backspace to edit the quantity
        ii.	Expected Behaviour :Button should be visible and enabled
        iii.	Actual Behaviour:Button missing
    f.	Item in cart can be increased by two digit not one in actual site
        i.	Steps to Reproduce
            1.	Given there is a product added to the cart and quantity is more that 5
            2.	Navigate to https://practicesoftwaretesting.com/checkout
            3.	Try updating the quantity to 9
        ii.	Expected Behaviour :User should be able to update the quantity to single digit(1 or more)
        iii. Actual Behaviour:Unable to update the quantity in single digit, but user can update it to 60,666,6666 if the quantity is 6 
    g.	Using “Backspace” update the quantity to 1
        i.	Steps to Reproduce
            1.	Given there is a product added to the cart and quantity is more that 5
            2.	Navigate to https://practicesoftwaretesting.com/checkout
            3.	Use “Backspace” to edit the quantity
        ii.	Expected Behaviour :User should be able to update the quantity (1 or more)
        iii.	Actual Behaviour:Quantity is updated to 1 


8.	Complete Checkout
    a.	“Address heading” instead of “Billing Address” (Step 2)
        i.	Steps to Reproduce: 
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Check the label for Step 3
        ii.	Expected Behaviour : Label should be “Billing Address”
        iii.	Actual Behaviour:Label is “Address”
    b.	“Your Postcode” field have text “missing value” (Step 2)
        i.	Steps to Reproduce: 
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Click “Proceed to Checkout” button Step 1 Cart
            4.	Click “Proceed to Checkout” button Step 2 Sign-In
            5.	Check last “Postcode” field
        ii.	Expected Behaviour : Field should display “Your Postcode” (* to show mandatory field)
        iii.	Actual Behaviour:Field already have a text i.e. “missing value”
    c.	“Proceed to Checkout” button exist without text just a green rounded rectangle (Step-3)
        i.	Steps to Reproduce: 
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Click “Proceed to Checkout” button Step 1 Cart
            4.	Click “Proceed to Checkout” button Step 2 Sign-In
            5.	Enter text to “State” field
        ii.	Expected Behaviour : “Proceed to Checkout” button should display text
        iii.	Actual Behaviour:“Proceed to Checkout” button exist without text just a green rounded rectangle
    d.	“Choose your payment method” dropdown have option 'Errror 304 - Missing Payment Gateway' (Step 4)
        i.	Steps to Reproduce: 
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Click “Proceed to Checkout” button Step 1 Cart
            4.	Click “Proceed to Checkout” button Step 2 Sign-In
            5.	Enter text to “State” field and click the available green rounded square
            6.	Click the “Choose your payment method” dropdown to check the available options
        ii.	Expected Behaviour : 'Errror 304 - Missing Payment Gateway' should not be displayed
        iii.	Actual Behaviour:'Errror 304 - Missing Payment Gateway' is displayed
    e.	“Your Account Name” & “Your Account Number” field is displayed always in Payment page (step 4)for all the available options
        i.	Steps to Reproduce: 
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Click “Proceed to Checkout” button Step 1 Cart
            4.	Click “Proceed to Checkout” button Step 2 Sign-In
            5.	Enter text to “State” field and click the available green rounded square
            6.	Check the available fields
        ii.	Expected Behaviour : “Your Account Name” & “Your Account Number” field should only be displayed on selecting “Bank Transfer” from the dropdown
        iii.	Actual Behaviour:“Your Account Name” & “Your Account Number” field is displayed always irrespective of dropdown selection.
    f. Cart value don't update after successfull checkout need to delete cookies
        i.	Steps to Reproduce: 
            1.	Given there is a product added to the cart and quantity is more that 2
            2.	Navigate to https://with-bugs.practicesoftwaretesting.com/#/checkout for buggy site
            3.	Click “Proceed to Checkout” button Step 1 Cart
            4.	Click “Proceed to Checkout” button Step 2 Sign-In
            5.	Enter text to “State” field and click the available green rounded square
            6.	Select "Cash on delivery" from dropdown
            7.  Enter anything for “Your Account Name” & “Your Account Number”
            8.  Click 'Confirm'
        ii. Expected Behaviour : Cart should be empty
        iii. Actual Behaviour: Cart still not empty

9.	“View Order History” (Both site)
    a.	“My Orders” or “Order History” page
        i.	Steps to Reproduce: Listed page not available anywhere
        ii.	Expected Behaviour : Page should be available to view previous orders.
        iii. Actual Behaviour:Page not displayed


10.	Category Filtering and Reset (affect both the sites)
    a.	Refreshing page clear the selected filter
        i.	Steps to Reproduce: 
            1.	Navigate to https://practicesoftwaretesting.com/category/power-tools for actual site
				Or
				Navigate to
                https://with-bugs.practicesoftwaretesting.com/#/category/power-tools for buggy site
        2.	Select “Sander” from the power tool category
        3.	Click “refresh” option to refresh the page
        ii.	Expected Behaviour : Selected filter states should persist when navigating back or refreshing the page. 
        iii. Actual Behaviour:Selected filter states don’t persist when navigating back or refreshing the page. 
    b.	“Clear Filters” button not available
        i.	Steps to Reproduce: Listed button not available anywhere
        ii.	Expected Behaviour : Button should be available to restore the full list.
        iii.Actual Behaviour:Button not displayed
