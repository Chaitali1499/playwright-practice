import { test, expect } from '@playwright/test';

test('Handle confirmation dialog', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});


test('Handle Ok Confirmation dialog', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.getByText('You successfully clicked an alert')).toBeVisible();

});


test('Handle confirm - OK', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
})


test('Handle prompt - enter text', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Chaitali');
    })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toHaveText('You entered: Chaitali');
})


test('Handle prompt - enter text', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toHaveText('You entered: null');
})