import {Page,Locator} from '@playwright/test';

export class LoginPage {

        page : Page;
        username : Locator;
        password : Locator;
        signIn : Locator;

        constructor(page:Page) {

                this.page = page;
                this.username = page.locator('#userEmail');
                this.password = page.locator('#userPassword');
                this.signIn = page.locator('#login');

        }

        async goto(url :string) {
                await this.page.goto(url);
        }

        async login(username : string, password : string) {
                await this.username.fill(username);
                await this.password.fill(password);
                await this.signIn.click();
                await this.page.waitForLoadState('networkidle');

        }

}

