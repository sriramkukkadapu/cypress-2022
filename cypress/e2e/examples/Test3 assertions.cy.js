/// <reference types="cypress" />

it('Assertions', function(){
    
    cy.visit("https://example.cypress.io/");
    cy.contains("get").click();

    /* ====== Implicit Assertions ====== */
    cy.get("#query-btn")
        .should('contain','Button')
        .should('have.class','query-btn')
        .should('be.enabled')
        .should('be.visible');
    
    cy.get("#query-btn").invoke('attr','id')    
        .should('equal', 'query-btn')

    cy.get("#query-btn")
        .should('contain','Button')
        .and('have.class','query-btn')


    /* ====== Explicit Assertions - Expect ====== */        
    expect(true).to.be.true
    let name = 'Sriram';
    expect(name).to.be.equal('Sriram')

    /* ====== Explicit Assertions - Assert ====== */        
    assert.equal(4,4,'Not equal')            
    assert.strictEqual('4','4','Not Strictly equal')   

})

