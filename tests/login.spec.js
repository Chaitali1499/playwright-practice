const { test } = require('../fixtures/test-fixture');
const loginData = require('../test-data/loginData.json');

test('Login and verify secure page', async ({ page, loginPage, securePage }) => {

       await page.goto('/login');

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await securePage.verifySecurePage();
    await securePage.verifySuccessMessage();
});

test('Invalid login should show error message', async ({page, loginPage}) => {
    await page.goto('/login');

    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await loginPage.verifyLoginError();
});