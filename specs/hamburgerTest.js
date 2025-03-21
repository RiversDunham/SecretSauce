import Login from '../pageObjects/login';
import HomePage from '../pageObjects/homePage';

discribe('hamburger menu functionality', () => {
    it('should click hamburger menu elements', async() => {
        await Login.enterInfo("standard_user", "secret_sauce");
        
    });
});