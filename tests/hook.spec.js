import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before all tests');
});

test.beforeEach(async ({page}) => {
    await page.goto('/login');
});

test('check the username field', async ({page}) => {
    await expect(page.getByLabel('Username')).toBeVisible();
});

test('check the password field', async ({page}) => {
    await expect(page.getByLabel('Password')).toBeVisible();
});

test.afterEach(async ({page}) => {
    console.log('test completed');
});

test.afterAll(async () => {
    console.log('All tests completed');
});

//| Hook         | Runs                      |
// | ------------ | ------------------------- |
// | `beforeEach` | Before **each** test      |
// | `afterEach`  | After **each** test       |
// | `beforeAll`  | Once before **all** tests |
// | `afterAll`   | Once after **all** tests  |
