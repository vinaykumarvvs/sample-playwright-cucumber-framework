import { Given, When } from "@cucumber/cucumber"
import { HerokuMainPage } from "../pages/herokuMainPage";

let herokuMainPage: HerokuMainPage = new HerokuMainPage();

Given('user navigates to HerokuMainPage', async () => {
    await herokuMainPage.gotoHeroukuMainPage()
})

When('user on HerokuMainPage clicks on Form Authentication', async () => {
    await herokuMainPage.clickOnFormAuthentication()
})

When('user on HerokuMainPage clicks on DragAndDrop', async () => {
    await herokuMainPage.clickOnDragAndDrop()
})