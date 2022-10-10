
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