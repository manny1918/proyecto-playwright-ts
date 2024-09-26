import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import { Logger } from '../support/logger'
import { standardUser } from '../pages/login-page/login-page.interfaces'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'

test.describe('Cart test cases', async () => {

    test('Add item to cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

        Logger.logPreCondition('User is logged in')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProductsPageIsDisplayed()

        await productsPageMethods.clickOnAddToCart(productName)
        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.verifyProductIsDisplayed(productName)
    })


    test('Remove item from cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

        Logger.logPreCondition('Item is in the cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.clickOnAddToCart(productName)

        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.clickOnRemoveButton(productName)
        await cartPageMethods.verifyProductIsNotDisplayed(productName)
    })
})