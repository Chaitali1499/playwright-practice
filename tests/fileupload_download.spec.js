//Upload File
import { test, expect } from '@playwright/test';
test ('Choose file to upload', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('input[type="file"]').setInputFiles('testfile.txt');
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toHaveText('testfile.txt');
});

//Download File
import { test, expect } from '@playwright/test';
test ('download the file', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const downloadPromise = page.waitForEvent('download');
    await page.locator('a[href="download/tmpsffj4osl.txt"]').click();
    const download = await downloadPromise;
    console.log(await download.suggestedFilename());
})