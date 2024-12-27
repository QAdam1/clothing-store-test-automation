import test, { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import credentials from './data/credentials.json';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.automationexercise.com/login');
});

test.describe('Login Funcitonality', () => {
    test('should login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const { email, password } = credentials.validUser;

        await loginPage.login(email, password);

        await expect(page).toHaveURL('https://www.automationexercise.com/');
    });
});
