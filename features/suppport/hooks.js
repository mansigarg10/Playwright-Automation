const {Before,BeforeAll,BeforeStep,After,AfterAll,AfterStep} = require('@cucumber/cucumber');
const playwright = require('playwright');

Before(async function () {
      this.browser = await playwright.chromium.launch({headless:false});
     this.context = await this.browser.newContext();
     this.page = await this.context.newPage();

});

/*Before({tags: '@Smoke and @Regression'}, async function () {
      this.browser = await playwright.chromium.launch({headless:false});
     this.context = await this.browser.newContext();
     this.page = await this.context.newPage();

});*/




AfterStep(async function (result) {
      if(result.result.status === 'FAILED'){
           // const screenshot = await this.page.screenshot({path:'./screenshot/failure.png', fullPage:true});
            //this.attach(screenshot, 'image/png');
      //}



        const screenshot = await this.page.screenshot({
            path: `./screenshots/failure-${Date.now()}.png`,
            fullPage: true
        });

        await this.attach(screenshot, 'image/png');
      }
 
});

After(async function () {
      //await this.page.close();
});
