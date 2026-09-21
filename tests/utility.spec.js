const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const {
    generateRandomEmail,
    generateRandomName
} = require('../utils/helpers');

test('use utility data on actual page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/login');

    const name = generateRandomName();
    const email = generateRandomEmail();

    console.log('Name:', name);
    console.log('Email:', email);

    await loginPage.login(
        process.env.TEST_USERNAME,
        process.env.TEST_PASSWORD
    );

    await loginPage.verifyLoginSuccess();
});