
import { test, expect } from '@playwright/test';
import {
  LoginPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  ConfirmationPage,

} from '../pages/Checkout';
import { HomePage, OrdersPage } from '../pages/ContinueandSignout';
  declare const process: {
  env: Record<string, string | undefined>;
};

test('Place Zara Coat order successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);
  const ordersPage = new OrdersPage(page);
  const homePage = new HomePage(page);

  await page.goto(
    'https://rahulshettyacademy.com/client/#/auth/login'
  );
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  if (!email || !password) {
    throw new Error(
      'EMAIL and PASSWORD environment variables are required'
    );
  }

  // Login
  await loginPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!
  );

  // Add product to cart
  await productPage.addProductToCart();

  // Go to cart
  await productPage.goToCart();

  // Checkout
  await cartPage.checkout();

  // Enter payment details
  await checkoutPage.enterCardDetails(
    '4542 9931 9292 22933',
    '12',
    '30',
    '123'
  );

  // Select country
  await checkoutPage.selectCountry('India');

  // Place order
  await checkoutPage.placeOrder();

  // Verify order confirmation
  await expect(
    confirmationPage.confirmationMessage
  ).toBeVisible();

  await expect(
    confirmationPage.confirmationMessage
  ).toHaveText('Thankyou for the order.');

  // Go to Home
  await homePage.goHome();

  // Select iPhone 13 Pro
  await homePage.selectIphone13Pro();

  // Sign out
  await homePage.signOut();

  // Verify login page is displayed
  await expect(loginPage.loginButton).toBeVisible();
});