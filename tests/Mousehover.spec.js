const{test, expect}=require("@playwright/test")

test("Mousehover", async({page})=>{


    await page.goto("https://www.urbanladder.com/") 

    await page.locator("//span[normalize-space()='Sofas & Recliners']").hover()

    await page.locator("//a[normalize-space()='3 Seater Recliners']").click()

    await page.waitForTimeout(5000)

})