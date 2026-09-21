const { test } = require ('../fixtures/test-fixture');

test ('Verify logout test', async ({page, loginpage, securePage}) => {
   
    await page.goto('/login');

    await loginpage.login(
        process.env.TEST_USERNAME,
        process.env.TEST_PASSWORD
    );

    await securePage.verifySecurePage();

    await securePage.logout();

    await page.waitForURL('**/login');

    console.log('User successfully logged out');
});