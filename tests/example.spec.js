const { test, expect } = require("@playwright/test");

test("First Test", async ({ page }) => {
  // Write testing code here
  await page.goto("https://playwright.dev/");
});
