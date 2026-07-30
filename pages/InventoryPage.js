const {BasePage}= require('../base/BasePage.js');

class InventoryPage extends BasePage {
    constructor(page){
        super(page);
        this.inventoryList = 'div[data-test="inventory-list"]';
        this.inventoryListItems = 'div[data-test="inventory-item"]';
        this.inventoryListTitle = '[data-test="title"]';
        this.cartLink = '[data-test="shopping-cart-link"]';
        this.addProductToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    }

    async verifyInventoryPage(){
        const isVisible = await this.isVisible(this.inventoryList);
        console.log('Is inventory list visible:', isVisible);
        return isVisible;
    }

    async getItemCount(){
        const inventoryItems = await this.getCount(this.inventoryListItems);
        console.log('Number of inventory items:', inventoryItems);
        return inventoryItems;
    }

    async getTitleText(){
        const titleText = await this.getText(this.inventoryListTitle);
        console.log('Title text:', titleText);
        return titleText;
    }
    async clickCartLink(){
        await this.click(this.cartLink);
        console.log('Clicked on cart link');
    }

    async addProductToCart(){
        await this.click(this.addProductToCartButton);
        console.log('Clicked on add to cart button for Sauce Labs Backpack');
    }
}

module.exports = { InventoryPage };