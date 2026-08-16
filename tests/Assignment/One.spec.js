

const { test, expect } = require('@playwright/test');
const SIX_EVENTS_RESPONSE = {
       data: [
              { id: 1, title: 'Tech Summit 2025', category: 'Conference', eventDate: '2025-06-01T10:00:00.000Z', venue: 'HICC', city: 'Hyderabad', price: '999', totalSeats: 200, availableSeats: 150, imageUrl: null, isStatic: false },
              { id: 2, title: 'Rock Night Live', category: 'Concert', eventDate: '2025-06-05T18:00:00.000Z', venue: 'Palace Grounds', city: 'Bangalore', price: '1500', totalSeats: 500, availableSeats: 300, imageUrl: null, isStatic: false },
              { id: 3, title: 'IPL Finals', category: 'Sports', eventDate: '2025-06-10T19:30:00.000Z', venue: 'Chinnaswamy', city: 'Bangalore', price: '2000', totalSeats: 800, availableSeats: 50, imageUrl: null, isStatic: false },
              { id: 4, title: 'UX Design Workshop', category: 'Workshop', eventDate: '2025-06-15T09:00:00.000Z', venue: 'WeWork', city: 'Mumbai', price: '500', totalSeats: 50, availableSeats: 20, imageUrl: null, isStatic: false },
              { id: 5, title: 'Lollapalooza India', category: 'Festival', eventDate: '2025-06-20T12:00:00.000Z', venue: 'Mahalaxmi Racecourse', city: 'Mumbai', price: '3000', totalSeats: 5000, availableSeats: 2000, imageUrl: null, isStatic: false },
              { id: 6, title: 'AI & ML Expo', category: 'Conference', eventDate: '2025-06-25T10:00:00.000Z', venue: 'Bangalore International Exhibition Centre', city: 'Bangalore', price: '750', totalSeats: 300, availableSeats: 180, imageUrl: null, isStatic: false },
       ],
       pagination: { page: 1, totalPages: 1, total: 6, limit: 12 },
};

test('mocking the response', async ({ page }) => {

       const url = 'https://eventhub.rahulshettyacademy.com';
       await page.goto(url);
       await page.locator('#email').fill('mansigarg1001@gmail.com');
       await page.locator('#password').fill('Mansa@10J');
       await page.locator('#login-btn').click();

       let body = JSON.stringify(SIX_EVENTS_RESPONSE);
       await page.route('**/api/events**',
              async route => {
                     route.fulfill({
                            status: 200,
                            contentType: 'application/json',
                            body,
                     });
              }
       )


       await page.locator('#nav-events').click();
       let events = page.locator('#event-card');
       await expect(events).toHaveCount(6);
       await expect(page.locator('#event-card').first()).toBeVisible();
       const banner = page.locator('//span[contains(text(),"sandbox holds up to")]');
       await expect(banner).toBeVisible();
       await expect(banner).toContainText('9 bookings');
       await page.pause();



})
