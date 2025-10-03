const{test,expect}=require("@playwright/test")

test("Handle autosuggestion", async({page})=>{

    await page.goto("https://www.google.com/")

    await page.locator("textarea[name='q']").fill("Arunachalam")

    await page.waitForSelector("//li[@role='presentation']")

   await page.keyboard.press("ArrowDown")

   await page.keyboard.press("ArrowDown")

   await page.keyboard.press("Enter")

})


test.only("Handle autosuggestion1", async({page})=>{

    await page.goto("https://www.google.com/")

    await page.locator("textarea[name='q']").fill("Arunachalam")

    await page.waitForSelector("//li[@role='presentation']")

    const element = await page.$$("//li[@role='presentation']")
     
    for(let i=0; i<element.length; i++){

        const text =await element[i].textContent()
        if(text.includes("tamilnadu"))
        {
            await element[1].click()
            break
        }
    } 
await page.waitForTimeout(6000)
})