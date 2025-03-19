import Login from '../pageObjects/login';
import HomePage from '../pageObjects/homePage';

describe('My login application', () => {
    it('should login with valid credentials', async() => {
        await Login.openURL();
        await Login.login("standard_user", "secret_sauce");
        await HomePage.assertion();
    });
});