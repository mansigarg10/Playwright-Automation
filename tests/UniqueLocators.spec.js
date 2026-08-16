const { test, expect } = require('@playwright/test');
const { link } = require('fs');

test('use cases of unique locators', async ({ page }) => {
       await page.goto("https://rahulshettyacademy.com/angularpractice/");
       await page.locator("[class='form-group'] input").first().fill("tanya");
       await page.locator("[name='email']").fill("tanya@12gmail.com");
       await page.getByPlaceholder("Password").fill("123456");
       await page.getByLabel("Check me out if you Love IceCreams!").check();
       await page.getByLabel("Gender").selectOption("Female");
       await page.getByLabel("Employed").check();
       await page.getByRole("button",{name: 'Submit'}).click();
       const visible = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
       expect(visible).toBeTruthy();
       await page.getByRole("link", { name: 'Shop' }).click();
       await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
});

