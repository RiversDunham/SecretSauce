import Login from '../pageObjects/login';
import HomePage from '../pageObjects/homePage';

describe('Test login', () => {
    it('should login with valid credentials', async() => {
        await Login.openURL();
        //negitive testing
        await Login.enterInfo("standard_user", "InvalidPassword");
        await Login.clickLogin();
        await HomePage.negitiveAssertion();
        await Login.enterInfo("locked_out_user", "InvalidPassword");
        await Login.clickLogin();
        await HomePage.negitiveAssertion();
        await Login.enterInfo("problem_user", "InvalidPassword");
        await Login.clickLogin();
        await HomePage.negitiveAssertion();
        await Login.enterInfo("performance_glitch_user", "InvalidPassword");
        await Login.clickLogin();
        await HomePage.negitiveAssertion();
        await Login.enterInfo("error_user", "InvalidPassword");
        await Login.clickLogin();
        await HomePage.negitiveAssertion();
        await Login.enterInfo("visual_user", "InvalidPassword");
        await Login.clickLogin();
        await HomePage.negitiveAssertion();
        //posititive testing
        await Login.enterInfo("standard_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("locked_out_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("problem_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("performance_glitch_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("error_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("visual_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.positiveAssertion();
        await Login.openURL();
    });
});