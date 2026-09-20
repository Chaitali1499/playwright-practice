import { test, expect } from '@playwright/test';
test('screenshot test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.screenshot({ path: 'login-page.png'});
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await page.screenshot({path: 'after-login.png'});
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

// | What you want                | Use                                |
// | ---------------------------- | ---------------------------------- |
// | CSS selector / ID            | `locator()`                        |
// | Element with title attribute | `getByTitle()`                     |
// | Check visible                | `toBeVisible()`                    |
// | Check exact/partial text     | `toHaveText()` / `toContainText()` |
