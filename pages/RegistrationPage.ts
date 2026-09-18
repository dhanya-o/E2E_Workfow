import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly occupationDropdown: Locator;
  readonly femaleRadio: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly termsCheckbox: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.getByRole('textbox', {
      name: 'First Name'
    });

    this.lastNameInput = page.getByRole('textbox', {
      name: 'Last Name'
    });

    this.emailInput = page.getByRole('textbox', {
      name: 'email@example.com'
    });

    this.phoneInput = page.getByRole('textbox', {
      name: 'enter your number'
    });

    this.occupationDropdown = page.getByRole('combobox');

    this.femaleRadio = page.getByRole('radio', {
      name: 'Female'
    });

    this.passwordInput = page.getByRole('textbox', {
      name: 'Passsword'
    });

    this.confirmPasswordInput = page.getByRole('textbox', {
      name: 'Confirm Password'
    });

    this.termsCheckbox = page.getByRole('checkbox');

    this.registerButton = page.getByRole('button', {
      name: 'Register'
    });
  }

  async register(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);

    await this.occupationDropdown.selectOption('1: Doctor');

    await this.femaleRadio.check();

    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);

    await this.termsCheckbox.check();

    await this.registerButton.click();
  }
}