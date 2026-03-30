import {test, expect} from "@playwright/test";
import { Home } from "../pages/home";

test.describe('home tests', ()=>{
    let home:Home
    test.beforeEach(async({page})=>{
        home=new Home(page)
        await page.goto('/')
    })

    test('check header', async()=>{
        await home.expectHeaderVisible()
    })

})