var webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: (10000) });

class FindElementClass {
    constructor() {
        global.driver = driver;
    }
    /**
     * Navigate to URL
     * @param {string} theURL 
     */
    async go_to_url(theURL) {
        await driver.get(theURL);
    }
    /**
     * Find element by css selector
     * @param {string} css 
     */
    async findElementByCSSSelector(css) {
        await driver.findElement(By.css(css))
    }
    /**
     * Find Element by xpath
     * @param {string} xpath 
     */
    async findElementByXpath(xpath) {
        await driver.findElement(By.xpath(xpath))
    }
    /**
     * Find Element by Link text
     * @param {string} link 
     */
    async findElementByFullLinkText(link) {
        await driver.findElement(By.linkText(link))
    }
    /**
     * 
     * @param {string} className 
     */
    async findElementByClassName(className) {
        await driver.findElement(By.className(className))
    }
    /**
     * Find Element Name
     * @param {string} name 
     */
    async findElementByName(name) {
        await driver.findElement(By.name(name))
    }
    /**
     * Find Element By Tag Name
     * @param {string} tag 
     */
    async findElementByTag(tag) {
        await driver.findElement(By.tagName(tag))
    }
    /**
     * Find Element By ID
     * @param {string} id 
     */
    async findElementById(id) {
        await driver.findElement(By.id(id))
    }
}

module.exports = FindElementClass;