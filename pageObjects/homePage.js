import Page from './base.js';
import {$} from '@wdio/globals';
//sub page object for logging in

class HomePage extends Page {

    get appLogo() {
        return $('.app_logo');
    }

    get errorPopup() {
        return $('[data-test="error"]');
    }
    get hamburgerButton() {
        return $('#react-burger-menu-btn')
    }
    get allItemsButton() {
        return $('#inventory_sidebar_link')
    }
    get aboutButton() {
        return $('#about_sidebar_link')
    }
    get logoutButton() {
        return $('#logout_sidebar_link')
    }
    get resetButton() {
        return $('#reset_sidebar_link')
    }

    async positiveAssertion() {
        await this.appLogo.isExisting()
    }

    async negitiveAssertion() {
        await this.errorPopup.isExisting()
    }
}

export default new HomePage()