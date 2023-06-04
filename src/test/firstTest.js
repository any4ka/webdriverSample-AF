var assert = require("chai").assert;
const { after } = require("node:test");
const ah = require("../common/actionsHelper");


describe('First Selenium Tests', () => {
    it('run through the cypress test site', async () => {
        try {
            //Check Text
            await ah.go_to_url('https://example.cypress.io/');
            await ah.clickLink('Querying');
            actualText = await ah.getTextFromElememnt(ah.ByLocate.CSS, '#query-btn')
            assert.equal(actualText, 'Button')

        } catch (err) {

        } finally {
            await ah.closeBrowser();
        }
    })
})