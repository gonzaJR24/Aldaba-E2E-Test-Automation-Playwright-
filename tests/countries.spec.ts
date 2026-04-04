import test, { expect } from "@playwright/test";
import { Countries } from "../pages/countries";
import {languages} from '../data/language-data'
import { CountryData } from "../data/countries-data";

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

  for(let country of CountryData){
    test(`verify country: ${country}`, async({page})=>{
      await page.locator('select[name="geo"]').selectOption(`index.php?newg=${country}`)
      await expect(page.locator('a', {hasText:country})).toBeVisible()

    })
  }
});

