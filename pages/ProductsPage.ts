import { Page, Locator, expect } from '@playwright/test';

export class ClientPage {

  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  readonly adidasProduct: Locator;
  readonly zaraProduct: Locator;

  readonly addToCartButtons: Locator;
  readonly cartButton: Locator;

  readonly myCartHeading: Locator;
  readonly adidasCartProduct: Locator;
  readonly zaraCartProduct: Locator;

  constructor(page: Page) {

    this.page = page;

    // Login locators
    this.emailInput = page.getByRole('textbox', {
      name: 'email@example.com'
    });

    this.passwordInput = page.getByRole('textbox', {
      name: 'enter your passsword'
    });

    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });

    // Product locators
    this.adidasProduct = page.getByText('ADIDAS ORIGINAL');

    this.zaraProduct = page.getByText('ZARA COAT');

    this.addToCartButtons = page.getByRole('button', {
      name: ' Add To Cart'
    });

    // Cart locator
    this.cartButton = page.getByRole('button', {
      name: '   Cart'
    });

    // Cart page locators
    this.myCartHeading = page.getByRole('heading', {
      name: 'My Cart'
    });

    this.adidasCartProduct = page.getByRole('heading', {
      name: 'ADIDAS ORIGINAL'
    });

    this.zaraCartProduct = page.getByRole('heading', {
      name: 'ZARA COAT'
    });
  }

  // Open application
  async navigateToLoginPage() {
    await this.page.goto(
      'https://rahulshettyacademy.com/client/#/auth/login'
    );
  }

  // Login
  async login(email: string, password: string) {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  // Add Adidas product
  async addAdidasToCart() {

    await expect(this.adidasProduct).toBeVisible();

    await this.addToCartButtons.first().click();
  }

  // Add Zara product
  async addZaraToCart() {

    await expect(this.zaraProduct).toBeVisible();

    await this.addToCartButtons.nth(1).click();
  }

  // Open cart
  async openCart() {

    await this.cartButton.click();

    await expect(this.myCartHeading).toBeVisible();
  }

  // Validate products in cart
  async validateProductsInCart() {

    await expect(this.adidasCartProduct).toBeVisible();

    await expect(this.zaraCartProduct).toBeVisible();
  }
}