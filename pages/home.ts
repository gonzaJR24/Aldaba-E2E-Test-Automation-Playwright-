import { expect, Locator, Page } from "@playwright/test";

export class Home{
    readonly header:Locator
    readonly countries:Locator
    readonly customerService:Locator
    readonly currency:Locator
    readonly login:Locator
    readonly registration:Locator
    readonly theme:Locator
    
    constructor(private readonly page:Page){
        this.header = page.getByText(/Portal de empleo y formación/i)
        this.countries=page.getByTitle(/países/i)
        this.customerService=page.getByTitle("Información y Atención al Cliente")
        this.currency=page.locator('.fa-cart-shopping')
        this.login = page.locator('button:has-text("Entrar")').first()
        this.registration=page.getByRole("button", {name:'Registrarse'})
        this.theme=page.getByTitle('Modo oscuro')
    }

    async expectHeaderVisible(){
        await expect(this.header).toBeVisible()
    }

    async goToCurrency(){
        await this.currency.click()
    }
} 