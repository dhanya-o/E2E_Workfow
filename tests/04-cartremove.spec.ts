import { test, expect } from '@playwright/test';
import { ClientPage } from '../pages/CartPage';

declare const process: {
  env: Record<string, string | undefined>;
};

test('Login and add products to cart', async ({ page }) => {

  const clientPage = new ClientPage(page);

   // Navigate to login page
  await clientPage.navigateToLoginPage();
    const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  if (!email || !password) {
    throw new Error(
      'EMAIL and PASSWORD environment variables are required'
    );
  }

  await clientPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!);

  // Step 4: Verify Adidas product
  await expect(clientPage.adidasProduct).toBeVisible();

  // Step 5: Add Adidas to cart
  await clientPage.addAdidasToCart();

  // Step 6: Verify Zara product
  await expect(clientPage.zaraProduct).toBeVisible();

  // Step 7: Add Zara to cart
  await clientPage.addZaraToCart();

  // Step 8: Open cart
  await clientPage.openCart();

  // Step 9: Verify My Cart
  await expect(clientPage.myCartHeading).toBeVisible();
console.log('My Cart heading is visible');
  // Step 10: Verify Adidas in cart
  await clientPage.verifyAdidasInCart();

  // Step 11: Verify Adidas price
  await clientPage.verifyAdidasPrice();

  // Step 12: Verify Zara in cart
  await clientPage.verifyZaraInCart();

  // Step 13: Verify Zara price
  await clientPage.verifyZaraPrice();

  // Step 14: Click next
  await clientPage.clickNextButton();

  // Step 15: Verify Zara
  await clientPage.verifyZaraAfterNext();
});