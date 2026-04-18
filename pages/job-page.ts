import { Locator, Page } from "@playwright/test";

export class JobPage {
  readonly workday: Locator;
  readonly jobs: Locator;
  readonly level: Locator;
  readonly jobsPosts: Locator;

  constructor(private readonly page: Page) {
    this.workday = page.locator('select[name="_jornadas"]');
    this.jobs = page.locator('.ficha')
    // this.jobs = page.locator('tr>td>h1>a>b');
    this.level = page.locator('select[name="_isco"]');
    this.jobsPosts = page.locator('[value="ver_ofertas.php?cv=1108648"]');

  }

  async goTo(){
    await this.jobsPosts.click()
  }
}

