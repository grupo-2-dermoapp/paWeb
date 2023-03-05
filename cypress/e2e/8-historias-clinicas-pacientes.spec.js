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
        cy.wait(1000)
    });

    it('Filtro con 0 resultados',()=>{
        cy.get('ion-input[formcontrolname="pacienteCrtl"]').type(mockData.password.long)
        cy.get('ion-list[id="lista-pacientes"]').should('exist')
        
    });

    it('Filtrar por primer paciente',()=>{
        let paciente0 ="";
        cy.wait(1000)
        cy.get('#lista-pacientes > :nth-child(1) > .sc-ion-label-md-h')
        .then(firstRow=>{
            console.log("Row",firstRow.text());
            paciente0= firstRow.text()
        })
        cy.wait(250)
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="pacienteCrtl"]').type(paciente0)
            cy.wait(250)
        })
        cy.get('ion-list[id="lista-pacientes"]').should('exist')

    });

     it('Ir a detalles del primer paciente',()=>{
        let paciente0 ="";
        cy.wait(1000)
        cy.get('#lista-pacientes > :nth-child(1) > .sc-ion-label-md-h')
        .then(firstRow=>{
            console.log("Row",firstRow.text());
            paciente0= firstRow.text()
        })
        cy.wait(250)
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="pacienteCrtl"]').type(paciente0)
            cy.wait(250)
        })
        
        cy.get(':nth-child(1) > .button').click()
        cy.wait(250)
        cy.url().should('contain', expectedData.page.consulta)  

    });

});