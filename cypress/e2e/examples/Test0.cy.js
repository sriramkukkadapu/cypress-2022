/// <reference types="Cypress" />

describe('my first test suite', function (){
    
    it('my first testcase', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); 
        cy.get('input[class=search-keyword]').type('ca');
        cy.wait(2000);
        cy.get("div[class='product']:visible").should('have.length',4);

        //parent child chaining
        cy.get(".products").find('.product').should('have.length',4);

        cy.get(".products").find('.product').eq(1).contains('Carrot');

        cy.get(':nth-child(3) > .product-action > button').click(); // adding capsicum

        //navigation of child elements dynamically search name
        cy.get(".products").find('.product').each(($ele, index, $list) => {
            
            var text=$ele.find('h4.product-name').text();
            if(text.includes('Carrot')){
                $ele.find('button').click()
            }
        })

        cy.xpath("//div[@class='product'][4]/h4").contains('Cashews');


        cy.xpath("//h4[1]").then(function ($ele){
            cy.log($ele.text());
        })


        cy.get(".brand").then(function (ele){
            cy.log(ele.text());
        })

        cy.get(".search-keyword").then(function (ele){
            cy.log(ele.text());
        })

        cy.get(".brand").should("have.text",'GREENKART');
    })

})