import { Page } from "@playwright/test";

export class LoginPage{
    readonly username;
    readonly password;
    readonly candidate;
    readonly btnLogin;

    constructor(private readonly page:Page){
     this.username=page.locator('input[name="email"]')
     this.password=page.locator('input[name="password"]')
     this.btnLogin= page.locator('[name="button"]')
     this.candidate = page.locator('input[name="empresa"][value="0"]')
    //  this.candidate= page.locator('[name="empresa"]').nth(0)
    }
    
}