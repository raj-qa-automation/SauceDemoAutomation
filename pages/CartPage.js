const { BasePage } = require('../base/BasePage.js');

class CartPage extends BasePage{
    constructor(page){
        super(page);
        this.cartList='div[data-test="cart-list"]';//cart list
        this.cartListItems='div.cart_item';//cart Items
        this.cartListTitle='[data-test="title"]';   //cart title
        this.removeFirstItemButton='[data-test="remove-sauce-labs-backpack"]';//remove button for first item    
        this.shoppingCartLink='[data-test="shopping-cart-link"]';
        this.backpackAddedToCart='[data-test="add-to-cart-sauce-labs-backpack"]';//add to cart button for backpack  
        //this.cartListItemsCount='div[data-test="cart-item"]';//cart items count
        //this.cartListItemsName='div[class="inventory_item_name"]';//cart items name
        this.cartCheckoutButton='[data-test="checkout"]';//checkout button 
        this.cartItemsName='div[class="inventory_item_name"]';//cart items name
        

    }

    async verifyCartPage(){
        const isVisible=await this.isVisible(this.cartList);
        console.log('Is cart list visible:', isVisible);
        return isVisible;
    }
    async getCartItemCount(){
        const cartItems=await this.getCount(this.cartListItems);
        console.log('Number of cart itemss:', cartItems);
        return cartItems;
    }
    async getCartTitleText(){
        const titleText=await this.getText(this.cartListTitle);
        console.log('Cart title text:', titleText);
        return titleText;
    }
    //async removeFirstItemFromCart(){
      //  await this.click(this.removeFirstItemButton);
        //console.log('Clicked on remove button for first item in cart');
    //}

async clickShoppingCartLink(){
    await this.click(this.shoppingCartLink);
    console.log('Clicked on shopping cart link');
}
async clickCheckoutButton(){
    await this.click(this.cartCheckoutButton);
    console.log('Clicked on checkout button');
}


async getCartItemsName(){
    const cartItemsName=await this.getText(this.cartItemsName);
    console.log('Cart items name:', cartItemsName);
    return cartItemsName;

}
}

module.exports = { CartPage };
