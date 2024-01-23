import expect from "expect"
import { BrowserHelper } from "./browserHelper"

let aBlock = "[id='column-a']"
let bBlock = "[id='column-b']"


export class DragAndDropPage extends BrowserHelper {

  async dragAndDropAction(src: string, dest: string) {
    let srcLocator = src.includes('A') ? aBlock : bBlock
    let destLocator = dest.includes('B') ? bBlock : aBlock
    await this.dragAndDrop(srcLocator, destLocator)
  }

  async verifySrcAndDestText(srcText: string, destText: string) {
    expect(srcText).toBe(await this.getText(aBlock))
    expect(destText).toBe(await this.getText(bBlock))
  }
  
}