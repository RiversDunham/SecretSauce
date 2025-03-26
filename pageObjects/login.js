import Page from './base.js';
import {$} from '@wdio/globals';
//sub page object for logging in

let baseUsernameArray = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"];

let usernameArray = baseUsernameArray

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

    async resetArray() {
        usernameArray = [...baseUsernameArray];
    }

    async enterInfo(password) {
        await this.inputUsername.setValue(usernameArray[0]);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
        usernameArray.shift();
    }

    openURL() {
        return super.openURL();
    }
}

export default new Login()