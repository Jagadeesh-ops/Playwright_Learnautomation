const {test, expect} = require("@playwright/test")

test("My first test", async({page})=>{
    expect(12).toBe(12)
})


test.skip("My second test", async({page})=>{
    expect(100).toBe(101)
})

test("My third test", async({page})=>{
  expect("jagadeesh").toContain("jagadeesh")
})


test("my fourth test", async({page})=>{
    expect("amma").toContain("amma")
    expect(true).toBeTruthy()
})

test("my fifth test", async({page})=>{
    expect(false).toBeFalsy()
})


test("my sixth test", async({page})=>{
    expect("jagadeesh S N".includes("jagadeesh")).toBeTruthy()
})
