import { Locator, Page } from '@playwright/test';
import { PageObject } from './PageObject';

export class BasePage extends PageObject {
    private readonly btn_Home: Locator;
    private readonly btn_Products: Locator;
    private readonly btn_Cart: Locator;
    private readonly btn_LoginAndSignUp: Locator;
    private readonly btn_Logout: Locator;

    constructor(page: Page) {
        super(page);
        this.btn_Home = page.getByRole('link', { name: 'Home' });
        this.btn_Products = page.getByRole('link', { name: 'Products' });
        this.btn_Cart = page.getByRole('link', { name: 'Cart' });
        this.btn_LoginAndSignUp = page.getByRole('link', { name: 'Signup / Login' });
        this.btn_Logout = page.getByRole('link', { name: 'Logout' });
    }

    async goToHome() {
        await this.btn_Home.click();
    }

    async goToProducts() {
        await this.btn_Products.click();
    }

    async goToCart() {
        await this.btn_Cart.click();
    }

    async goToLoginAndSignUp() {
        await this.btn_LoginAndSignUp.click();
    }

    async goToLogout() {
        await this.btn_Logout.click();
    }
}
