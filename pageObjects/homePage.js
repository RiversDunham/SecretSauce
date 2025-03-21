import Page from './base.js';
import {$} from '@wdio/globals';
//sub page object for logging in

class HomePage extends Page {

    get appLogo() {
        return $('.app_logo');
    }

    async positiveAssertion() {
        await this.appLogo.isExisting()
    }

    async negitiveAssertion() {
        await this.errorPopup.isExisting()
    }
}

export default new HomePage()