import { Page } from "@playwright/test";
import { CheckoutOverviewPageElements } from "./checkout-overview-page.elements";
import { Logger } from "../../support/logger";

export class CheckoutOverviewPageMethods {
    private page: Page
    private checkoutOverviewPageElements: CheckoutOverviewPageElements

    constructor(page: Page) {
        this.page = page;
        this.checkoutOverviewPageElements = this.checkoutOverviewPageElements
    }

    async clickOnCancelButton() {
        await Logger.logStep('Click on Cancel button')
        await this.checkoutOverviewPageElements.buttons.cancel.click();
    }

    async clickOnFinishButton() {
        await Logger.logStep('Click on Finish button')
        await this.checkoutOverviewPageElements.buttons.finish.click();
    }
}