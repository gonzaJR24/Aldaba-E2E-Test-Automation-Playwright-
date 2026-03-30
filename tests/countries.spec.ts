import test, { expect } from "@playwright/test"
import { Countries } from "../pages/countries"

test.describe('countries test suite', ()=>{

    let countries:Countries
    test.beforeEach(async({page})=>{
        countries=new Countries(page)
        await countries.goTo()
    })
    
    test('check title', async()=>{
        await countries.expectHeaderVisible()
        await expect(countries.header).toHaveText('Cambiar país')
    })
})