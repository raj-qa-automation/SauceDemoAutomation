const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');
const { InventoryPage } = require('../pages/InventoryPage.js');
const { CartPage } = require('../pages/CartPage.js');
const testData=require('../utils/testData.json');

let loginPage;
let inventoryPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
});

test('Verify Cart Page functionality', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.clickCartLink();
    const isVisible = await cartPage.verifyCartPage();
    expect(isVisible).toBeTruthy();
});

test('Verify Cart Item Count', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.addProductToCart();
    await inventoryPage.clickCartLink();
    const itemCount = await cartPage.getCartItemCount();
    expect(itemCount).toBeGreaterThan(0);
});

test('Verify Cart Title Text', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.clickCartLink();
    const titleText = await cartPage.getCartTitleText();
    expect(titleText).toContain('Your Cart');
});

test('Verify Checkout Button Click', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.clickCartLink();
    await cartPage.clickCheckoutButton();
    await expect(page).toHaveURL(/checkout-step-one\.html/);
});

test('Verify Shopping Cart Link Click', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.clickCartLink();
    await cartPage.clickShoppingCartLink();
    await expect(page).toHaveURL(/cart\.html/);
});

test('Verify Add Backpack to Cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.addProductToCart();
    await inventoryPage.clickCartLink();
    const itemCount = await cartPage.getCartItemCount();
    expect(itemCount).toBeGreaterThan(0);
});
test('Verify Cart Items Name', async ({ page }) => {
    const cartPage = new CartPage(page);
    await inventoryPage.addProductToCart();
    await inventoryPage.clickCartLink();
    const cartItemsName = await cartPage.getCartItemsName();
    expect(cartItemsName).toContain('Sauce Labs Backpack');
});

