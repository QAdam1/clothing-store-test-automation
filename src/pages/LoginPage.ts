import { Locator, Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class LoginPage extends BasePage {
    private readonly input_Email: Locator;
    private readonly input_Password: Locator;
    private readonly btn_Login: Locator;

    constructor(page: Page) {
        super(page);
        this.input_Email = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.input_Password = page.getByPlaceholder('Password');
        this.btn_Login = page.getByRole('button', { name: 'Login' });
    }

    async fillEmail(email: string) {
        await this.input_Email.fill(email);
    }

    async fillPassword(password: string) {
        await this.input_Password.fill(password);
    }

    async clickLogin() {
        await this.btn_Login.click();
    }

    async login(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLogin();
    }
}
