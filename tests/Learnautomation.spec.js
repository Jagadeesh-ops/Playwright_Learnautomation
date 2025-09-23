const { test, expect } = require("@playwright/test");


test("Login to learnautomation", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("//input[@id='name']").fill("Kasim")
    await page.locator("//input[@id='email']").fill("jagadeeshsn13@gmail.com")
    await page.locator("//input[@id='password']").fill("Jagadeesh@123")

  await page.locator("//input[@id='68bec4713f49e5e7142d0813']").check()
  await page.locator("//input[@id='gender1']").check()
  
  await page.locator("#state").selectOption({label:"Karnataka"})
 await  page.waitForTimeout(2000)

 await page.waitForSelector("#hobbies")
  await page.locator("#hobbies").selectOption("Singing")


  await page.locator("//button[normalize-space()='Sign up']").click()
  await page.waitForTimeout(5000)

})