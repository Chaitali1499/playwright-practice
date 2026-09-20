// | Action             | Purpose                    |
// | ------------------ | -------------------------- |
// | `hover()`          | Move mouse over an element |
// | `click()`          | Single click               |
// | `dblclick()`       | Double click               |
// | `press()`          | Press a keyboard key       |
// | `keyboard.type()`  | Type using keyboard        |
// | `keyboard.press()` | Press a specific key       |

//hover

import { test, expect } from '@playwright/test';

test('mouse hover test', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/hovers');

    await page.locator('.figure').first().hover();

    await expect(page.getByText('name: user1')).toBeVisible();
});

//Double Click

import { test, expect } from '@playwright/test';

test('double click test', async ({page}) => {

    await page.goto('https://api.jquery.com/dblclick/');
    await page.locator('p').last().dblclick();
    await expect(page.locator('p').last()).toHaveCSS('background-color', 'rgb(255, 255, 0)');
});


//Press Enter - locator.press()

import { test, expect } from '@playwright/test';

test('press enter test', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!').press('Enter');
    await expect(page.locator('#flash-messages')).toContainText('You logged into a secure area!');

});

//|          | `locator.press()`         | `keyboard.press()`        |
// | -------- | ------------------------- | ------------------------- |
// | Works on | Specific element          | Current keyboard focus    |
// | Example  | `password.press('Enter')` | `keyboard.press('Enter')` |

//Press Enter - keyboard.press()

import { test, expect } from '@playwright/test';
test('press enter by keyboard test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.keyboard.press('Enter');
    await expect(page.locator('#flash-messages')).toContainText('You logged into a secure area!');
});


// Remember:

// fill() → directly enters text into a specific field
// keyboard.type() → types text like a real keyboard

import { test, expect } from '@playwright/test';
test('press enter by keyboard test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').click();
    await page.keyboard.type('tomsmith');
    
    await page.locator('#password').click();
    await page.keyboard.type('SuperSecretPassword!');

    await page.keyboard.press('Enter');
    await expect(page.locator('#flash-messages')).toContainText('You logged into a secure area!');

});

import { test, expect } from '@playwright/test';
test('press enter by keyboard test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').click();
    await page.keyboard.type('tomsmmmmith');
    await page.keyboard.press('Control+A');
    await page.keyboard.type('tomsmith');
    await expect(page.locator('#username')).toHaveValue('tomsmith');

});