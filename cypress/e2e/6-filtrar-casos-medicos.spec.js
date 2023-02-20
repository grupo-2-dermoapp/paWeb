const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de filtrar casos medicos',()=>{

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

    it('Filtro con 0 resultados',()=>{
        cy.get('ion-input[formcontrolname="casosMedicosCtrl"]').type(mockData.password.long)
        cy.get('ion-grid').within(()=>{
            cy.get('ion-row').then(($rows)=>{
                expect($rows.length).to.equal(1)
            })
        });
    });

    it('Filtrar por primer paciente',()=>{
        let paciente0 ="";
        cy.get('.content-ltr > .ion-margin > :nth-child(2) > :nth-child(2)')
        .then(firstRow=>{
            console.log("Row",firstRow.text());
            paciente0= firstRow.text()
        })
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="casosMedicosCtrl"]').type(paciente0)
        });
        cy.get('ion-grid').within(()=>{
            cy.get('ion-row').then(($rows)=>{
                expect($rows.length).to.above(1)
            })
        });
    });

});