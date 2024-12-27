import { expect, Locator } from '@playwright/test';

export const verifyElementVisible = async (element: Locator) => {
    await expect(element).toBeVisible();
};
