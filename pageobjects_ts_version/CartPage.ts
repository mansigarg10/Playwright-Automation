import {Page,Locator, expect} from "@playwright/test";
export class CartPage {

       page : Page;
       expect : typeof expect;
       cartList : Locator;
       checkoutButton : Locator;


       constructor(page:Page,expect : any) {
              this.page = page;
              this.expect = expect;
              this.cartList = page.locator('.cart ul li');
              this.checkoutButton = page.locator('li [type="button"]');
       }


       async checkout() {
              await this.cartList.first().waitFor();
              await this.expect(this.page.locator('h3:has-text("ADIDAS ORIGINAL")')).toBeVisible();
              await this.checkoutButton.click();
       }

}

