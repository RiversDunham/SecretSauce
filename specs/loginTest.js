import Login from '../pageObjects/login';
import HomePage from '../pageObjects/homePage';

describe('Test login', () => {
    it('should login with valid credentials', async() => {
        await Login.openURL();
        //negitive testing
        await Login.resetArray();
        await Login.enterInfo("InvalidPassword");
        await HomePage.negitiveAssertion();
        await Login.enterInfo("InvalidPassword");
        await HomePage.negitiveAssertion();
        await Login.enterInfo("InvalidPassword");
        await HomePage.negitiveAssertion();
        await Login.enterInfo("InvalidPassword");
        await HomePage.negitiveAssertion();
        await Login.enterInfo("InvalidPassword");
        await HomePage.negitiveAssertion();
        await Login.enterInfo("InvalidPassword");
        await HomePage.negitiveAssertion();
        //posititive testing
        await Login.resetArray();
        await Login.enterInfo("secret_sauce");
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("secret_sauce");
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("secret_sauce");
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("secret_sauce");
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("secret_sauce");
        await HomePage.positiveAssertion();
        await Login.openURL();
        await Login.enterInfo("secret_sauce");
        await HomePage.positiveAssertion();
        await Login.openURL();
    });
});