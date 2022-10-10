# To install cypress
```npm install cypress``` <br>
```npm install cypress@<version>```

# To verify if all installation is fine or not
```npx cypress verify```

# To open cypress dashboard - To run tests
1) ```npx cypress open```
2) ```npx cypress run --record --key fd4a7926-6531-4252-a915-27e8250b74f6```
Key value get from dashboard

# Run only specific test
```npx cypress run --record --spec cypress/e2e/examples/Test1.cy.js   --key fd4a7926-6531-4252-a915-27e8250b74f6```

# We use below package to get xpath in cypress
```npm install cypress-xpath``` 
after installing import this in support/e2e.js
```javascript 
import 'cypress-xpath';
```

# To get autocomplete during the test script writing
```javascript
/// <reference types="Cypress" />
```
Add this line on top in the script file

# important methods
- Just pause the script execution - wait method
cy.wait(4000);
- To Enter Text in a input : 
cy.xpath("").type("cypress")
- To send enterkey into a input box: 
cy.xpath('').type("{enter}");
- Add inline timeout in script for a specific command: 
cy.xpath("<xpath>", {timeout:50000}).type("sample text");
- Find/Click on Element with Text
cy.contains("Videos").click();

# Trigger tests automatically on File change - watchForFilechanges
Add this line in support/e2e.js 
```javascript
watchForFileChanges: true
```

# Change Default timeout in config 
Add this line in support/e2e.js 
```javascript
defaultCommandTimeout: 10000
```

# Implciti Assertions
```javascript
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
```

# Explicit Assertions using - Expect
```javascript
    expect(true).to.be.true
    let name = 'Sriram';
    expect(name).to.be.equal('Sriram')
```


# Explicit Assertions using - Assert
```javascript
    assert.equal(4,4,'Not equal')            
    assert.strictEqual(4,'4','Not Strictly equal')   
```

# POM example
```javascript

/* ========== LoginPage class ========== */


export class LoginPage{
    
    username = "#uname";
    password = "#pwd";
    loginBtn = "//input[@value='Login']";

    navigate(url){
        cy.visit(url);
    }

    enterUsername(text){
        cy.get(this.username).type(text);
    }

    enterPassword(text){
        cy.get(this.password).type(text);    
    }

    clickLogin(){
        cy.xpath(this.loginBtn).click();
    }
}

/* ========= Test Class ========== */
/// <reference types="cypress" />

import {LoginPage} from "../pages/login_page"

const loginPage = new LoginPage();

it('Login test', function(){
    
    loginPage.navigate("https://trytestingthis.netlify.app/");
    loginPage.enterUsername("test");
    loginPage.enterPassword("test");
    loginPage.clickLogin();
})


```










