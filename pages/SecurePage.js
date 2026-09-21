const { expect } = require('@playwright/test');

class SecurePage {

    constructor(page) {
        this.page = page;

        this.secureHeading = page.getByRole('heading', {
            name: 'Secure Area',
            exact: true
        });

        this.successMessage = page.locator('#flash');

        this.logoutLink = page.getByRole('link', {
            name: 'Logout'
        });
    }

    async verifySecurePageAfterLogin() {
        await this.verifySecurePage();
        await this.verifySuccessMessage();
    }

    async verifySecurePage() {
        await expect(this.secureHeading).toBeVisible();
    }

    async isLoggedIn() {
        return await this.secureHeading.isVisible();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage)
            .toContainText('You logged into a secure area!');
    }

    async logout() {
        await this.logoutLink.click();
    }

    async verifyLogout() {
        await expect(this.page).toHaveURL(/.*\/login/);

        await expect(
        this.page.getByRole('heading', {
            name: 'Login Page',
            exact: true
        })
        ).toBeVisible();
    }
}

module.exports = { SecurePage };

//"Playwright throws a strict mode violation when a locator resolves to multiple elements for an action or assertion that requires a single element. 
// I make the locator more specific, for example by using exact: true."