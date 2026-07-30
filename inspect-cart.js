const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="shopping-cart-link"]');

  const selectors = [
    'div[data-test="cart-item"]',
    'div.cart_item',
    'div[data-test="cart-list"]',
    '.inventory_item_name',
    '.cart_quantity'
  ];

  for (const selector of selectors) {
    const count = await page.locator(selector).count();
    console.log(selector, count);
  }

  console.log(await page.locator('body').innerText());
  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
