const AxeBuilder = require('@axe-core/webdriverio').default;
const { remote } = require('webdriverio');
var fs = require('fs');

describe('Accessibility Test', () => {
    it('should get the accessibility results from a page', async () => {
        const client = await remote({
            logLevel: 'error',
            capabilities: {
                browserName: 'chrome'
            }
        });

        await client.url('https://www.jeep.com');

        const builder = new AxeBuilder({ client }).withTags('wcag2a');
        try {
            const results = await builder.analyze();
            fs.writeFile('myjsonfile.json', JSON.stringify(results),
                function (err) {
                    if (err) throw err;
                    console.log('complete');
                });

        } catch (e) {
            console.error(e);
        }
        client.deleteSession();
    })
})