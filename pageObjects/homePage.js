import Page from './base.js';
import {$} from '@wdio/globals';
//sub page object for logging in

class HomePage extends Page {

    get appLogo() {
        return $('.app_logo');
    }

    async assertion() {
        await this.appLogo.isExisting()
    }
}

export default new HomePage()