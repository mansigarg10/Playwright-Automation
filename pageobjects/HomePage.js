 class HomePage {

   constructor(page) {
      this.page = page;
      this.products = page.locator('.card-body');
      this.productsName = page.locator('.card-body b');
      this.addToCartButton = page.locator('[routerlink*="/cart"]');

   }


   async searchProductAddToCart() {
      //await this.products.waitForLoadState('networkidle');
      const titles = await this.productsName.allTextContents();
      console.log(titles);
      const proCount = await this.products.count();
      const productName = "ADIDAS ORIGINAL";

      for (let i = 0; i < proCount; i++) {
         if (await this.products.nth(i).locator('b').textContent() == productName) {
            await this.products.nth(i).locator("text = Add To Cart").click();
            break;
         };
      }

      await this.addToCartButton.click();
      await this.page.waitForLoadState('networkidle');
   }
}

module.exports = { HomePage };