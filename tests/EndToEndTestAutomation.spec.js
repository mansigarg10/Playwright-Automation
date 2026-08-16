const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const {customTest} = require('../utils/testDataByCreatingFixture');
const testdata = JSON.parse(JSON.stringify(require('../utils/End2EndAutomationTestData.json')));


test.describe.configure({mode: 'serial'}); // this line is for running the test cases in parallel mode

for(const data of testdata){

test(`Login for ${data.username}`, async ({ page }) => {
   const poManager = new POManager(page,expect);
   await poManager.getLoginPage().goto("https://rahulshettyacadem6y.com/client/");
   await poManager.getLoginPage().login(data.username, data.password);
  
   await poManager.getHomePage().searchProductAddToCart();
   await poManager.getCartPage().checkout();
   await poManager.getCheckoutPage().placeOrder();


});
}

customTest('Login2 validation', async ({ page, readingTestDataFromFixture }) => {
   const poManager = new POManager(page,expect);
   await poManager.getLoginPage().goto("https://rahulshettyacademy.com/client/");
   await poManager.getLoginPage().login(readingTestDataFromFixture.username, readingTestDataFromFixture.password);
  
   await poManager.getHomePage().searchProductAddToCart();
   await poManager.getCartPage().checkout();
   await poManager.getCheckoutPage().placeOrder();


});









