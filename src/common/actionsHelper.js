const FindElementClass = require('./findElementsHelper');
const ByLocate = Object.freeze({
    CSS:   Symbol("red"),
    XPATH:  Symbol("blue"),
    LINKTEXT: Symbol("green"),
    PARTIALTEXT: Symbol('pink'),
    ID: Symbol('yellow'),
    TAG: Symbol('black'),
    NAME: Symbol('brown'),
    CLASS: Symbol('green')
});

class ActionsHelper extends FindElementClass {
    async ByLocate() {
        return ByLocate;
    }
    async clickLink(link) {
        this.findElementByFullLinkText(link).click();
    }
    async closeBrowser() {
        await driver.quit();
    }
    /**
     * 
     * @param {string} locator 
     * @param {ByLocate} by 
     */
    async getTextFromElememnt(by, locator) {
        switch (by) {
            case ByLocate.CSS:
                return await this.findElementByCSSSelector(locator).textContent
            case ByLocate.ID:
                return await this.findElementById(locator).textContent
            case ByLocate.LINKTEXT:
                return await this.findElementByFullLinkText(locator).textContent
            case ByLocate.NAME:
                return await this.findElementByName(locator).textContent
            case ByLocate.TAG:
                return await this.findElementByTag(locator).textContent
            case ByLocate.CLASS:
                return await this.findElementByClassName(locator).textContent
            case ByLocate.XPATH:
                return await this.findElementByXpath(locator).textContent
            default:
                console.log('Not sure what happened.')
                break;
        }
    }

}
module.exports = new ActionsHelper();