const { test, expect } = require('@playwright/test');

test('mock API response', async ({ page }) => {

    await page.route('**/api/users/2', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                data: {
                    id: 2,
                    first_name: 'Chaitali',
                    last_name: 'QA'
                }
            })
        });
    });

    await page.goto('https://reqres.in');

    const response = await page.evaluate(async () => {
        const res = await fetch('https://reqres.in/api/users/2');
        return await res.json();
    });

    expect(response.data.first_name).toBe('Chaitali');
});


// "What is network mocking in Playwright?"
// "Network mocking allows us to intercept API requests and provide a predefined response instead of calling the actual backend. 
// In Playwright, we can use page.route() to intercept the request and route.fulfill() to return a mock response."

// Remember this distinction:

// page.route() → intercepts page/browser network requests
// page.request.get() → sends an API request directly, so the page route does not intercept it

// For your interview:

// "page.route() is used to intercept and mock network requests made by the browser page. 
// For direct API testing, I use Playwright's API request context separately."

//page.evaluate() means:
//Run JavaScript inside the browser page.

// route() = Catch

// fulfill() = Give my response

// fetch() = Make request

// expect() = Verify


const { test } = require('@playwright/test');

test('modify request and continue', async ({ page }) => {

    await page.route('**/api/users/2', async route => {

        await route.continue({
            headers: {
                ...route.request().headers(),
                'x-test': 'playwright'
            }
        });

    });

    await page.goto('https://reqres.in');

    const response = await page.evaluate(async () => {
        const res = await fetch('https://reqres.in/api/users/2');
        return await res.json();
    });

    console.log(response);

});

// The important new line is:

// ...route.request().headers()
// It keeps the existing headers.

// Then:
// 'x-test': 'playwright'
// adds our new header.

// And:
// route.continue(...)
// sends the modified request to the real server.

// Method	Purpose
// page.route()	Intercept request
// route.fulfill()	Return a mock response
// route.continue()	Send request to real server
// route.request()	Access request details

//route.abort()
// It means:
// Block/cancel the request.

Example:

await page.route('**/*.png', async route => {
    await route.abort();
});

// This tells Playwright:

// PNG request
//     ↓
// Playwright catches it
//     ↓
// ❌ Abort request

// It's useful for testing how an application behaves when a resource/API request fails.