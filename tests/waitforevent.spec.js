import { test, expect } from "@playwright/test";

test('waitforevent test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const newPagePromise = page.waitForEvent('popup');

    await page.getByText('Click Here').click();

    const newPage = await newPagePromise;

    await expect(newPage).toHaveTitle('New Window');
});

// One important difference
// page.waitForEvent('popup') → specifically waits for a popup opened by that page.
// context.waitForEvent('page') → waits for a new page/tab in the browser context.

import { test, expect } from "@playwright/test";

test('waitforevent test for new page/tab', async ({page, context}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const pagePromise = context.waitForEvent('page');

    await page.getByText('Click Here').click();

    const newpagepromiseis = await pagePromise;

    await expect(newpagepromiseis).toHaveTitle('New Window');

})

// context → browser context
// page → current tab
// newPage → newly opened tab



import { test, expect } from "@playwright/test";

test('test code', async ({page, context}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const pagePromiseis = context.waitForEvent('page');

    await page.getByText('Click Here').click();

    const newpage = await pagePromiseis;

    await expect (newpage.getByRole('heading', {name: 'New Window'})).toBeVisible();
}) 


//simply wait no need to waitforevent

import { test, expect } from '@playwright/test';

test('test wait for Hello World', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.locator('#start').click();

    await expect(page.getByText('Hello World!')).toBeVisible();
});