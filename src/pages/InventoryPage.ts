import { Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class InventoryPage extends BasePage {
    readonly inventoryContainer = '.inventory_list';
    readonly addToCartButton = (itemName: string) => `//div[text()="${itemName}"]/ancestor::div[@class='inventory_item']//button`;
    readonly shoppingCartLink = '.shopping_cart_link';


    constructor(page: Page) {
        super(page);
    }


    async isLoaded() {
        await this.waitForSelector(this.inventoryContainer);
    }


    async addItemToCart(itemName: string) {
        const selector = this.addToCartButton(itemName);
        await this.click(selector);
    }


    async openCart() {
        await this.click(this.shoppingCartLink);
    }
}