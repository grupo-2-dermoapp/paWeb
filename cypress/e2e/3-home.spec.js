const expectedData = require("../fixtures/expect-data.json")
const mockData = require("../fixtures/mock-data.json")

describe('Test de Inicio', () => {
    beforeEach(()=>{
        cy.visit('')
        cy.wait(250);
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(5000)
    })
    it('Test link de casos medicos', () => {
        cy.get('ion-button[id="casos-medicos-button"]').click()
        cy.wait(1000)
        cy.url().should('eq', expectedData.page.casosMedicos)
    })
  })