const { test, expect } = require('@playwright/test');

test("Login with valid credentials", async ({ page }) => {
  // const context = await browser.newContext();
  // const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/");
   await page.getByPlaceholder("email@example.com").fill("tanya10@gmail.com");
   await page.getByPlaceholder("enter your passsword").fill("Tanya@10");
   await page.getByText("Login").click();
   await page.locator('.card-body b').last().waitFor();
   await page.locator(".card").filter({ hasText: "ZARA COAT 3" })
      .getByRole("button", { name: "Add To Cart" }).click();
   await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
   await page.locator('.cart ul li').first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   await page.getByRole("button", { name: "Checkout" }).click();
   const monthDropdown = page.locator("select.input1").first();
   await monthDropdown.click();
   await monthDropdown.selectOption("05");

   const dateDropdown = page.locator("select.input").last();
   await dateDropdown.click();
   await dateDropdown.selectOption("23");
   await page.locator("input[type='text']").nth(1).fill("234");
   await page.locator("input[type='text']").nth(2).fill("Tanya");
   await page.getByPlaceholder("Select Country").click();
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.getByRole("button", { name: "India" }).nth(1).click();
   await page.getByText("PLACE ORDER").click();
   await expect(page.getByText("THANKYOU FOR THE ORDER.")).toBeVisible();
   const orderDeatils = await page.locator("label[class='ng-star-inserted']").textContent();
   console.log(orderDeatils);
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   await page.getByRole("button", { name: "ORDERS" }).click();
   await page.locator("tbody").waitFor();



});



