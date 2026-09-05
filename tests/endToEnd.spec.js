const {test, expect}=require('@playwright/test');
const { BasePage } = require('../base/BasePage.js');
const {CartPage} = require('../pages/CartPage.js');
const {InventoryPage} = require('../pages/InventoryPage.js');
const {LoginPage} = require('../pages/LoginPage.js');
const {CheckoutPage}=require('../pages/CheckoutPage.js');
const testData=require('../utils/testData.json');

test('SauceDemo End-to-End Flow using POM', async ({ page }) => {
    const loginPage=new LoginPage(page);
    const cartPage=new CartPage(page);
    const checkoutPage=new CheckoutPage(page);
    const inventoryPage=new InventoryPage(page);
    //step 1: Login
    await loginPage.goto();
await loginPage.login(testData.validUser.username, testData.validUser.password );

//Add product to cart
await inventoryPage.addProductToCart();

//click on Cart
await cartPage.clickShoppingCartLink();

//click checkout button
await cartPage.clickCheckoutButton();
//fill checkout info
await checkoutPage.enterCheckoutInformation(testData.checkoutInfo.firstName, testData.checkoutInfo.lastName, testData.checkoutInfo.postalCode);

//click continue button
await checkoutPage.clickContinueButton();

//click finish button

await checkoutPage.clickFinishButton();

//verify confirmation message

await checkoutPage.getConfirmationMessage();

})