const {expect, test} = require('@playwright/test');
const {CartPage} = require('../pages/CartPage.js');
const {InventoryPage} = require('../pages/InventoryPage.js');
const {LoginPage} = require('../pages/LoginPage.js');
const {CheckoutPage}=require('../pages/CheckoutPage.js')
const {BasePage}=require('../base/BasePage.js')
const testData=require('../utils/testData.json');

let loginPage;
let inventoryPage;


test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
});

test("Verify Cart Items Name", async ({page}) => {
    const cartPage = new CartPage(page);
    await inventoryPage.addProductToCart();
    await inventoryPage.clickCartLink();
    const cartItemsName = await cartPage.getCartItemsName();
    expect(cartItemsName).toContain('Sauce Labs Backpack');

})

test("Verify Checkout Flow", async ({page}) => {
    const cartPage = new CartPage(page);
    const checkoutPage=new CheckoutPage(page);
    await inventoryPage.addProductToCart();
    await inventoryPage.clickCartLink();


    await cartPage.clickCheckoutButton();
    await checkoutPage.enterCheckoutInformation(testData.checkoutInfo.firstName, testData.checkoutInfo.lastName, testData.checkoutInfo.postalCode);
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();

    await checkoutPage.checkoutCancelButton();

    await checkoutPage.getConfirmationMessage();
})
test("Verify Checkout End to End flow with cancel", async ({page})=>{

const cartPage = new CartPage(page);
    const checkoutPage=new CheckoutPage(page);
    await inventoryPage.addProductToCart();
    await inventoryPage.clickCartLink();
    await cartPage.clickCheckoutButton();
   await checkoutPage.clickCancelButton();
   
})

