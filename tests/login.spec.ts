import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods'
import * as interfaces from '../pages/login-page/login-page.interfaces'

const credentials = LoginPageData.credentials

test.describe('Login', () => {

    test('Login with valid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.insertUsername(credentials.usernames.standardUser)
        await loginPageMethods.insertPassword(credentials.password)
        await loginPageMethods.clickOnLoginButton()
        await productsPageMethods.verifyProductsPageIsDisplayed()
    })

    test('Login with invalid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.insertUsername('anything')
        await loginPageMethods.insertPassword('anything')
        await loginPageMethods.clickOnLoginButton()
        await loginPageMethods.verifyMessage('Username and password do not match any user in this service')
    })

    test('Login with blank credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)

        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.clickOnLoginButton()
        await loginPageMethods.verifyMessage('Username is required')
    })
})