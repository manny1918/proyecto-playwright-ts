import { Page } from 'playwright'
import { LoginPageElements } from './login-page.elements'
import { Logger } from '../../support/logger'
import { expect } from '@playwright/test'
import { User } from './login-page.interfaces'

export class LoginPageMethods {
    private page: Page
    private loginPageElements: LoginPageElements

    constructor(page: Page) {
        this.page = page
        this.loginPageElements = new LoginPageElements(page)
    }

    async insertUsername(username: string){
        await Logger.logStep(`Insert "${username}" as username`)
        await this.loginPageElements.textboxes.username.fill(username)
    }

    async insertPassword(password: string){
        await Logger.logStep(`Insert "${password}" as password`)
        await this.loginPageElements.textboxes.password.fill(password)
    }

    async clickOnLoginButton(){
        await Logger.logStep('Click on Login button')
        await this.loginPageElements.buttons.login.click()
    }

    async verifyMessage(expectedText: string){
        const text = await this.loginPageElements.otherElements.errorMEssage.textContent()
        expect(text).toContain(expectedText)
    }

    async login(user: User){
        await this.insertUsername(user.username)
        await this.insertPassword(user.password)
        await this.clickOnLoginButton()
    }
}