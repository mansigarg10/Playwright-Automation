# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTestAutomation.spec.js >> Login for tanya10@gmail.com
- Location: tests\EndToEndTestAutomation.spec.js:11:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://rahulshettyacadem6y.com/client/
Call log:
  - navigating to "https://rahulshettyacadem6y.com/client/", waiting until "load"

```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  |         constructor(page) {
  4  | 
  5  |                 this.page = page;
  6  |                 this.username = page.locator('#userEmail');
  7  |                 this.password = page.locator('#userPassword');
  8  |                 this.signIn = page.locator('#login');
  9  | 
  10 |         }
  11 | 
  12 |         async goto(url) {
> 13 |                 await this.page.goto(url);
     |                                 ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://rahulshettyacadem6y.com/client/
  14 |         }
  15 | 
  16 |         async login(username, password) {
  17 |                 await this.username.fill(username);
  18 |                 await this.password.fill(password);
  19 |                 await this.signIn.click();
  20 |                 await this.page.waitForLoadState('networkidle');
  21 | 
  22 |         }
  23 | 
  24 | }
  25 | 
  26 | module.exports = { LoginPage };
```