import { Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class CartPage extends BasePage {
    readonly cartItem = (itemName: string) => `//div[@class='cart_item']//div[text()="${itemName}"]`;
    readonly checkoutButton = '[data-test="checkout"]';


    constructor(page: Page) {
        super(page);
    }


    async hasItem(itemName: string): Promise<boolean> {
        try {
            await this.waitForSelector(this.cartItem(itemName), 2000);
            return true;
        } catch {
            return false;
        }
    }


    async checkout() {
        await this.click(this.checkoutButton);
    }
}