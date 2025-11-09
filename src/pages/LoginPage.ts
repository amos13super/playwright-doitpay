import { Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class LoginPage extends BasePage {
    readonly username = '#user-name';
    readonly password = '#password';
    readonly loginButton = '#login-button';
    readonly errorMessage = '[data-test="error"]';


    constructor(page: Page) {
    super(page);
}


async goto() {
    await super.goto('https://www.saucedemo.com');
}


async login(username: string, password: string) {
    await this.waitForSelector(this.username);
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginButton);
}


async getErrorMessage(): Promise<string | null> {
        try {
            await this.waitForSelector(this.errorMessage, 2000);
            return await this.page.textContent(this.errorMessage);
        } catch {
            return null;
        }
    }
}