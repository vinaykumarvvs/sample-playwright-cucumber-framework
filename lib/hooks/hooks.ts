import { After, Before, setDefaultTimeout } from "@cucumber/cucumber"
import { Browser, BrowserContext, Page } from "playwright";
import { chromium, firefox } from "playwright";

export interface IDriver {
  browser: Browser | undefined;
  context: BrowserContext | undefined;
  page: Page | undefined;
}

export let driver: IDriver = {
  browser: undefined,
  page: undefined,
  context: undefined
};

Before(async (scenario) => {
  await createBrowser()
  driver.context = await driver.browser.newContext()
  driver.page = await driver.context.newPage()
})

After(async (scenario) => {
  await driver.page.close()
  await driver.browser.close()
})

async function createBrowser() {
  if (process.env.browser == "chrome"){
    driver.browser = await chromium.launch({
      channel: 'chrome',
      headless: false,
      args: ['--start-maximized']
    });
  } else if (process.env.browser == "firefox") {
    driver.browser = await firefox.launch({
      headless: false,
      args: ['--start-maximized']
    });
  }

}

setDefaultTimeout(600000)