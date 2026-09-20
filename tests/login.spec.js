import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test using POM', async({page}) => {
    const loginpage = new LoginPage(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginpage.login('tomsmith', 'SuperSecretPassword!');
    await loginpage.verifyLoginSuccess();
});