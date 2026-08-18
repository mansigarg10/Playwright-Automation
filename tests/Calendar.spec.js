const { test, expect } = require("@playwright/test");

const month = "6";
const Year = "2027";
const date = "15";


test('Calendar handling', async ({ page }) => {
       await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
       await page.locator(".react-date-picker__calendar-button").click();
       await page.locator(".react-calendar__navigation__label").click();
       await page.locator(".react-calendar__navigation__label").click();
       await page.getByText(Year).click();
       await page.locator(".react-calendar__year-view__months button").nth(Number(month) - 1).click();
       await page.locator("//abbr[text()='" + date + "']").click();
});

test('Calendar handling in normal way', async ({ page }) => {
       await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
       await page.locator(".react-date-picker__calendar-button").click();
       await page.locator(".react-calendar__navigation__label").click();
       await page.locator(".react-calendar__navigation__label").click();
       const years = page.locator(".react-calendar__decade-view__years button");
       for (let i = 0; i < await years.count(); i++) {
              const yearNum = await years.nth(i).textContent();
              if (yearNum.includes(Year)) {
                     await years.nth(i).click();
                     break;
              }
       }
       const months = page.locator(".react-calendar__year-view__months button");
       for (let i = 0; i < await months.count(); i++) {
              const monthNum = await months.nth(i).textContent();
              if (monthNum.includes("June")) {
                     await months.nth(i).click();
                     break;
              }
       }

       const dates = page.locator(".react-calendar__month-view__days button");
       for (let i = 0; i < await dates.count(); i++) {
              const actualDate = await dates.locator("abbr").nth(i).textContent();
              if (date.includes(actualDate)) {
                     await dates.locator("abbr").nth(i).click();
                     break;
              }
       }
       //this is caledar automation

});
