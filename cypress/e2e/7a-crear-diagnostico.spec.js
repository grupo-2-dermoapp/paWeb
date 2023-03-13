const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de crear diagnostico',()=>{

    beforeEach(()=>{
        cy.visit('')
        cy.wait(250);
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(5000)
        cy.get('ion-button[id="casos-medicos-button"]').click()
        cy.wait(1000)
        cy.get(`.content-ltr > .ion-margin > :nth-child(2) > :nth-child(8) > .md`).click()
        cy.wait(2500);
    });

        it('Creacion diagnostico exitosa',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="nombreLesion"]').type(mockData.nombreLesion.good)
            cy.get('ion-textarea[formcontrolname="tratamiento"]').type(mockData.tratamiento.good)
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.diagnostico.good)
            cy.get('ion-button[id="crear-diagnostico-button"]').click()
        });

        cy.url().should('eq', expectedData.page.casosMedicos)

    });


});