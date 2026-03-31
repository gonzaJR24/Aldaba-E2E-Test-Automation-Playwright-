import { Locator, Page, expect } from "@playwright/test";

export class Countries {
  readonly url = "/est_paises.php";
  readonly countrySelector: Locator;
  readonly countryHeader:Locator

  constructor(private readonly page: Page) {
    this.countrySelector = page.locator('select[name="lang"]')
    this.countryHeader=page.locator('th1>b')
  }

  async goTo() {
    await this.page.goto(this.url);
  }

  async expectLanguageChange(value: string, header: string) {
    await this.countrySelector.selectOption(value);
    await expect(this.countryHeader).toHaveText(header)  
  }
}
