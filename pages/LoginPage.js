const { BasePage } = require('../base/BasePage');

class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.InputUsername='//input[@id="user-name"]'
        this.InputPassword='//input[@id="password"]'
        this.loginButton='//input[@id="login-button"]'
        this.errorMessage = page.locator('//h3[@data-test="error"]');


    }
async goto(){
    await this.navigate('https://www.saucedemo.com/');

}
async login(username, password){

    await this.type(this.InputUsername, username);
    await this.type(this.InputPassword, password);
    await this.click(this.loginButton);
}
async getErrorMessage(){
    return this.errorMessage.textContent();
}

}
module.exports = {LoginPage};