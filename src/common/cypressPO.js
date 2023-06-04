const FindElementClass = require('./findElementsHelper');
var PropertiesReader = require('properties-reader');
//const locatorsCypress = PropertiesReader('./locators/cypressPO.properties')

class CypressPO extends FindElementClass {
    async driver() {
        return this.driver;
    }
    
    async closeBrowser() {
        await driver.quit();
    }

    // async getLocator(locator) {
    //     return locatorsCypress.get(locator);
    // }
}
module.exports = new CypressPO();