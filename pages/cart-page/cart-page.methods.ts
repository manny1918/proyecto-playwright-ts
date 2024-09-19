import { Page } from 'playwright'
import { CartPageElements } from './cart-page.elements'

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements

    constructor(page: Page) {
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickOnContinueShoppingButton(){
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickOnCheckoutButton(){
        await this.cartPageElements.buttons.checkout.click();
    }

    async clickOnRemoveButton(productName: string){
        await this.cartPageElements.removeButton(productName).click()
    }
}