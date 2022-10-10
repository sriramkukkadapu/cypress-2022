/// <reference types="cypress" />

it('', function(){
    
    cy.visit("https://www.google.co.in");
    cy.xpath("//input[@title='Search']").type("cypress").type("{enter}");
    cy.contains("Videos").click();
})

