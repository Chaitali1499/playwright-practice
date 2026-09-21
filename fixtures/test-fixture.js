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
    },

    loggedIn: async ({ loginPage }, use) => {

        await loginPage.open();

        await loginPage.login(
            process.env.TEST_USERNAME,
            process.env.TEST_PASSWORD
        );

        await use();
    }
});

module.exports = { test };

// loginPage → gives tests a LoginPage object.
// securePage → gives tests a SecurePage object.
// loggedIn → automatically performs login before a secure test.