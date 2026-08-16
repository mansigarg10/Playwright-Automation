const { test, expect } = require('@playwright/test');


test("Login by providing invalid credentials", async ({ page }) => {
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const username = page.locator('#username');
   const password = page.locator('#password');
   const signInButton = page.locator('#signInBtn');
   await username.fill("rahulshetty");
   await password.fill("learning");
   await signInButton.click();
   console.log(await page.locator('[style*="block"]').textContent());
   await expect(page.locator('[style*="block"]')).toContainText("Incorrect username/password.");
});


test("Login with valid credentials", async ({ browser }) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/");
   await page.locator('#userEmail').fill("tanya10@gmail.com");
   await page.locator('#userPassword').fill("Tanya@10");
   await page.locator('#login').click();
   //await page.waitForLoadState('networkidle'); by using this getting error
   await page.locator('.card-body b').last().waitFor();
   const titles = await page.locator('.card-body b').allTextContents();
   console.log(titles);
   const products = page.locator('.card-body');
   const proCount = await products.count();
   const productName = "ADIDAS ORIGINAL";

   for (let i = 0; i < proCount; i++) {
      if (await products.nth(i).locator('b').textContent() == productName) {
         await products.nth(i).locator("text = Add To Cart").click();
         break;
      };
   }

   await page.locator('[routerlink*="/cart"]').click();
   await page.locator('.cart ul li').first().waitFor();
   await expect(page.locator('h3:has-text("ADIDAS ORIGINAL")')).toBeVisible();

   await page.locator("li [type='button']").click();
   const monthDropdown = page.locator("select.input").first();
   await monthDropdown.click();
   await monthDropdown.selectOption("05");

   const dateDropdown = page.locator("select.input").last();
   await dateDropdown.click();
   await dateDropdown.selectOption("23");

   await page.locator("input[type='text']").nth(1).fill("234");
   await page.locator("input[type='text']").nth(2).fill("Tanya");
   await page.locator("[placeholder='Select Country']").click();
   await page.locator("[placeholder='Select Country']").pressSequentially("ind");
   await page.locator("[class*='ta-results'] button").first().waitFor();
   const country = await page.locator("[class*='ta-results'] button").first().textContent();
   console.log(country);
   const results = page.locator("[class*='ta-results'] button");
   const optionsForCountry = await results.count();
   for (let i = 0; i < optionsForCountry; i++) {
      const countryName = await results.nth(i).textContent();
      if (countryName.trim() === "India") {
         await results.nth(i).click();
         break;
      }
   }

   await page.locator("a[class*='submit']").click();
   const orderConfirmation = await page.locator("h1[class*='primary']").textContent();
   expect(orderConfirmation.includes("Thankyou for the order.")).toBeTruthy();
   const orderDeatils = await page.locator("label[class='ng-star-inserted']").textContent();
   const orderedItem = await page.locator("div[class='title']").first().textContent();

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = page.locator("tbody tr");
   for (let i = 0; i < await rows.count(); i++) {
      const orderID = await rows.locator("th").nth(i).textContent();
      if (orderDeatils.includes(orderID)) {
         const itemName = await rows.nth(i).locator("td").nth(1).textContent();
         expect(orderedItem === itemName).toBeTruthy();
      }
   };


   //await page.pause();

});



