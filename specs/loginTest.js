import Login from '../pageObjects/login';
import HomePage from '../pageObjects/homePage';
import homePage from '../pageObjects/homePage';

describe('Test login', () => {
    it('should login with valid credentials', async() => {
        await Login.openURL();
        let userList = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user", "error_user", "visual_user"]
        //negitive testing
        await Login.enterInfo(userList, "InvalidPassword");
        await Login.clickLogin();
        await HomePage.negitiveAssertion();
        //posititive testing
        await Login.enterInfo(userList, "secret_sauce");
        await Login.clickLogin();
        await homePage.positiveAssertion();
    });
});