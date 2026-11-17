import { type Locator, type Page } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.telephoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }
  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }
  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }
  async fillTelephone(telephone: string) {
    await this.telephoneInput.fill(telephone);
  }
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }
  async fillPasswordConfirm(passwordConfirm: string) {
    await this.passwordConfirmInput.fill(passwordConfirm);
  }
  async clickContinueButton() {
    await this.continueButton.click();
  }
}
