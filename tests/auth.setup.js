const { test: setup, expect } = require('@playwright/test');

const authFile = 'auth/auth.json';

setup('authenticate', async ({ page }) => {

    await page.goto('/login');

    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');

    await page.locator('button[type="submit"]').click();

    // Wait until login completes
    await expect(page).toHaveURL(/.*\/secure/);

    await expect(
        page.getByRole('heading', {
            name: 'Secure Area',
            exact: true
        })
    ).toBeVisible();

    // Save the authenticated session
    await page.context().storageState({
        path: authFile
    });

    console.log('Authentication state saved successfully.');
});


//“I use Playwright's storageState to save authenticated browser state and reuse it across tests. 
// I normally create an authentication setup that logs in once and saves the state. 
// Dependent tests can then start with the authenticated session instead of repeating the login.”