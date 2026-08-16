import {Page,Locator} from "@playwright/test";

export class CheckoutPage {

       page : Page;
       monthDropdown : Locator;
       dateDropdown : Locator;
       cvvCode : Locator;
       nameOnCard : Locator;
       selectCountry : Locator;
       countryResults : Locator;
       placeOrderButton : Locator;


       constructor(page :Page) {
              this.page = page;
              this.monthDropdown = page.locator("select.input").first();
              this.dateDropdown = page.locator("select.input").last();
              this.cvvCode = page.locator("input[type='text']").nth(1);
              this.nameOnCard = page.locator("input[type='text']").nth(2);
              this.selectCountry = page.locator("[placeholder='Select Country']");
              this.countryResults = page.locator("[class*='ta-results'] button");
              this.placeOrderButton = page.locator("a[class*='submit']");
       }


       async placeOrder() {
              await this.monthDropdown.click();
          await this.monthDropdown.selectOption("05");

              await this.dateDropdown.click();
              await this.dateDropdown.selectOption("23");

              await this.cvvCode.fill("234");
              await this.nameOnCard.fill("Tanya");
              await this.selectCountry.click();
              await this.selectCountry.pressSequentially("ind");
              await this.countryResults.first().waitFor();
              const country = await this.countryResults.first().textContent();
              console.log(country);
              const results = this.countryResults;
              const optionsForCountry = await results.count();
              for (let i = 0; i < optionsForCountry; i++) {
                     const countryName :any = await results.nth(i).textContent();
                     if (countryName.trim() === "India") {
                            await results.nth(i).click();
                            break;
                     }
              }

              await this.placeOrderButton.click();
       }
}




