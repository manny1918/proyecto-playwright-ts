import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'

const crendentials = LoginPageData.credentials

test.describe('Login', () => {

    test('Login with valid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.insertUsername(crendentials.usernames.standardUser)
        await loginPageMethods.insertPassword(crendentials.password)
        await loginPageMethods.clickOnLoginButton()
        await productsPageMethods.verifyProductsPageIsDisplayed()
    })
})