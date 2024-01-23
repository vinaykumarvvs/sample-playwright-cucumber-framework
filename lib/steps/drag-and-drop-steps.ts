import { When, Then } from "@cucumber/cucumber"
import { DragAndDropPage } from "../pages/dragAndDropPage";

let dragAndDropPage: DragAndDropPage = new DragAndDropPage();

When('user on DragAndDropPage drags {string} on top of {string}', async (src: string, dest: string) => {
    await dragAndDropPage.dragAndDropAction(src, dest)
})

Then('user on DragAndDropPage verifies the first block text as {string} and second block text as {string}'
        , async (srcText: string, destText: string) => {
    await dragAndDropPage.verifySrcAndDestText(srcText, destText)
})