import { test } from '@playwright/test'
import { Logger } from '../support/logger'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods'
import { standardUser } from '../pages/login-page/login-page.interfaces'
import { CheckoutPageMethods } from '../pages/checkout-page/checkout-page.methods'
import { CheckoutOverviewPageMethods } from '../pages/checkout-overview-page/checkout-overview-page.methods'

test.describe.only('Checkout', () => {

    test('Checkout process', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const checkoutPageMethods = new CheckoutPageMethods(page)
        const checkoutOverviewPageMethods = new CheckoutOverviewPageMethods(page)
        const productName = 'Sauce Labs Onesie'

        await Logger.logPreCondition('User has items in cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.clickOnAddToCart(productName)

        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.clickOnCheckoutButton()
        await checkoutPageMethods.insertFirstName('algo')
        await checkoutPageMethods.insertLastName('last name')
        await checkoutPageMethods.insertPostalCode('345645')
        await checkoutPageMethods.clickOnContinueButton()
        await checkoutOverviewPageMethods.verifyCheckoutOverviewPageIsDisplayed()
    })
})