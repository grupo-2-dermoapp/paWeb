describe('Test de Registro medico', () => {
    beforeEach(()=>{
        cy.visit('registro-medico')
        cy.wait(250)
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
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test nombre minimo 4 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type('123')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test nombre maximo 60 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type('123456789012345678901234567890123456789012345678901234567890X')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email invalido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('123123')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
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

    it('Test contraseña requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('12345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('1234567890123456789012345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('12345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test confirmar contraseña maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('1234567890123456789012345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña igual a contraseña', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('123456')
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('123455')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
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
            cy.get('ion-input[formcontrolname="email"]').type('test@test.com')
            cy.get('ion-input[formcontrolname="nombre"]').type('Esto es un nombre de test')
            cy.get('ion-input[formcontrolname="password"]').type('123456')
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('123456')
        });

        cy.wait(250);
        cy.get('ion-button[id="register-button"]').click()
        cy.wait(250)
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test Registro medico correcto', ()=>{
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
            cy.get('ion-input[formcontrolname="nombre"]').type('Nombre test')
            cy.get('ion-input[formcontrolname="email"]').type('test@test.com')
            cy.get('ion-input[formcontrolname="password"]').type('123456')
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('123456')

            cy.get('input[id="file"]').invoke('show');
            cy.wait(250)
            cy.get('input[id="file"]').selectFile('FitzpatrickSkinType.pdf');

        });
        cy.wait(250)
        cy.get('.alert-button').click()
        cy.wait(250)
        cy.get('input[id="file"]').invoke('hide');
        cy.wait(250);
        cy.get('ion-button[id="register-button"]').click()
       
        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:8100/login')
    });
  })