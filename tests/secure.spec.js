const { test } = require('../fixtures/test-fixture');

test('Verify secure page after login @smoke', async ({ loggedIn, securePage }) => {

    await securePage.verifySecurePageAfterLogin();

});

test('Verify logout functionality @regression', async ({ loggedIn, securePage }) => {

    await securePage.verifySecurePageAfterLogin();

    await securePage.logout();
    await securePage.verifyLogout();
});

// “How do you run only smoke tests in Playwright?”, you can say:
// “I use tags in the test names and Playwright's --grep option.
// For example, npx playwright test --grep "@smoke" runs only the tests tagged with @smoke.”