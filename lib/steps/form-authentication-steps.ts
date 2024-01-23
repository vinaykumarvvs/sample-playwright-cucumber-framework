import { When, Then } from "@cucumber/cucumber"
import { FormAuthenticationPage } from "../pages/formAuthenticationPage";

let formAuthenticationPage: FormAuthenticationPage = new FormAuthenticationPage();

When('user on FormAuthenticationLoginPage enter username as {string} and password as {string}', async (username: string, password: string) => {
    await formAuthenticationPage.enterUserNameAndPassword(username, password)
})

When('user on FormAuthenticationLoginPage clicks on login', async () => {
    await formAuthenticationPage.clickOnLogin()
})

Then('user on FormAuthenticationLoginPage verifies this message {string}', async (textToVerify: string) => {
    await formAuthenticationPage.verifyLoginText(textToVerify)
})

Then('user on FormAuthenticationLoginPage verifies the error message as {string}', async (errorMessage: string) => {
    await formAuthenticationPage.verifyErrorMessage(errorMessage)
})