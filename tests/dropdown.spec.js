import { test, expect } from '@playwright/test';

test('Handle dropdown', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator('#dropdown').selectOption(1);
    //await page.locator('#dropdown').selectOption({ label: 'Option 1' });
    //await page.locator('#dropdown').selectOption({ value: '1' });

    await expect(page.locator('#dropdown')).toHaveValue('1');
});

// Checkbox ☑️

// <input type="checkbox" id="terms">
// <label for="terms">I agree to the terms</label>

// await page.getByLabel('I agree to the terms').check();
// await page.locator('#terms').check();

// await expect(page.getByLabel('I agree to the terms')).toBeChecked();

// | Element             | Playwright method |
// | ------------------- | ----------------- |
// | Dropdown `<select>` | `selectOption()`  |
// | Checkbox            | `check()`         |
// | Uncheck checkbox    | `uncheck()`       |
// | Button              | `click()`         |
// | Textbox             | `fill()`          |
// | Radio button        | `check()`         |


// Radio button 🔘

// <input type="radio" id="male" name="gender" value="male">
// <label for="male">Male</label>

// <input type="radio" id="female" name="gender" value="female">
// <label for="female">Female</label>

// await page.getByLabel('Female').check();
// await expect(page.getByLabel('Female')).toBeChecked();

