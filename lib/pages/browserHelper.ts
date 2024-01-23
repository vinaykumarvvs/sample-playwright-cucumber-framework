import { driver } from "../hooks/hooks"

let waitTime = 30000

export class BrowserHelper {

  async openUrl(url: string) {
    await driver.page.goto(url)
  }

  async setValue(locator: string, value: string) {
    await (await driver.page.locator(locator)).type(value, {timeout: waitTime})
  }

  async clickOn(locator: string) {
    await (await driver.page.locator(locator)).click({timeout: waitTime})
  }

  async waitFor(timeout: number) {
    await driver.page.waitForTimeout(timeout)
  }

  async getText(locator: string) {
    return await (await driver.page.locator(locator)).textContent()
  }

  async scrollToElement(locator: string) {
    await driver.page.locator(locator).scrollIntoViewIfNeeded()
  }

  async scollDown(scrollNumber: number) {
    await driver.page.mouse.wheel(0, scrollNumber);
  }

  async dragAndDrop(srcLocator: string, destLocator: string) {
    let srcElement = await driver.page.locator(srcLocator)
    let destElement = await driver.page.locator(destLocator)
    await srcElement.dragTo(destElement)
    await this.waitFor(2000)
  }

}