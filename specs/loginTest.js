import Login from '../pageObjects/login';
import HomePage from '../pageObjects/homePage';

describe('My login application', () => {
    it('should login with valid credentials', async() => {
        await Login.openURL();
        let userList = ["standard_user"]
        //negitive testing
        for (x = 0; x < userList.length(); x ++) {
            await Login.login(userList[x], "InvalidPassword");
            await HomePage.negitiveAssertion();
        }
        //posititive testing
        for (x = 0; x < userList.length(); x ++) {
            await Login.login(userList[x], "secret_sauce");
            await Login.openURL();
        }
    });
});