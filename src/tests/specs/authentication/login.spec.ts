import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import credentials from '../../data/credentials.json';

// Extend basic test by providing a "loginPae" fixture.
const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await use(loginPage);
    },
});

test.describe('Login Functionality', async () => {
    test('should login successfully', async ({ page, loginPage }) => {
        const { email, password } = credentials.validUser;

        await loginPage.login(email, password);
        await expect(page).toHaveURL('https://www.automationexercise.com/');
    });

    test('should not login', async ({ page }) => {});
});
