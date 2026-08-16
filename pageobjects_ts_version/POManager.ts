import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { Page, expect } from '@playwright/test';


export class POManager {

       page: Page;
       expect: typeof expect;
      



       constructor(page: Page, expect: any) {
              this.page = page;
              this.expect = expect;

       }


       getLoginPage() {
            const loginPage= new LoginPage(this.page);
              return loginPage;
       }

       getHomePage() {
              const homePage = new HomePage(this.page);
              return homePage;

       }

       getCartPage() {
              const cartPage = new CartPage(this.page, this.expect);
              return cartPage;
       }

       getCheckoutPage() {
              const checkoutPage = new CheckoutPage(this.page);
              return checkoutPage;

       }
}

