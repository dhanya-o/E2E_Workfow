import { test, expect } from '@playwright/test';
import { ClientPage } from '../pages/ProductsPage';
import process from 'process';

test('Login and add products to cart', async ({ page }) => {

  const clientPage = new ClientPage(page);

  // Navigate to login page
  await clientPage.navigateToLoginPage();
    const email = process.env.EMAIL;
  const password = process.env.PASSWORD;


  await clientPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!);

  // Verify login successful
  await expect(page).toHaveURL(/client/);

  // Add Adidas product
  await clientPage.addAdidasToCart();

  // Add Zara product
  await clientPage.addZaraToCart();

  // Open cart
  await clientPage.openCart();

  // Validate products
  await clientPage.validateProductsInCart();
});