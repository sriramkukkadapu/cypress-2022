# To install cypress
npm install cypress
npm install cypress@<version>

# To verify if all installation is fine or not
npx cypress verify

# To open cypress dashboard - To run tests
1) npx cypress open
2) npx cypress run --record --key fd4a7926-6531-4252-a915-27e8250b74f6
Key value get from dashboard

# Run only specific test
npx cypress run --record --spec cypress/e2e/examples/Test1.cy.js   --key fd4a7926-6531-4252-a915-27e8250b74f6

# We use below package to get xpath in cypress
npm install cypress-xpath

# To get autocomplete during the test script writing
/// <reference types="Cypress" />
Add this line on top in the script file







