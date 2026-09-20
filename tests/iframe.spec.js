import { test, expect } from "@playwright/test";
test ('iframe test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');

    await page.frameLocator('#mce_0_ifr').locator('body').fill('Hello Chaitali');

})



import { test, expect } from '@playwright/test';

test('iframe test assertion', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');

    await page.frameLocator('#mce_0_ifr')
        .locator('body')
        .fill('Hello Chaitali');

    await expect(
        page.frameLocator('#mce_0_ifr').locator('body')
    ).toHaveText('Hello Chaitali');
});