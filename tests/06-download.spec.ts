import { test, expect } from '@playwright/test';
import {

  ProductPage,
  CartPage,
  CheckoutPage,
  ConfirmationPage,
} from '../pages/Checkout';
import { OrderConfirmationPage } from '../pages/Download';
import { ProducttestData } from '../utils/testdata.ts';
import { ClientPage } from '../pages/ProductsPage';


test('Place Zara Coat order successfully', async ({ page }) => {

  //const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  const clientPage = new ClientPage(page);

  // Navigate to login page
  await clientPage.navigateToLoginPage();
    const email = process.env.EMAIL;
  const password = process.env.PASSWORD;


  await clientPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!);
  // Add product to cart
  await productPage.addProductToCart();

  // Go to cart
  await productPage.goToCart();

  // Checkout
  await cartPage.checkout();

  // Enter payment details
  await checkoutPage.enterCardDetails(
    ProducttestData.payment.cardNumber,
    ProducttestData.payment.expiryMonth,
    ProducttestData.payment.expiryYear,
    ProducttestData.payment.cvv
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


  const orderConfirmationPage = new OrderConfirmationPage(page);


  // Download order
  const download = await orderConfirmationPage.downloadOrder();

  console.log('Downloaded file:', download.suggestedFilename());

  expect(download.suggestedFilename()).toBeTruthy();
});
