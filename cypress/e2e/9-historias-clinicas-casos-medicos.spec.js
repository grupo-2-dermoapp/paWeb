const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de filtrar historias clinicas',()=>{

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
        cy.get(':nth-child(5) > .item-has-start-slot').click()
        cy.wait(1000);

        cy.get(':nth-child(1) > .button').click()
        cy.wait(250)

        

    });

    it('La página debe existir',()=>{
        cy.get('app-historias-clinicas').should('exist')
        
    });

     it('Debe existir por lo menos un caso',()=>{
        cy.get('ion-button[id="caso-medico-1"]').should('exist')
    })

    it('El caso debe traer información',()=>{
        cy.get('ion-button[id="caso-medico-1"]').click()
        cy.wait(500)
        cy.get('app-detalle-consulta').should('exist')
        cy.url().should('contain', expectedData.page.detalleConsulta) 
    })

});