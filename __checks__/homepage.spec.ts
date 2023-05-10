import { test, expect } from "@playwright/test";
import { defaults } from "./defaults";

/**
 * This is just a Playwright test, but we can create a Checkly check that uses it.
 * By default (according to our `checkly.config.ts`), Checkly will automatically create a Browser check from this test.
 * However, in this repo, we manually define the check in `homepage.check.ts` so that we can override some configuration.
 */
test("Checkly Homepage", async ({ page }) => {
  const response = await page.goto(defaults.pageUrl);
  expect(response?.status()).toBeLessThan(400);
  await expect(page).toHaveTitle(/Create Next App/);
  await page.screenshot({ path: "homepage.jpg" });
});
