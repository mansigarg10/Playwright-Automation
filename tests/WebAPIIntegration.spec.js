const { test, request } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');
const loginPayload = { userEmail: "tanya10@gmail.com", userPassword: "Tanya@10" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };

let response;
test.beforeAll('it will run only once before test case', async () => {
   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext, loginPayload);
   response = await apiUtils.createOrder(orderPayload);


})


test(' @API how to use api integartion in test flow', async ({ page }) => {
   await page.addInitScript((tokenValue) => {
      window.localStorage.setItem("token", tokenValue);
   }, response.token);

   await page.goto("https://rahulshettyacademy.com/client/");
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = page.locator("tbody tr");
   for (let i = 0; i < await rows.count(); i++) {
      const orderDetails = await rows.locator("th").nth(i).textContent();
      if (response.orderID.includes(orderDetails)) {
         const itemName = await rows.nth(i).locator("td").nth(1).textContent();
         console.log(itemName);
      }
   };


});