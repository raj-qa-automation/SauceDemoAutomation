const { expect } = require('@playwright/test');
const {BasePage} = require('../base/BasePage.js');

class CheckoutPage extends BasePage{
    constructor(page){
        super(page);
        this.checkoutTitle='[data-test="title"]';//checkout title
        this.checkoutFirstName='[data-test="firstName"]';
        this.checkoutLastName='[data-test="lastName"]';
        this.checkoutPostalCode='[data-test="postalCode"]';
        this.checkoutContinueButton='[data-test="continue"]';
        this.checkoutCancelButton='[data-test="cancel"]';
        this.checkoutOverviewTitle='[data-test="title"]';
        this.checkoutFinishButton='[data-test="finish"]';
         this.confirmationMessage = '.complete-header';

    }

    async verifyCheckoutPage(){
        await this.isVisible(this.checkoutTitle);
        console.log('Is checkout title visible:', isVisible);
        return isVisible;
    }

    async enterCheckoutInformation(firstName, lastName, postalCode){
        await this.type(this.checkoutFirstName, firstName);
        await this.type(this.checkoutLastName, lastName);
        await this.type(this.checkoutPostalCode, postalCode);
        console.log("Entered Checkout Information: ", firstName, lastName, postalCode);
    }
    
async clickContinueButton(){
    await this.click(this.checkoutContinueButton);
    console.log('Clicked on continue button');
}
async checkoutOverviewTitle(){
    const overviewTitle=await this.getText(this.checkoutOverviewTitle);
    console.log('Checkout overview title:', overviewTitle);
    return overviewTitle;
}

//async clickCancelButton(){
  //  await this.click(this.checkoutCancelButton);
    //console.log('Clicked on cancel button');
//}

async clickFinishButton(){
    await this.click(this.checkoutFinishButton);
    console.log('Clicked on finish button');
}
// Verify confirmation
  
    async getConfirmationMessage(){
    const text= await this.getText(this.confirmationMessage);
    console.log("Confirmation Message: "+text);
    expect(text).toContain('Thank you for your order!');
    return text;
}
  }
  
module.exports = { CheckoutPage };

