const{test, expect}=require("@playwright/test")
const { count } = require("console")

test("Select values from the dropdown",async({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    
    await page.locator("#state").selectOption({label:"Karnataka"})
     await page.waitForTimeout(5000)
    await page.locator("#state").selectOption({value:"Kerala"})

    await page.locator("#state").selectOption({index:5})
        await page.waitForTimeout(5000)

        /*const value= await page.locator("#state").textContent()

        console.log("All dropdown values: " + value)

        await expect(value.includes("Goa")).toBeTruthy()
        
        */

    let state = await page.$("#state")
    let allelements=await state.$$("option")
    let ddstatus=false
  for(let i=0;i<allelements.length;i++)
    {
        let element=await allelements[i]
        let value=await element.textContent()
        console.log(value)

   if(value.includes("Puducherry")) {
    ddstatus = true;
    break;
    }

        }      
       console.log("total dropdown values:",allelements.length)

expect(ddstatus).toBeTruthy();



await page.locator("#hobbies").selectOption(["Singing", "Swimming"])
await page.waitForTimeout(5000)

})