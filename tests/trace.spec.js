const { test, expect } = require('@playwright/test');

test('trace demo', async ({ page }) => {

    await page.goto('/login');

    await expect(page).toHaveTitle('Wrong Title');

});