const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de agenda',()=>{

    beforeEach(()=>{
        cy.visit('')
        cy.wait(250);
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-button[id="login-button"]').click()
        });

        cy.wait(5000)
        cy.get('.buttons-first-slot > .md').click()
        cy.wait(1000)
        cy.get(':nth-child(7) > .item-has-start-slot').click()
        cy.wait(1000);

    });

    it('La página debe existir',()=>{
        cy.get('app-agenda').should('exist')
        
    });

     it('Debe existir por lo menos un caso',()=>{
        cy.get('ion-card-header[id="agenda-0"]').should('exist')
    })

});