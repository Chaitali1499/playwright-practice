const { test, expect } = require('@playwright/test');

const loginData = require('../test-data/loginData.json');

for (const data of loginData) {

    test(`login test - ${data.expected}`, async ({ page }) => {

        await page.goto('/login');

        await page.getByLabel('Username').fill(data.username);

        await page.getByLabel('Password').fill(data.password);

        await page.getByRole('button', { name: 'Login' }).click();

        if (data.expected === 'success') {
            await expect(page).toHaveURL(/secure/);
        } else {
            await expect(page.locator('#flash')).toBeVisible();
        }

    });

}

// "How do you manage test data in Playwright?"
// "I prefer keeping test data separate from test logic. 
// For example, I can store test data in JSON files and import it into the Playwright test. 
// This improves maintainability and allows the same test logic to run with multiple data sets."

// How are you implementing data-driven testing in Playwright?
// "I keep the test data separately in a JSON file and import it into the test. 
// I iterate through the data using a for...of loop and create a test for each data set. 
// This allows the same test logic to execute with different inputs and expected results."