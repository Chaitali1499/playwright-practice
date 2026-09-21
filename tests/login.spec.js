const { test } = require('../fixtures/test-fixture');
const loginData = require('../test-data/loginData.json');

test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
});

test('Login and verify secure page', async ({ loginPage, securePage }) => {

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await securePage.verifySecurePage();
    await securePage.verifySuccessMessage();
});

for( const data of loginData.invalidLogins)

    test(`Invalid login- ${data.username}`, async({ loginPage}) => {
        
        await loginPage.login(
            data.username,
            data.password
        );

        await loginPage.verifyLoginError(data.expectedMessage);
});
