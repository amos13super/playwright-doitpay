import { Page } from '@playwright/test';


/**
* BasePage: common helpers and error handling for all pages
*/
export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async goto(url: string) {
        try {
            await this.page.goto(url);
        } catch (err) {
            throw new Error(`Navigation to ${url} failed: ${(err as Error).message}`);
        }
    }


    async click(selector: string) {
        try {
            await this.page.click(selector);
        } catch (err) {
            throw new Error(`Click failed on ${selector}: ${(err as Error).message}`);
        }
    }


    async fill(selector: string, value: string) {
        try {
            await this.page.fill(selector, value);
        } catch (err) {
            throw new Error(`Fill failed on ${selector}: ${(err as Error).message}`);
        }
    }


    async waitForSelector(selector: string, timeout = 5000) {
        try {
        await this.page.waitForSelector(selector, { timeout });
        } catch (err) {
            throw new Error(`Waiting for selector ${selector} failed: ${(err as Error).message}`);
        }
    }
}