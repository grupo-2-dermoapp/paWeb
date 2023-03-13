const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de Registro medico', () => {
    beforeEach(()=>{
        cy.visit('')
        cy.wait(250)
        cy.get('#registro').click()
        cy.wait(500)
    })
    
    it('Test Registro medico correcto', ()=>{
        cy.get('ion-select[formcontrolname="nacionalidad"]').click()
        cy.wait(250);
        cy.get('#alert-input-1-1 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="especialidad"]').click()
        cy.wait(250);
        cy.get('#alert-input-2-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.wait(250);
        
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.good)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.good)

            cy.get('input[id="file"]').invoke('show');
            cy.wait(250)
            cy.get('input[id="file"]').selectFile(mockData.file.registroMedico);
            cy.wait(1000)
        });
        cy.wait(250)
        cy.get('.alert-button').click()
        cy.wait(250)
        cy.get('input[id="file"]').invoke('hide');
        cy.wait(250);
        cy.get('ion-button[id="register-button"]').click()
       
        cy.wait(5000);
        cy.url().should('eq', expectedData.page.login)
    });
  })