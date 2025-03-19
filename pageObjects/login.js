import Page from './base.js';
import {$} from '@wdio/globals';
//sub page object for logging in

class Login extends Page {

    get inputUsername() {
        return $('#user-name');
    }
    
    get inputPassword() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    openURL() {
        return super.openURL();
    }
}

export default new Login()