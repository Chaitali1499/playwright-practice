const { expect } = require('@playwright/test');
class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.flashMessage = page.locator('#flash');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
    await expect(this.page.locator('#flash'))
        .toContainText('You logged into a secure area!');
    }

    async verifyLoginError() {
    await expect(this.flashMessage)
        .toContainText('Your username is invalid!');
    }
}
module.exports = { LoginPage };