const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de Login', () => {
    beforeEach(()=>{
        cy.visit('')
        cy.wait(500)
    })
   it('Test link de registro', () => {
        cy.get('a[id="registro"]').click()
        cy.url().should('eq', expectedData.page.registroMedico)
    })
    it('Test formulario completo', () => {
        cy.get('ion-button[id="login-button"]').click()
        cy.wait(1000)
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(2)
        });
    })
    it('Test contraseña requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good);

            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña muy corta', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.short)
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña muy larga', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.long)
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test correo invalido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.bad)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test correo requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000)
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
  })