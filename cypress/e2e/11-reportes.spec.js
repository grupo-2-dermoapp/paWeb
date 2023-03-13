const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de reportes',()=>{

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
        cy.get(':nth-child(6) > .item-has-start-slot').click()
        cy.wait(1000);

    });

    it('La página debe existir',()=>{
        cy.get('app-reportes').should('exist')
        
    });

    it('Existe por lo menos 1 dato de reporte',()=>{
        cy.get('ion-grid').within(()=>{
            cy.get('ion-row').then(($rows)=>{
                expect($rows.length).to.above(1)
            })
        })
    });

});