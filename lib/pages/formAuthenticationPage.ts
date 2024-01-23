import expect from "expect"
import { BrowserHelper } from "./browserHelper"

let usernameTxt = "[id='username']"
let passwordTxt = "[id='password']"
let loginBtn = "[type='submit']"
let loginTxt = "[id='content'] h2"
let errorTxt = "[id='flash']"

export class FormAuthenticationPage extends BrowserHelper {

  async enterUserNameAndPassword(username: string, password: string) {
    await this.setValue(usernameTxt, username)
    await this.setValue(passwordTxt, password)
  }

  async clickOnLogin() {
    await this.clickOn(loginBtn)
  }

  async verifyLoginText(loginText: string) {
    let text = await this.getText(loginTxt)
    expect(text).toBe(loginText)
     await this.waitFor(2000)
  }

  async verifyErrorMessage(errorMessage: string) {
    let text = await this.getText(errorTxt)
    expect(text).toContain(errorMessage)
    await this.waitFor(2000)
  }
  
}