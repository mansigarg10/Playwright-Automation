const {test, expect} = require('@playwright/test');

test("First Playwright Automation test", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
});

// same we can do without first two code of lines

test("@Web Same program in different way", async function({page}){
     await page.goto("https://omayo.blogspot.com/p/lightbox.html")
      const title = await page.title();
      console.log(title);
      await expect(page).toHaveTitle(title);
      
});


