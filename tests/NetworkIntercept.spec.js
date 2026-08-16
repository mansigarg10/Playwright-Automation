const { test, request } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');
const loginPayload = { userEmail: "tanya10@gmail.com", userPassword: "Tanya@10" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
const fakeResponse = { data: [], message: "No Orders" };


let response;
test.beforeAll('it will run only once before test case', async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);


});


test('how to use api integartion in test flow', async ({ page }) => {
  await page.addInitScript((tokenValue) => {
    window.localStorage.setItem("token", tokenValue);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/");

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    // this line is for intercepting the network call 
    async route => { // route handler is a callback function which will be called when the network call is made and we can manipulate the response of the network call in this function
      const response = await page.request.fetch(route.request());

      // here we are fetching the original response //why we give the route.request() because it has multiple parameters like url, method, headers etc and we want to fetch the original response of the network call which is being made by the application
      let body = JSON.stringify(fakeResponse);
      route.fulfill({ //Instead of sending the original API response to the UI, send this modified response.
        response,
        body,
      });

    });
  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  console.log(await page.locator(".mt-4").textContent());



});