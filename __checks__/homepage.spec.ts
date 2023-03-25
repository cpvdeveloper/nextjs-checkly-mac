import { test, expect } from "@playwright/test";
import { defaults } from "./defaults";

test("Checkly Homepage", async ({ page }) => {
  const response = await page.goto(defaults.pageUrl);
  expect(response?.status()).toBeLessThan(400);
  await expect(page).toHaveTitle(/Create Next App/);
  await page.screenshot({ path: "homepage.jpg" });
});
