const { test } = require('@playwright/test');

let webContext;
test.beforeAll('Fetching stored network details', async ({ browser }) => {
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto("https://rahulshettyacademy.com/client/");
       await page.locator('#userEmail').fill("tanya10@gmail.com");
       await page.locator('#userPassword').fill("Tanya@10");
       await page.locator('#login').click();
       await page.waitForLoadState('networkidle');
       await context.storageState({ path: 'state.json' });
       webContext = await browser.newContext({ storageState: 'state.json' });

});

test(' @API Skipping login by injecting storage data', async () => {
       const page = await webContext.newPage();
       await page.goto('https://rahulshettyacademy.com/client/');
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
});
