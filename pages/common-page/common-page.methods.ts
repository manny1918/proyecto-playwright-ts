export class CommonPageMethods{
    private page
    constructor(page){
        this.page = page
    }

    async navigateToTheApplication(){
        await this.page.goto('https://www.saucedemo.com/v1/index.html')
    }
}