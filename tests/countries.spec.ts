import test, { expect } from "@playwright/test";
import { Countries } from "../pages/countries";
import {languages} from '../data/language-data'

test.describe("countries test suite", () => {
  let countries: Countries;
  test.beforeEach(async ({ page }) => {
    countries = new Countries(page);
    await countries.goTo();
  });


  for (let language of languages) {
    test(`validate ${language.name} language`, async () => {
      await countries.expectLanguageChange(language.value, language.title);
    });
  }
});
