 class CartPage {

       constructor(page,expect) {
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

module.exports ={CartPage}
