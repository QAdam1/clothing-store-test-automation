import { Locator, Page } from "@playwright/test";
import { BasePage } from "./foundation/BasePage";

export class LoginPage extends BasePage {
    readonly input_Email: Locator;
    readonly input_Password: Locator;
    readonly btn_Login: Locator;

    constructor(page: Page) {
        super(page);
        this.input_Email = page.getByPlaceholder("Email Address");
        this.input_Password = page.getByPlaceholder("Password");
        this.btn_Login = page.getByRole("button", { name: "Login" });
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

    async loginAs(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLogin();
    }
}
