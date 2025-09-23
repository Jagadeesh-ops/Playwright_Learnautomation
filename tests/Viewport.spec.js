const{test, expect}=require("@playwright/test")

test.use({viewport:{width: 1920,height: 1080}})

test("verify the viewport", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)


    await page.getByPlaceholder("Username").fill("Admin")

    await page.getByPlaceholder("password").fill("Admin123")

    await page.locator("//button[normalize-space()='Login']").click()

    const errormessage= await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent()
    console.log("Error message is:",+errormessage)
    expect(errormessage.includes("Invalid")).toBeTruthy()

   // expect(errormessage).toBe("Invalid credentials");

    expect(errormessage==="Invalid credentials").toBeTruthy()

})