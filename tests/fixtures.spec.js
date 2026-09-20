//"What is a fixture in Playwright?"

//"A fixture is a feature in Playwright that provides the required test resources.
//For example, page is a built-in fixture that provides a browser page to the test."

//What is the difference between browser, context and page in Playwright?

//"Browser represents the browser instance, BrowserContext provides an isolated browser session, 
// and Page represents a browser tab within that context."

const { test, expect } = require('../fixtures/test-fixture');

test('check login page', async ({ myPage }) => {

    await expect(myPage).toHaveTitle('The Internet');

});

// Why do we use custom fixtures?

//"Custom fixtures help us centralize common test setup and make it reusable across multiple test cases. 
// For example, we can use a fixture for login, test data, or common page setup."
