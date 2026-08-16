# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assignment\Two.spec.js >> list a booking via api
- Location: tests\Assignment\Two.spec.js:41:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 20000ms exceeded.
Call log:
  - waiting for locator('//h3[contains(@class,"text-lg")]')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - generic [ref=f1e4]:
        - generic [ref=f1e5]:
          - generic [ref=f1e6]: RSA
          - generic [ref=f1e7]: Rahul Shetty Academy
        - generic [ref=f1e8]:
          - generic [ref=f1e9]: eventhub.app
          - img "EventHub app preview" [ref=f1e14]
        - list [ref=f1e16]:
          - listitem [ref=f1e17]:
            - generic [ref=f1e18]: ⚡
            - generic [ref=f1e19]: Live REST APIs — test real endpoints, not mocks
          - listitem [ref=f1e20]:
            - generic [ref=f1e21]: 🔒
            - generic [ref=f1e22]: Isolated sandbox — your data, your tests, no conflicts
          - listitem [ref=f1e23]:
            - generic [ref=f1e24]: 🎫
            - generic [ref=f1e25]: Auth, CRUD, bookings — flows you'll face on the job
          - listitem [ref=f1e26]:
            - generic [ref=f1e27]: 🤖
            - generic [ref=f1e28]: Built for Selenium, Playwright, RestAssured & more
      - generic [ref=f1e30]:
        - paragraph [ref=f1e31]: 50,000+
        - paragraph [ref=f1e32]: QA engineers trained worldwide
    - generic [ref=f1e34]:
      - generic [ref=f1e35]:
        - 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2] [ref=f1e36]': "The #1 QA Practice Hubfor Automation Engineers"
        - paragraph [ref=f1e37]: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
      - link "API Documentation (Swagger)" [ref=f1e38] [cursor=pointer]:
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=f1e41]:
        - generic [ref=f1e42]:
          - heading "Sign in to EventHub" [level=1] [ref=f1e46]
          - paragraph [ref=f1e47]: Enter your credentials to continue
        - generic [ref=f1e48]:
          - generic [ref=f1e49]:
            - generic [ref=f1e50]: Email
            - textbox "Email" [ref=f1e51]:
              - /placeholder: you@email.com
          - generic [ref=f1e52]:
            - generic [ref=f1e53]: Password
            - textbox "Password" [ref=f1e54]:
              - /placeholder: ••••••
          - button "Sign In" [ref=f1e55] [cursor=pointer]
        - paragraph [ref=f1e56]:
          - text: Don't have an account?
          - link "Register" [ref=f1e57] [cursor=pointer]:
            - /url: /register
      - paragraph [ref=f1e58]:
        - text: A practice environment by
        - link "RahulShettyAcademy.com" [ref=f1e59] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com
        - text: — used by QA engineers worldwide to master automation testing.
  - alert [ref=f1e60]
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | const body = { email: "student@example.com", password: "secret123" };
  3  | let token;
  4  | let eventId;
  5  | 
  6  | 
  7  | 
  8  | test.beforeAll('login via api', async () => {
  9  |        const apiContext = await request.newContext();
  10 |        const response = await apiContext.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login', {
  11 |               data: body,
  12 |        });
  13 | 
  14 |        const loginResponse = await response.json();
  15 |        expect(response.ok()).toBeTruthy();
  16 |        token = loginResponse.token;
  17 |        console.log(token);
  18 | 
  19 | });
  20 | 
  21 | 
  22 | test('fetch all the events via api', async () => {
  23 |        const apiContext = await request.newContext();
  24 |        const eventResponse = await apiContext.get('https://api.eventhub.rahulshettyacademy.com/api/events',{
  25 | 
  26 |               headers: {
  27 |                      'Authorization': `Bearer ${token}`,
  28 |                      'Content-Type': 'application/json'
  29 |               }
  30 |        }
  31 |        );
  32 |        expect(eventResponse.ok()).toBeTruthy();
  33 |        const eventJsonRespone = await eventResponse.json();
  34 |        console.log(eventJsonRespone);
  35 |         expect(await eventJsonRespone.success).toBeTruthy();
  36 |        expect(await eventJsonRespone.data).toBeDefined();
  37 |         eventId = await eventJsonRespone.data[1].id;
  38 |        console.log(eventId);
  39 | });
  40 | 
  41 | test('list a booking via api', async({page})=>{
  42 |    const apiContext = await request.newContext();
  43 |    const bookingPayload = {eventId: eventId, customerName: "secretUser", customerEmail: "student@example.com", customerPhone: "4512367891", quantity: "1"};
  44 | 
  45 |    const bookingResponse = await apiContext.post('https://api.eventhub.rahulshettyacademy.com/api/bookings',{
  46 |           data: bookingPayload,
  47 |           headers: {
  48 |               'Authorization': `Bearer ${token}`,
  49 |        },
  50 | })
  51 | 
  52 | const jsonBookingResponse = await bookingResponse.json();
  53 | expect(bookingResponse.ok()).toBeTruthy();
  54 | console.log(jsonBookingResponse);
  55 | const bookingId = jsonBookingResponse.data.id;
  56 | console.log(bookingId);
  57 | const url = 'https://eventhub.rahulshettyacademy.com';
  58 |        await page.goto(url);
  59 |        await page.locator('#email').fill('mansigarg1001@gmail.com');
  60 |        await page.locator('#password').fill('Mansa@10J');
  61 |        await page.locator('#login-btn').click();
  62 |        await page.waitForLoadState('networkidle');
  63 | 
  64 |        await page.goto('https://eventhub.rahulshettyacademy.com/bookings/${'+bookingId+'}',
  65 |         { waitUntil: 'networkidle' });
  66 |    
> 67 |         const message = await page.locator('//h3[contains(@class,"text-lg")]').textContent();
     |                                                                                ^ Error: locator.textContent: Test timeout of 20000ms exceeded.
  68 |         console.log(message);
  69 |         await expect(page.locator('//h3[contains(@class,"text-lg")]')).toContainText(message);
  70 | 
  71 | 
  72 | });
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
  78 | 
  79 | 
```