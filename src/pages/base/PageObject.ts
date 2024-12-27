import { Page } from '@playwright/test';

export class PageObject {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
