import { Page } from 'playwright'
import { CommonPageElements } from './common-page.elements'
import { Logger } from '../../support/logger'
export class CommonPageMethods {
    private page: Page
    private commonPageElements: CommonPageElements

    constructor(page: Page) {
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }

    async navigateToTheApplication() {
        await Logger.logStep('Navigate to the Application')
        await this.page.goto('https://www.saucedemo.com/v1/index.html')
    }

    async openMenu() {
        await Logger.logStep('Click on Open Menu icon')
        await this.commonPageElements.buttons.openMenu.click()
    }

    async clickOnAllItemsOption() {
        await Logger.logStep('Click on All Items option')
        await this.commonPageElements.letfMenu.allItems.click()
    }

    async clickOnAboutOption() {
        await Logger.logStep('Click on About option')
        await this.commonPageElements.letfMenu.about.click()
    }

    async clickOnLogOutOption() {
        await Logger.logStep('Click on Logout option')
        await this.commonPageElements.letfMenu.logout.click()
    }

    async clickOnResetAppStateOption() {
        await Logger.logStep('Click on Reset App State')
        await this.commonPageElements.letfMenu.resetAppState.click();
    }
}