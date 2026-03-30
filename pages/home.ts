import { expect, Locator, Page } from "@playwright/test";

export class Home{
    readonly header:Locator
    readonly countries:Locator
    readonly customerService:Locator
    readonly reset:Locator
    readonly currency:Locator
    readonly login:Locator
    readonly registration:Locator
    
    constructor(private readonly page:Page){
        this.header = page.getByText(/Portal de empleo y formación/i);
        this.countries=page.getByTitle(/países/i)
        this.customerService=page.getByTitle("Información y Atención al Cliente")
        this.reset=page.getByTitle(/reset/i)
        this.currency=page.locator('.cart')
        this.login=page.getByRole("button", {name:'Entrar'})
        this.registration=page.getByRole("button", {name:'Registrarse'})
    }

    async expectHeaderVisible(){
        await expect(this.header).toBeVisible()
    }
} 