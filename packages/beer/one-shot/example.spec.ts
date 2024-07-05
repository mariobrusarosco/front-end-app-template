import { test, expect, Locator } from "@playwright/test";
import fs from "fs";

const grabRoundInfo = () => {};
const URL = "https://www.bet365.com";

test.skip("acess home", async ({ page }) => {
  let allRounds = [];
  let round = 1;
  await page.goto(URL);

  await page.getByText("Por Rodadas").click();
  await page.locator(".TabPanel .DropdownButton").click();
  await page.getByRole("option", { name: "Rodada 1", exact: true }).click();

  await page.locator(".list-wrapper > .Box").last().click();

  while (round <= 3) {
    await page.locator(".list-wrapper > .Box").last();
    const list = page.locator(".list-wrapper > .Box").last().getByRole("link");
    const content = await list.evaluateAll((list) =>
      list.map((element) => element.textContent)
    );

    allRounds.push({ round, games: content });
    round++;
    await page.locator(".list-wrapper > div > button:nth-child(3)").click();
  }

  fs.writeFile("./eita.json", JSON.stringify(allRounds), (err) => {
    if (err) {
      console.error("--- [ 11111 ---", err);
      throw err;
    }
    console.warn("--- [ 2312321] ---");
  });
});

const USER = "mariobrusa";
const PASSWORD = "APSi3*Q8w.2f9cG";

test("365", async ({ page }) => {
  let allRounds = [];
  let round = 1;
  await page.goto(URL);

  // await expect(page.locator(".bl-Preloader_Spinner ")).toHaveCount(0);

  await page.getByText("Aceitar todos").click();
  await page.getByText("Login").nth(1).click();

  await page.getByPlaceholder("Usuário").fill(USER);
  await page.getByPlaceholder("Senha").fill(PASSWORD);
  await page.locator(".lms-LoginButton").click();
  await expect(page.locator(".lms-LoginButton")).toHaveCount(0);

  await page.goto("https://www.bet365.com/#/IP/B1");

  await page.evaluate(() => {
    const selector = document.querySelector(".wcl-ModalManager_DarkWash");
    selector.remove();
  });
  await page.waitForTimeout(5000);

  // await page
  //   .locator("div")
  //   .filter({ hasText: /^Futebol$/ })
  //   .click();

  // await page.locator(".hm-MainHeaderMembersWide_MembersMenuIcon").click();

  // await page
  //   .locator("div")
  //   .filter({ hasText: /^Ao-Vivo$/ })
  //   .first()
  //   .click();
  await expect(page.locator(".wc-Spinner")).toHaveCount(1);
  // await expect(page.locator(".wc-Spinner")).toHaveCount(0, { timeout: 40000 });
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  await page.getByText("Futebol").nth(1).click();
});
