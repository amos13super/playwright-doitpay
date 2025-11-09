import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { TestUsers } from '../../utils/testData';

const ITEM_NAME = 'Sauce Labs Backpack';


test('Add to Cart flow', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);


    await login.goto();
    await login.login(TestUsers.standard.username, TestUsers.standard.password);


    await inventory.isLoaded();
    await inventory.addItemToCart(ITEM_NAME);
    await inventory.openCart();


    const hasItem = await cart.hasItem(ITEM_NAME);
    expect(hasItem).toBeTruthy();
});