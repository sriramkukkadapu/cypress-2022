/// <reference types="cypress" />

it('Login test', function(){
    
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");    
    cy.get("#submit").click();
    cy.wait(5000);
})

