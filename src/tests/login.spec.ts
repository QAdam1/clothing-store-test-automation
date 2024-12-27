import test from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.automationexercise.com/login');
});
