const { Before, BeforeAll, BeforeStep, After, AfterAll, AfterStep, Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const {POManager} = require('../../pageobjects/POManager');

Given('User is on the homepage of the ecommerce application with valid credentials {string} and {string}', async function (username, password) {
       const poManager = new POManager(this.page, expect);
        poManager.getLoginPage().login1("https://rahulshettyacademy.com/client/", username, password);
        await this.page.locator('.card-body b').last().waitFor();

});

When('User fetch the first product name and add to cart', async function () {
       const titles = await this.page.locator('.card-body b').allTextContents();
       console.log(titles);
       const products = this.page.locator('.card-body');
       const proCount = await products.count();
       const productName = "ADIDAS ORIGINAL";

       for (let i = 0; i < proCount; i++) {
              if (await products.nth(i).locator('b').textContent() == productName) {
                     await products.nth(i).locator("text = Add To Cart").click();
                     break;
              };
       }

});

Then('User go to cart page and verify if the product is visible or not', async function () {
       await this.page.locator('[routerlink*="/cart"]').click();
       await this.page.locator('.cart ul li').first().waitFor();
       await expect(this.page.locator('h3:has-text("ADIDAS ORIGINAL")')).toBeVisible();
});
