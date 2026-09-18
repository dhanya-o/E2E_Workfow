import { Page, Locator, expect } from '@playwright/test';

export class ClientPage {

  readonly page: Page;

  // Login page locators
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // Dashboard locators
  readonly adidasProduct: Locator;
  readonly zaraProduct: Locator;
  readonly addToCartButtons: Locator;
  readonly cartButton: Locator;

  // Cart page locators
  readonly myCartHeading: Locator;
  readonly adidasCartProduct: Locator;
  readonly zaraCartProduct: Locator;
  readonly priceElements: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {

    this.page = page;

    // Login
    this.emailInput = page.getByRole('textbox', {
      name: 'email@example.com'
    });

    this.passwordInput = page.getByRole('textbox', {
      name: 'enter your passsword'
    });

    this.loginButton = page.getByRole('button', {
      name: 'Login'
    });

    // Products
    this.adidasProduct = page.getByText('ADIDAS ORIGINAL');

    this.zaraProduct = page.getByText('ZARA COAT');

    this.addToCartButtons = page.getByRole('button', {
      name: ' Add To Cart'
    });

    // Cart
    this.cartButton = page.getByRole('button', {
      name: '   Cart'
    });

    this.myCartHeading = page.getByRole('heading', {
      name: 'My Cart'
    });

    this.adidasCartProduct = page.getByRole('heading', {
      name: 'ADIDAS ORIGINAL'
    });

    this.zaraCartProduct = page.getByRole('heading', {
      name: 'ZARA COAT'
    });

    // Price
    this.priceElements = page.getByText('$');

    // Next button
    this.nextButton = page.getByRole('button', {
      name: '❯'
    });
  }

  // Navigate to login
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

  // Navigate to dashboard
  async navigateToDashboard() {

    await this.page.goto(
      'https://rahulshettyacademy.com/client/#/dashboard/dash'
    );
  }

  // Add Adidas to cart
  async addAdidasToCart() {

    await expect(this.adidasProduct).toBeVisible();

    await this.addToCartButtons.first().click();
  }

  // Add Zara to cart
  async addZaraToCart() {

    await expect(this.zaraProduct).toBeVisible();

    await this.addToCartButtons.nth(1).click();
  }

  // Open cart
  async openCart() {

    await this.cartButton.click();

    await expect(this.myCartHeading).toBeVisible();
  }

  // Validate Adidas in cart
  async verifyAdidasInCart() {

    await expect(this.adidasCartProduct).toBeVisible();
  }

  // Validate Adidas price
  async verifyAdidasPrice() {

    await expect(this.priceElements.nth(1)).toBeVisible();
  }

  // Validate Zara in cart
  async verifyZaraInCart() {

    await expect(this.zaraCartProduct).toBeVisible();
  }

  // Validate Zara price
  async verifyZaraPrice() {

    await expect(this.priceElements.nth(3)).toBeVisible();
  }

  // Click next button
  async clickNextButton() {

    await this.nextButton.nth(2).click()
  }

  // Verify Zara after next
  async verifyZaraAfterNext() {

    await expect(this.zaraCartProduct).toBeVisible();
// Pause to observe the result
  }
}
 