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

    async enterInfo(usernameArray, password) {
        for (let x = 0; x < usernameArray.length; x ++) {
            await this.inputUsername.setValue(usernameArray[x]);
            await this.inputPassword.setValue(password);
        }
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    openURL() {
        return super.openURL();
    }
}

export default new Login()