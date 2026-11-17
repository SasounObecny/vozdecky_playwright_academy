import { test } from "@playwright/test";
import { HomePage } from "../../src/pages/tredgate-eshop/home_page";
import { RegisterPage } from "../../src/pages/tredgate-eshop/register_page";

test("Register with page objects", async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.open();
  await homePage.clickMyAccount();
  await homePage.clickRegisterLink();
  await registerPage.fillFirstName("Jan");
  await registerPage.fillLastName("Novák");
  await registerPage.fillEmail("test.email@mailinator.com");
  await registerPage.fillTelephone("+420888777666");
  await registerPage.fillPassword("TestPass123!");
  await registerPage.fillPasswordConfirm("TestPass123!");
  await registerPage.clickContinueButton();
});
