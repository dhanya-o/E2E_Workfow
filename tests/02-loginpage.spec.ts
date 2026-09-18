
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginTestData } from '../utils/testdata';

test.describe('Login Tests', () => {

    test('Verify valid user login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            loginTestData.validUser.email,
            loginTestData.validUser.password
        );

        await expect(page).toHaveURL(/dashboard/);

    });

    test('Verify invalid user login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            loginTestData.invalidUser.email,
            loginTestData.invalidUser.password
        );

        // Verify error message
        await expect(page.getByText('Incorrect email or password.')).toBeVisible();

        // Verify user remains on login page
        await expect(page).toHaveURL(/client/);
        
    });

    
});