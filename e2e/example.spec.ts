import { test, expect, _electron as electron } from "@playwright/test";

test("homepage has title and links to intro page", async () => {
  const app = await electron.launch({ args: [".", "--no-sandbox"] });
  const page = await app.firstWindow();
  const title = await page.title();
  console.log("title", title);
  
  expect(await page.title()).toBe("Vite + React + TS");
  await page.screenshot({ path: "e2e/screenshots/example.png" });
});
