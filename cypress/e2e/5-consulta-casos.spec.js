const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de casos medicos',()=>{

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
    });

    it('Existe por lo menos 1 caso medico',()=>{
        cy.get('ion-grid').within(()=>{
            cy.get('ion-row').then(($rows)=>{
                expect($rows.length).to.above(1)
            })
        })
    });

    it('El botón seleccionar existe',()=>{
        let numberOfRows =0;
        cy.get('ion-grid').within(()=>{
            cy.get('ion-row').then(($rows)=>{
                numberOfRows=$rows.length
            })
        })
        for(let i =2;i<=numberOfRows;i++){
            cy.get(`.content-ltr > .ion-margin > :nth-child(${numberOfRows}) > :nth-child(1) > .md`).should('exist')
        }
    });

    it('Click en boton seleccionar',()=>{
        cy.get(`.content-ltr > .ion-margin > :nth-child(2) > :nth-child(8) > .md`).click()
        cy.wait(250);
        cy.url().should('contain', expectedData.page.detalleConsulta)
    });

});