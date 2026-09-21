const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { SecurePage } = require('../pages/SecurePage');

const test = base.extend({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    securePage: async ({ page }, use) => {
        const securePage = new SecurePage(page);
        await use(securePage);
    }
});

module.exports = { test };