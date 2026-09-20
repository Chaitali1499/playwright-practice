export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
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
}