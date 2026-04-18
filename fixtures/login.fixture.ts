import { LoginPage } from "../pages/login-page";
import { Home } from "../pages/home";
import { test as base, Page } from "@playwright/test";

type MyFixtures = {
  loggedPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedPage: async ({ page }, use) => {
    const home = new Home(page);
    const login = new LoginPage(page);

    //Visit the loginpage
    await page.goto("/");
    await home.login.click();

    //fill login fields

    await login.username.fill(process.env.EMAIL!);
    await login.password.fill(process.env.PASSWORD!);

    await login.candidate.check();
    await login.btnLogin.click();

    await use(page);
  },
});

export const expect = test.expect;
