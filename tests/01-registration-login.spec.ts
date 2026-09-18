import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage.ts';
import { RegistrationPage } from '../pages/RegistrationPage.ts';
import { testData } from '../utils/testdata.ts';


test('User registration and login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const registrationPage = new RegistrationPage(page);

  const email = testData.email;
  const password =testData.password; 

  // Open login page
  await loginPage.navigate();

  // Navigate to registration
  await loginPage.clickRegister();
 

  // Register user
  await registrationPage.register(
    testData.firstName,
    testData.lastName,
    testData.email,
    testData.phone,
    testData.password
  );
   await page.getByRole('heading', { name: 'Account Created Successfully' }).click();
  await page.getByRole('button', { name: 'Login' }).click();


  // Login with registered user
  await loginPage.login(email, password);

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);

  
});