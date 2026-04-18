import { JobPage } from "../pages/job-page";
import { test, expect } from "../fixtures/login.fixture";

test.describe("jobs window test suite", () => {
  let jobsObj: JobPage;
  test.beforeEach(async ({ loggedPage }) => {
    jobsObj = new JobPage(loggedPage);
  });

  test("verify existence of jobs", async ({ loggedPage }) => {
    await jobsObj.goTo();
    const jobs = (await loggedPage.locator("a.ficha").allTextContents()).length;
    await expect(jobs).toBeGreaterThan(0);
  });
});
