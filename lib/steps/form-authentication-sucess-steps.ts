import { When, Then } from "@cucumber/cucumber"
import { FormAuthenticationSuccessPage } from "../pages/formAuthenticationSuccessPage";

let formAuthenticationSuccessPage: FormAuthenticationSuccessPage = new FormAuthenticationSuccessPage();

Then('user on FormAuthenticationSuccessPage verifies this message {string}', async (textToVerify: string) => {
    await formAuthenticationSuccessPage.verifySuccessText(textToVerify)
})

When('user on FormAuthenticationSuccessPage clicks on logout', async () => {
    await formAuthenticationSuccessPage.clickOnLogout()
})