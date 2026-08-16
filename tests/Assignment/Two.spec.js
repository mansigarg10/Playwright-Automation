const { test, expect, request } = require('@playwright/test');
const body = { email: "student@example.com", password: "secret123" };
let token;
let eventId;



test.beforeAll('login via api', async () => {
       const apiContext = await request.newContext();
       const response = await apiContext.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login', {
              data: body,
       });

       const loginResponse = await response.json();
       expect(response.ok()).toBeTruthy();
       token = loginResponse.token;
       console.log(token);

});


test('fetch all the events via api', async () => {
       const apiContext = await request.newContext();
       const eventResponse = await apiContext.get('https://api.eventhub.rahulshettyacademy.com/api/events',{

              headers: {
                     'Authorization': `Bearer ${token}`,
                     'Content-Type': 'application/json'
              }
       }
       );
       expect(eventResponse.ok()).toBeTruthy();
       const eventJsonRespone = await eventResponse.json();
       console.log(eventJsonRespone);
        expect(await eventJsonRespone.success).toBeTruthy();
       expect(await eventJsonRespone.data).toBeDefined();
        eventId = await eventJsonRespone.data[1].id;
       console.log(eventId);
});

test('list a booking via api', async({page})=>{
   const apiContext = await request.newContext();
   const bookingPayload = {eventId: eventId, customerName: "secretUser", customerEmail: "student@example.com", customerPhone: "4512367891", quantity: "1"};

   const bookingResponse = await apiContext.post('https://api.eventhub.rahulshettyacademy.com/api/bookings',{
          data: bookingPayload,
          headers: {
              'Authorization': `Bearer ${token}`,
       },
})

const jsonBookingResponse = await bookingResponse.json();
expect(bookingResponse.ok()).toBeTruthy();
console.log(jsonBookingResponse);
const bookingId = jsonBookingResponse.data.id;
console.log(bookingId);
const url = 'https://eventhub.rahulshettyacademy.com';
       await page.goto(url);
       await page.locator('#email').fill('mansigarg1001@gmail.com');
       await page.locator('#password').fill('Mansa@10J');
       await page.locator('#login-btn').click();
       await page.waitForLoadState('networkidle');

       await page.goto('https://eventhub.rahulshettyacademy.com/bookings/${'+bookingId+'}',
        { waitUntil: 'networkidle' });
   
        const message = await page.locator('//h3[contains(@class,"text-lg")]').textContent();
        console.log(message);
        await expect(page.locator('//h3[contains(@class,"text-lg")]')).toContainText(message);


});






