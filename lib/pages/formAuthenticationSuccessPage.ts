import expect from "expect"
import { BrowserHelper } from "./browserHelper"

let secureAreaTxt = "[class='example'] h2"
let logoutBtn = "[href='/logout']"

export class FormAuthenticationSuccessPage extends BrowserHelper {
  
  async verifySuccessText(successText: string) {
    let text = await this.getText(secureAreaTxt)
    expect(text).toBe(successText)
  }

  async clickOnLogout() {
    await this.clickOn(logoutBtn)
  }
  
}