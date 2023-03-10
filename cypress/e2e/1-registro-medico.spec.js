const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de Registro medico', () => {
    beforeEach(()=>{
        cy.visit('')
        cy.wait(250)
        cy.get('#registro').click()
        cy.wait(500)
    })
    it('Test formulario completo', () => {
        cy.get('ion-button[id="register-button"]').click()
        cy.wait(250)
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(7)
        });
    })
    it('Test nombre requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    // create test of hiden field
    it('Test nombre minimo 4 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.short)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test nombre maximo 60 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.long)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email invalido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.password.good)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test nacionalidad requerida', () => {
        cy.get('ion-select[formcontrolname="nacionalidad"]').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.wait(250);
        cy.get('form').within(() => {
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    });

    it('Test especialidad requerida', () => {
        cy.get('ion-select[formcontrolname="especialidad"]').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.get('form').within(() => {

        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    });

    it('Test contrase??a requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contrase??a minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.short)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contrase??a maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.long)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contrase??a requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contrase??a minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.short)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test confirmar contrase??a maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.long)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contrase??a igual a contrase??a', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.bad)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test archivo requerido requerido', ()=>{
        cy.get('ion-select[formcontrolname="nacionalidad"]').click()
        cy.wait(250);
        cy.get('#alert-input-1-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="especialidad"]').click()
        cy.wait(250);
        cy.get('#alert-input-2-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.wait(250);
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.good)
        });

        cy.wait(250);
        cy.get('ion-button[id="register-button"]').click()
        cy.wait(250)
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

   
  })