import { Locator, Page, expect} from "@playwright/test";

export class Countries {
  readonly header: Locator;
  readonly url='/est_paises.php'

  constructor(private readonly page: Page) {
    this.header = page.locator("td.th1");
  }

  async goTo(){
    await this.page.goto(this.url)
  }

  async expectHeaderVisible() {
    await expect(this.header).toBeVisible();
  }
}
