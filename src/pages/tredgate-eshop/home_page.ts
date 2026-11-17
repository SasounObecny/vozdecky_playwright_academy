import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccountIcon: Locator;
  readonly registerLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountIcon = page.locator("#top-links a i.fa-user");
    this.registerLink = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]',
    );
  }
  async open() {
    await this.page.goto(this.url);
  }
  async clickMyAccount() {
    await this.myAccountIcon.click();
  }
  async clickRegisterLink() {
    await this.registerLink.click();
  }
}
