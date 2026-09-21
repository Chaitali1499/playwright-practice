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

    async verifySecurePage() {
        await expect(this.secureHeading).toBeVisible();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage)
            .toContainText('You logged into a secure area!');
    }

    async logout() {
        await this.logoutLink.click();
    }
}

module.exports = { SecurePage };

//"Playwright throws a strict mode violation when a locator resolves to multiple elements for an action or assertion that requires a single element. 
// I make the locator more specific, for example by using exact: true."