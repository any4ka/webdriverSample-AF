const Page = require('../example/page');

class CypressPage extends Page {
/**
 * Create getters for page objects on https://www.example.cypress.io
 */

get button(){
    return $('#query-btn')
}

openURL(){
    return super.openUrl('https://example.cypress.io')
}
}
module.exports = new CypressPage();