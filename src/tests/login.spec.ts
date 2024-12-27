import test from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.automationexercise.com/login');
});

test.describe('Login Funcitonality', () => {
    test('should login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.btn_Cart
    });
});
