import { test } from '../../fixtures/fixtures';
import { expect } from '@playwright/test';
import credentials from '../../data/credentials.json';
import { LoginPage } from '../../../pages/LoginPage';

const { username, email, password } = credentials.validUser;

test.describe('Login Functionality', async () => {
	test('should login successfully', async ({ page, loginPage }) => {
		await loginPage.goto();
		await loginPage.enterEmail(email);
		await loginPage.enterPassword(password);
		await loginPage.clickLogin();

		await expect(page).toHaveURL('https://www.automationexercise.com/');
		await expect(page.getByText(`Logged in as ${username}`)).toBeVisible();
	});

	// test('should not login', async ({ page }) => {});
});

test('should logout', async ({ loginPage }) => {
	await loginPage.goto();
	await loginPage.login(email, password);

	await loginPage.clickLogout();
});
