# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Calendar.spec.js >> Calendar handling
- Location: tests\Calendar.spec.js:8:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.click: Test timeout of 20000ms exceeded.
Call log:
  - waiting for locator('//abbr[text()=\'15\']')
    - locator resolved to <abbr aria-label="June 15, 2027">15</abbr>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: GREENKART
      - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e8]:
        - /url: https://techsmarthire.com/
  - generic [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]: "Page size:"
          - combobox "Page size:" [ref=e18]:
            - option "5" [selected]
            - option "10"
            - option "20"
        - generic [ref=e19]:
          - generic [ref=e20]: "Search:"
          - searchbox "Search:" [ref=e21]
      - list "Pagination" [ref=e23]:
        - listitem:
          - button "First" [disabled]
        - listitem:
          - button "Previous" [disabled]
        - listitem [ref=e24]:
          - button "1 (current)" [ref=e25]:
            - text: "1"
            - generic [ref=e26]: (current)
        - listitem [ref=e27]:
          - button "2" [ref=e28]
        - listitem [ref=e29]:
          - button "3" [ref=e30]
        - listitem [ref=e31]:
          - button "4" [ref=e32]
        - listitem [ref=e33]:
          - button "Next" [ref=e34]
        - listitem [ref=e35]:
          - button "Last" [ref=e36]
    - table [ref=e37]:
      - alert [ref=e38]: "Sorted by name: descending order"
      - rowgroup [ref=e39]:
        - row [ref=e40]:
          - 'columnheader "Veg/fruit name: activate to sort column ascending" [ref=e41] [cursor=pointer]': Veg/fruit name
          - 'columnheader "Price: activate to sort column ascending" [ref=e43] [cursor=pointer]': Price
          - 'columnheader "Discount price: activate to sort column ascending" [ref=e44] [cursor=pointer]': Discount price
      - rowgroup [ref=e45]:
        - row [ref=e46]:
          - cell "Wheat" [ref=e47]
          - cell "67" [ref=e48]
          - cell "28" [ref=e49]
        - row [ref=e50]:
          - cell "Tomato" [ref=e51]
          - cell "37" [ref=e52]
          - cell "26" [ref=e53]
        - row [ref=e54]:
          - cell "Strawberry" [ref=e55]
          - cell "23" [ref=e56]
          - cell "15" [ref=e57]
        - row [ref=e58]:
          - cell "Rice" [ref=e59]
          - cell "37" [ref=e60]
          - cell "46" [ref=e61]
        - row [ref=e62]:
          - cell "Potato" [ref=e63]
          - cell "34" [ref=e64]
          - cell "22" [ref=e65]
  - generic [ref=e66]:
    - generic [ref=e67]: Delivery Date
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - generic [ref=e71]: "0"
          - spinbutton "--" [ref=e72]: "7"
          - generic [ref=e73]: /
          - spinbutton "--" [ref=e74]: "25"
          - generic [ref=e75]: /
          - spinbutton "----" [ref=e76]: "2026"
        - button [ref=e77] [cursor=pointer]
        - button [ref=e81] [cursor=pointer]
      - generic [ref=e86]:
        - generic [ref=e87]:
          - button "«" [ref=e88] [cursor=pointer]
          - button "‹" [ref=e89] [cursor=pointer]
          - button "June 2027" [ref=e90] [cursor=pointer]
          - button "›" [ref=e91] [cursor=pointer]
          - button "»" [ref=e92] [cursor=pointer]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e98]: Mon
            - generic [ref=e99]: Tue
            - generic [ref=e100]: Wed
            - generic [ref=e101]: Thu
            - generic [ref=e102]: Fri
            - generic [ref=e103]: Sat
            - generic [ref=e104]: Sun
          - generic [ref=e105]:
            - button "May 31, 2027" [ref=e106] [cursor=pointer]: "31"
            - button "June 1, 2027" [ref=e107] [cursor=pointer]: "1"
            - button "June 2, 2027" [ref=e108] [cursor=pointer]: "2"
            - button "June 3, 2027" [ref=e109] [cursor=pointer]: "3"
            - button "June 4, 2027" [ref=e110] [cursor=pointer]: "4"
            - button "June 5, 2027" [ref=e111] [cursor=pointer]: "5"
            - button "June 6, 2027" [ref=e112] [cursor=pointer]: "6"
            - button "June 7, 2027" [ref=e113] [cursor=pointer]: "7"
            - button "June 8, 2027" [ref=e114] [cursor=pointer]: "8"
            - button "June 9, 2027" [ref=e115] [cursor=pointer]: "9"
            - button "June 10, 2027" [ref=e116] [cursor=pointer]: "10"
            - button "June 11, 2027" [ref=e117] [cursor=pointer]: "11"
            - button "June 12, 2027" [ref=e118] [cursor=pointer]: "12"
            - button "June 13, 2027" [ref=e119] [cursor=pointer]: "13"
            - button "June 14, 2027" [ref=e120] [cursor=pointer]: "14"
            - button "June 15, 2027" [ref=e121] [cursor=pointer]: "15"
            - button "June 16, 2027" [ref=e122] [cursor=pointer]: "16"
            - button "June 17, 2027" [ref=e123] [cursor=pointer]: "17"
            - button "June 18, 2027" [ref=e124] [cursor=pointer]: "18"
            - button "June 19, 2027" [ref=e125] [cursor=pointer]: "19"
            - button "June 20, 2027" [ref=e126] [cursor=pointer]: "20"
            - button "June 21, 2027" [ref=e127] [cursor=pointer]: "21"
            - button "June 22, 2027" [ref=e128] [cursor=pointer]: "22"
            - button "June 23, 2027" [ref=e129] [cursor=pointer]: "23"
            - button "June 24, 2027" [ref=e130] [cursor=pointer]: "24"
            - button "June 25, 2027" [ref=e131] [cursor=pointer]: "25"
            - button "June 26, 2027" [ref=e132] [cursor=pointer]: "26"
            - button "June 27, 2027" [ref=e133] [cursor=pointer]: "27"
            - button "June 28, 2027" [ref=e134] [cursor=pointer]: "28"
            - button "June 29, 2027" [ref=e135] [cursor=pointer]: "29"
            - button "June 30, 2027" [ref=e136] [cursor=pointer]: "30"
            - button "July 1, 2027" [ref=e137] [cursor=pointer]: "1"
            - button "July 2, 2027" [ref=e138] [cursor=pointer]: "2"
            - button "July 3, 2027" [ref=e139] [cursor=pointer]: "3"
            - button "July 4, 2027" [ref=e140] [cursor=pointer]: "4"
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | 
  3  | const month = "6";
  4  | const Year = "2027";
  5  | const date = "15";
  6  | 
  7  | 
  8  | test('Calendar handling', async ({ page }) => {
  9  |        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  10 |        await page.locator(".react-date-picker__calendar-button").click();
  11 |        await page.locator(".react-calendar__navigation__label").click();
  12 |        await page.locator(".react-calendar__navigation__label").click();
  13 |        await page.getByText(Year).click();
  14 |        await page.locator(".react-calendar__year-view__months button").nth(Number(month) - 1).click();
> 15 |        await page.locator("//abbr[text()='" + date + "']").click();
     |                                                            ^ Error: locator.click: Test timeout of 20000ms exceeded.
  16 | });
  17 | 
  18 | test('Calendar handling in normal way', async ({ page }) => {
  19 |        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
  20 |        await page.locator(".react-date-picker__calendar-button").click();
  21 |        await page.locator(".react-calendar__navigation__label").click();
  22 |        await page.locator(".react-calendar__navigation__label").click();
  23 |        const years = page.locator(".react-calendar__decade-view__years button");
  24 |        for (let i = 0; i < await years.count(); i++) {
  25 |               const yearNum = await years.nth(i).textContent();
  26 |               if (yearNum.includes(Year)) {
  27 |                      await years.nth(i).click();
  28 |                      break;
  29 |               }
  30 |        }
  31 |        const months = page.locator(".react-calendar__year-view__months button");
  32 |        for (let i = 0; i < await months.count(); i++) {
  33 |               const monthNum = await months.nth(i).textContent();
  34 |               if (monthNum.includes("June")) {
  35 |                      await months.nth(i).click();
  36 |                      break;
  37 |               }
  38 |        }
  39 | 
  40 |        const dates = page.locator(".react-calendar__month-view__days button");
  41 |        for (let i = 0; i < await dates.count(); i++) {
  42 |               const actualDate = await dates.locator("abbr").nth(i).textContent();
  43 |               if (date.includes(actualDate)) {
  44 |                      await dates.locator("abbr").nth(i).click();
  45 |                      break;
  46 |               }
  47 |        }
  48 | 
  49 | });
  50 | 
```