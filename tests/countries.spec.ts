import test, { expect } from "@playwright/test";
import { Countries } from "../pages/countries";

test.describe("countries test suite", () => {
  let countries: Countries;
  test.beforeEach(async ({ page }) => {
    countries = new Countries(page);
    await countries.goTo();
  });

  test("check languages change", async ({ page }) => {
    await test.step("validate english language", async () => {
      await countries.expectLanguageChange(
        "index.php?lang=en",
        "Employment and training portal",
      );
    });

    await test.step("validate spanish language", async () => {
      await countries.expectLanguageChange(
        "index.php?lang=es",
        "Portal de empleo y formación",
      );
    });

    await test.step("validate french language", async () => {
      await countries.expectLanguageChange(
        "index.php?lang=fr",
        "Portail de l’emploi et de la formation",
      );
    });

    await test.step("validate italian language", async () => {
      await countries.expectLanguageChange(
        "index.php?lang=it",
        "Portale dell'occupazione e della formazione",
      );
    });

    await test.step("validate haitian language", async () => {
      await countries.expectLanguageChange(
        "index.php?lang=ht",
        "Travay ak pòtal fòmasyon",
      );
    });

    await test.step("validate portuguese language", async () => {
      await countries.expectLanguageChange(
        "index.php?lang=pt",
        "Portal do emprego e da formação",
      );
    });

    await test.step("validate romanian language", async () => {
      await countries.expectLanguageChange(
        "index.php?lang=ro",
        "Ocuparea forţei de muncă şi de formare",
      );
    });
  });
});
