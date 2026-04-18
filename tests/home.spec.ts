import { test, expect, Locator } from "@playwright/test";
import { Home } from "../pages/home";
import { menu } from "../data/menu.data";

test.describe("home tests", () => {
  let home: Home;
  test.beforeEach(async ({ page }) => {
    home = new Home(page);
    await page.goto("/");
  });

  test("check header", async () => {
    await home.expectHeaderVisible();
  });

  for (let menu_item of menu) {
    test(`navigate to ${menu_item.name}`, async ({ page }) => {
      await (home[menu_item.name] as Locator).click()
      await expect(page).toHaveURL(menu_item.url);
    });
  }
});
