const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');
const {CartPage} = require('./CartPage');
const {CheckoutPage} = require('./CheckoutPage');

class POManager{


       constructor(page,expect){
              this.page = page;
              this.expect = expect;

       }


       getLoginPage(){
                const loginPage = new LoginPage(this.page);
                return loginPage;
       }

       getHomePage(){
              const homePage = new HomePage(this.page);
              return homePage;

       }

        getCartPage(){
                const cartPage = new CartPage(this.page,this.expect);
                return cartPage;
       }

       getCheckoutPage(){
              const checkoutPage = new CheckoutPage(this.page);
              return checkoutPage;

       }
}

module.exports = {POManager};