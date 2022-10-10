/// <reference types="cypress" />

import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage();

it('Login test', function(){
    
    loginPage.navigate("https://trytestingthis.netlify.app/");
    loginPage.enterUsername("test");
    loginPage.enterPassword("test");
    loginPage.clickLogin();
    // cy.wait(5000);
})

