import { Locator, Page } from "@playwright/test";
import { PageObject } from "./PageObject";

export class BasePage extends PageObject {
    readonly btn_Home: Locator;
    readonly btn_Products: Locator;
    readonly btn_Cart: Locator;
    readonly btn_Login: Locator;

    constructor(page: Page) {
        super(page);
        this.btn_Home = page.getByRole('link', { name: 'Hone' });
        this.btn_Products = page.getByRole('link', { name: 'Products' });
        this.btn_Cart = page.getByRole('link', { name: 'Cart' });
        this.btn_Login = page.getByRole('link', { name: ' Signup / Login' });
    }

    async goToHome(): Promise<void> {
        await this.btn_Home.click();
    }

    async goToProducts(): Promise<void> {
        await this.btn_Products.click();
    }

    async goToCart(): Promise<void> {
        await this.btn_Cart.click();
    }

    async goToLogin(): Promise<void> {
        await this.btn_Login.click();
    }
}