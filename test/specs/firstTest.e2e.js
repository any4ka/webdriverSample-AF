const CypressPage = require('../pageobjects/cypressExample/cypress.page')

describe('First webdriver.io test', () => {
    it('check button text', async () => {
        CypressPage.openURL();
        await CypressPage.linkByFullText('Querying').click();
        expect(await CypressPage.button.getText()).toHaveText('Button')
    })
})