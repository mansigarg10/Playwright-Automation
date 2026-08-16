const {test, expect} = require('@playwright/test')


test('take screenshot after a particular test step', async({page}) =>{
await page.goto('https://tutorialsninja.com/demo/');
await page.getByRole('link' ,{name : 'MP3 Players'}).click();
 await page.screenshot({path: 'srcAfterTestStep.png'});
 await page.locator('//div[@class="product-thumb transition"]').first().screenshot({path: 'partialSrc.png'});
})


test('visual testing by screenshot', async({page})=>{
     await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('visualSrc.png');




})