
import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailInput = page.getByRole('textbox', { name: 'email@example.com' });
        this.passwordInput = page.getByRole('textbox', { name: 'enter your passsword' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async navigate() {
        await this.page.goto(process.env.BASE_URL);
    }

    async clickRegister() {
        await this.page.getByText('Don\'t have an account?').click();
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    

    
}



