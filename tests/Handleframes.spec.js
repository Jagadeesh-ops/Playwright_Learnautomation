/*const{test, expect}=require("@playwright/test")

test("Handle frames", async({page})=>{

await page.goto("https://docs.oracle.com/javase/8/docs/api/")

const iframe = await page.frameLocator("//a[normalize-space()='java.applet']")

await iframe.locatorlocator("//a[normalize-space()='java.applet']").click()

await page.pause()
})*/



const { test, expect } = require('@playwright/test');

test('Handle frames', async ({ page }) => {
  await page.goto("https://docs.oracle.com/javase/8/docs/api/");

  // Correctly get the frame by name
  const iframe = page.frame({ name: 'packageListFrame' });

  // Locate and click the link inside the frame
  await iframe.locator("//a[normalize-space()='java.applet']").click();

});
