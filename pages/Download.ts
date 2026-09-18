import { Page, Locator } from '@playwright/test';
import process from 'process';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    this.emailInput = page.getByRole('textbox', {
      name: 'email@example.com',
    });
 
    this.passwordInput = page.getByRole('textbox', {
      name: 'enter your passsword',
    });
 
    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });
  }

      async navigate() {
        await this.page.goto(process.env.BASE_URL);
    }
 
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
} 
 
export class ProductPage {
  readonly page: Page;
  readonly product: Locator;
  readonly addToCartButton: Locator;
  readonly cartButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    this.product = page.getByText('ZARA COAT');
 
    this.addToCartButton = page.getByRole('button', {
      name: ' Add To Cart',
    });
 
    this.cartButton = page.getByRole('button', {
      name: '   Cart',
    });
  }
 
  async addProductToCart() {
    await this.product.click();
    await this.addToCartButton.nth(1).click();
  }
 
  async goToCart() {
    await this.cartButton.click();
  }
}
 
 
export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    this.checkoutButton = page.getByRole('button', {
      name: 'Checkout❯',
    });
  }
 
  async checkout() {
    await this.checkoutButton.click();
  }
}
 
 
export class CheckoutPage {
  readonly page: Page;
  readonly cardNumber: Locator;
  readonly expiryMonth: Locator;
  readonly expiryYear: Locator;
  readonly cvv: Locator;
  readonly placeOrderButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    this.cardNumber = page.getByRole('textbox').first();
 
    this.expiryMonth = page.getByRole('combobox').first();
 
    this.expiryYear = page.getByRole('combobox').nth(1);
 
    this.cvv = page.getByRole('textbox').nth(1);
 
    this.placeOrderButton = page.getByText('Place Order');
  }
 
  async enterCardDetails(
    cardNumber: string,
    month: string,
    year: string,
    cvv: string
  ) {
    await this.cardNumber.fill(cardNumber);
 
    await this.expiryMonth.selectOption(month);
 
    await this.expiryYear.selectOption(year);
 
    await this.cvv.fill(cvv);
  }
 
  async selectCountry(country: string) {
    const countryInput = this.page.getByPlaceholder('Select Country');
 
    await countryInput.pressSequentially(country);
 
    await this.page.getByText(country, {
      exact: true,
    }).click();
  }
 
  async placeOrder() {
    await this.placeOrderButton.click();
  }
}
 
 
export class ConfirmationPage {
  readonly page: Page;
  readonly confirmationMessage: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    this.confirmationMessage = page.getByRole('heading', {
      name: 'Thankyou for the order.',
    });
  }
 
  // async verifyOrderConfirmation() {
   
  //   await this.confirmationMessage.click();
  async verifyOrderConfirmation() {
    await this.confirmationMessage.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(10000);
  }
}

export class OrderConfirmationPage {
  readonly page: Page;
  readonly downloadOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.downloadOrderButton = page.getByRole('button', {
      name: 'Click To Download Order'
    });
  }

  async downloadOrder() {
    const downloadPromise = this.page.waitForEvent('download');

    await this.downloadOrderButton.click();

    return await downloadPromise;
  }
}
