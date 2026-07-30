const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage.js');
const testData = require('../utils/testData.json');


test('Login with valid credentials', async({page})=>{
const loginPage=new LoginPage(page);
await loginPage.goto();
await loginPage.login(testData.validUser.username, testData.validUser.password );
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
console.log(page.url());

await page.pause();


})
test('Login with invalid credentials', async({page})=>{
const loginPage=new LoginPage(page);
await loginPage.goto();
await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
const errorMessage=await loginPage.getErrorMessage();
console.log('Error Message:', errorMessage);

await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');

await page.pause();
})

test('Login with Empty Credentials', async({page})=>{
    const loginPage=new LoginPage(page);
    

    loginPage.goto();
    await loginPage.login(testData.emptyUser.username, testData.emptyUser.password);
    const errorMessage=await loginPage.getErrorMessage();
    console.log('Error message:', errorMessage);
    await expect(errorMessage).toBe('Epic sadface: Username is required');

    await page.pause();
})

