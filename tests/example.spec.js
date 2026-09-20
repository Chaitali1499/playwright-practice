import {test, expect} from '@playwright/test';

test('Verify Playwright website title', async({page}) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole('link', {name: 'Get started'}).click();

  await expect(page.getByText('Installation')).toBeVisible();
});



//Don't have example of parameterization in playwright, just written for interview purpose
//What is parameterization in Playwright?
//"Parameterization allows us to execute the same test logic with different sets of test data. 
//We can store multiple data sets in an array or external data source and run the test for each set."