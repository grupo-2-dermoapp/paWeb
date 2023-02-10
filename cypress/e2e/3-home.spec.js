const expectedData = require("../fixtures/expect-data.json")

describe('Test de Inicio', () => {
    beforeEach(()=>{
        cy.visit('inicio')
        cy.wait(500)
    })
    it('Test link de casos medicos', () => {
        cy.get('ion-button[id="casos-medicos-button"]').click()
        cy.wait(1000)
        cy.url().should('eq', expectedData.page.casosMedicos)
    })
  })