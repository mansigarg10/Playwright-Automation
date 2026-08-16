const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Given('User is on the ecommerce application login page', async function () {
       await this.page.goto("https://rahulshettyacademy.com/client/");



});

When('User enters valid {string} and {string}', {timeout: 30000}, async function (username, password) {
       await this.page.locator('#userEmail').fill(username);
       await this.page.locator('#userPassword').fill(password);
});

When('User clicks on the login button', async function () {
       await this.page.locator('#login').click();

});

Then('User should be redirected to the homepage of the ecommerce application', async function () {
       await this.page.locator('.card-body b').last().waitFor();

});