import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { TestUsers } from '../../utils/testData';


test.describe('Login Flow', () => {
    test('should login with valid credentials', async ({ page }) => {
        const login = new LoginPage(page);
        const inventory = new InventoryPage(page);


        await login.goto();
        await login.login(TestUsers.standard.username, TestUsers.standard.password);


        await inventory.isLoaded();
        await expect(page).toHaveURL(/inventory.html/);
    });


    test('should show error with invalid credentials', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('bad_user', 'bad_pass');
        const error = await login.getErrorMessage();
        expect(error).not.toBeNull();
    });
});