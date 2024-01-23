import { BrowserHelper } from "./browserHelper";

const formAuthenticationHyperLink = "//*[text()='Form Authentication']"
const dragAndDropHyperLink = "//*[text()='Drag and Drop']"

export class HerokuMainPage extends BrowserHelper {

  async gotoHeroukuMainPage() {
    await this.openUrl("https://the-internet.herokuapp.com/")
  }

  async clickOnFormAuthentication() {
    await this.clickOn(formAuthenticationHyperLink)
  }

  async clickOnDragAndDrop() {
    await this.clickOn(dragAndDropHyperLink)
  }
}