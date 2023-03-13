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

    it('Cancelar selecion de diagnostico ',()=>{
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="cancelar-button"]').click()
        });
        cy.wait(500);
        cy.url().should('eq', expectedData.page.casosMedicos)
    });

    it('Aceptar caso medico',()=>{
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);
        cy.get('form[id="diagnostico-form"]').should('exist')

    });

    it('Formulario de diagnostico',()=>{

        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-button[id="crear-diagnostico-button"]').click()
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(3)
        });
    });

    it('Campo diagnostico requerido ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.command.backspace)
            cy.get('ion-textarea[formcontrolname="tratamiento"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo tratamiento requerido ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="tratamiento"]').type(mockData.command.backspace)
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo nombre lesion requerido ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="nombreLesion"]').type(mockData.command.backspace)
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo diagnostico muy corto ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.diagnostico.short)
            cy.get('ion-textarea[formcontrolname="tratamiento"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo diagnostico muy largo ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.diagnostico.long)
            cy.get('ion-textarea[formcontrolname="tratamiento"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo tratamiento muy corto ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="tratamiento"]').type(mockData.tratamiento.short)
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo tratamiento muy largo ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="tratamiento"]').type(mockData.tratamiento.long)
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo nombre lesion muy corto ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="nombreLesion"]').type(mockData.nombreLesion.short)
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Campo nombre lesion muy largo ',()=>{
        
        cy.get('form[id="consulta-form"]').within(() => {
            cy.get('ion-button[id="aceptar-caso-button"]').click()
        });
        cy.wait(500);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(500);

        cy.get('form[id="diagnostico-form"]').within(() => {
            cy.get('ion-textarea[formcontrolname="nombreLesion"]').type(mockData.nombreLesion.long)
            cy.get('ion-textarea[formcontrolname="diagnostico"]').type(mockData.command.backspace)
        });
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

});