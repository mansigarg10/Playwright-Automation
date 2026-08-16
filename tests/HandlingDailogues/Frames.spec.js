const {test,expect} = require("@playwright/test");

test('Dealing with pop ups and frames', async ({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
const frame = page.frameLocator("#courses-iframe");
await frame.locator("li a[href*='lifetime-access']:visible").click();
const textMatch = await frame.locator(".text h2").textContent();
const number  = textMatch.split(" ")[1];
console.log(number);
});

test('Navigation', async ({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.goto("https://www.google.com/");
await page.goBack();
await page.goForward();
});

test('Handling javascript popups', async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
page.on('dialog',dialog=> dialog.accept());
//page.on('dialog',dialog=> dialog.dismiss()); // if we want to dismiss the alert
// we can declare it anywhere bcs whenever browser occured any dialog event it will automatically handle 
await page.locator("#confirmbtn").click();

});

test('Hovering mouse on the webelement', async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.locator("#mousehover").hover();
});

test('more validations', async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

});