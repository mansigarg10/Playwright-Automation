const {test, expect} =require('@playwright/test');

test("Handling Static Dropdown", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username = page.locator('#username');
const password = page.locator('#password');
await username.fill(" rahulshettyacademy");
await password.fill("learning");
const dropdown = page.locator('.form-control').nth(2);
await dropdown.selectOption("teach")
await page.pause();
});

test("Radio Button", async ({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const radioButton  = page.locator('input[value*="user"]');
await radioButton.click();
await page.locator('#okayBtn').click();
await expect(radioButton).toBeChecked(); 
console.log(await radioButton.isChecked());  

});


test("Checkboxes", async ({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked(); // assertion way
console.log(await page.locator('#terms').isChecked());
await page.locator('#terms').uncheck();
expect(await page.locator('#terms').isChecked()).toBeFalsy();
});


test("Handling multiple pages", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();      
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const link = page.locator('[href*="documents-request"]');

const [newPage] = await Promise.all(
[
context.waitForEvent('page'),
link.click(),
]);

const title = await newPage.locator('.im-para.red').textContent();
console.log(title);
const firstPart = title.split("@")[1];
const requiredUsername = firstPart.split(' ')[0];
console.log(requiredUsername);
await page.locator('#username').fill(requiredUsername);
console.log(await page.locator('#username').inputValue());


});
