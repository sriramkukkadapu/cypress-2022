/// <reference types="cypress" />

it('', function(){
    
    cy.visit("https://www.google.co.in");
    cy.xpath("//input[@title='Search']", {timeout:50000}).type("cypress").type("{enter}");
})

