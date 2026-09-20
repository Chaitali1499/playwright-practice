const { test: base, expect } = require('@playwright/test');

const test = base.extend({

    myPage: async ({ page }, use) => {

        await page.goto('https://the-internet.herokuapp.com/login');

        await use(page);
    }

});

module.exports = { test, expect };