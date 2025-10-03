const {test, expect } = require("@playwright/test")

test('Keyboard Events', async({page})=>{

await page.goto("https://www.google.com/")

/*await page.locator("textarea[name='q']").fill("jagadeesh")
await page.keyboard.press("Control+a")
 
await page.keyboard.press("Backspace")

await page.keyboard.press("Control+v")

await page.keyboard.press("Enter")
*/

await page.locator("textarea[name='q']").focus()

await page.keyboard.type("jagadeesh Sarayad!")

await page.keyboard.press("ArrowLeft")

await page.keyboard.down("Shift")

for(let i=0;i<'Sarayad!'.length;i++){

    await page.keyboard.press("ArrowLeft")
}
await page.keyboard.up("Shift")

await page.keyboard.press("Backspace")

await page.waitForTimeout(5000)

})