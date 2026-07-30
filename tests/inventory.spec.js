const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');
const { InventoryPage } = require('../pages/InventoryPage.js');
const testData =require('../utils/testData.json');

let loginPage;
let inventoryPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    console.log("Logged in with "+testData.validUser.username+" and "+ testData.validUser.password);    
});

test('Verify Inventory Page after successful login', async ({ page }) => {
    const isVisible = await inventoryPage.verifyInventoryPage();
    expect(isVisible).toBeTruthy();

    const count = await inventoryPage.getItemCount();
    expect(count).toBeGreaterThan(0);

    const titleText = await inventoryPage.getTitleText();
    expect(titleText).toContain('Products');

    await page.waitForTimeout(5000);
});
