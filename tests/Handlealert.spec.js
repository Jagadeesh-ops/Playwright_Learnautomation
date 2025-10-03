const{test, expect}=require("@playwright/test")

test("Handle alert", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", async(dialog)=>{

        expect(dialog.type()).toContain("alert")

         expect(dialog.message()).toContain("I am a JS Alert")

         await dialog.accept()
    })
    await page.locator("//button[normalize-space()='Click for JS Alert']").click()

})



test("Handle confirm alert", async({page})=>{

 await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", async(dialogwindow)=>{

        expect(dialogwindow.type()).toContain("confirm")

         expect(dialogwindow.message()).toContain("I am a JS Confirm")

         //await dialogwindow.accept()
         await dialogwindow.dismiss()

    })
    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()
})



test("Handle prompt alert", async({page})=>{

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", async(dialogwindow)=>{

        expect(dialogwindow.type()).toContain("prompt")

         expect(dialogwindow.message()).toContain("I am a JS prompt")

         await dialogwindow.accept("Jagadeesh")
         
    })
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()

    await page.waitForTimeout(5000)


     await expect(page.locator("//p[@id='result']")).toHaveText("You entered: Jagadeesh")
    const text=await page.locator("//p[@id='result']").textContent()
    console.log(text)
})



