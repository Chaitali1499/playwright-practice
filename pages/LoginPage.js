const { expect } = require('@playwright/test');
class LoginPage {

    async open() {
    await this.page.goto('/login');
    }

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
    await expect(this.flashMessage)
        .toContainText('You logged into a secure area!');
    }

   async verifyLoginError(expectedMessage) {
    await expect(this.flashMessage)
        .toContainText(expectedMessage);
}
}
module.exports = { LoginPage };