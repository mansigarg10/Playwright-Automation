 class LoginPage {

        constructor(page) {

                this.page = page;
                this.username = page.locator('#userEmail');
                this.password = page.locator('#userPassword');
                this.signIn = page.locator('#login');

        }

        async goto(url) {
                await this.page.goto(url);
        }

        async login(username, password) {
                await this.username.fill(username);
                await this.password.fill(password);
                await this.signIn.click();
                await this.page.waitForLoadState('networkidle');

        }
          async login1(url, username, password) {
                await this.page.goto(url);
                await this.username.fill(username);
                await this.password.fill(password);
                await this.signIn.click();
                await this.page.waitForLoadState('networkidle');

        }

}

module.exports = { LoginPage };