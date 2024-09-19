import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods'
import { LoginPageMethods } from '../pages/login-page/login-page.methods'
import { LoginPageData } from '../pages/login-page/login-page.data'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods';

const userCredentials = LoginPageData.credentials;

test('Lgin', async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    const productPageMethods = new ProductsPageMethods(page)

    await commonPageMethods.navigateToTheApplication()
    await loginPageMethods.insertUsername(userCredentials.usernames.standardUser)
    await loginPageMethods.insertPassword(userCredentials.password)
    await loginPageMethods.clickOnLoginButton()
    await productPageMethods.clickOnAddToCart('Sauce Labs Backpack')
    await productPageMethods.clickOnCartIcon()
    // await commonPageMethods.openMenu()
    await page.waitForTimeout(4000)
})