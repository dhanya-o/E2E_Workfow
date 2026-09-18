

/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); */

/* 
test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('dhanya_test@example.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
 // await page.getByRole('img').first().click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.getByText('#6960ea76c941646b7a8b3dd5iphone 13 pro MRP $ 55000 In Stock').click();
  await page.getByText('My CartContinue Shopping#').click();
  await page.getByText('My CartContinue Shopping#').click();
  await page.getByText('#6960ea76c941646b7a8b3dd5').click();
  await page.getByText('#6960ea76c941646b7a8b3dd5iphone 13 pro MRP $ 55000 In Stock').click();
  await page.locator('app-profile').click();
  await page.getByRole('listitem').filter({ hasText: '#' }).click();
  await page.getByRole('listitem').filter({ hasText: '#' }).click();
  await page.getByRole('button', { name: '   Cart' }).click();
}); */
//import { test, expect } from '@playwright/test';
/* 
test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('dhanya_test@example.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Test@123');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('ADIDAS ORIGINAL').click();
  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByText('ZARA COAT').click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.getByRole('button', { name: '   Cart' }).click();
});  */
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('E2E: Client App Purchase Flow', async ({ page }) => {
  // Initialize Page Objects
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // 1. Login Phase
  await loginPage.navigate
  await loginPage.login('dhanya_test@example.com', 'Test@123');

  // 2. Dashboard Phase
  await productsPage.addProductToCart();
  await productsPage.goToCart();

  // 3. Cart Verification Phase
  //await cartPage.verifyAndInteractWithCart();
  await productsPage.goToCart(); // Clicks the cart button one last time as per your original script
});

