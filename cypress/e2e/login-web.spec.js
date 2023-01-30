describe('Test de Login', () => {
    beforeEach(()=>{
        cy.visit('login')
        cy.wait(500)
    })
    it('Test link de registro', () => {
        cy.get('a[id="registro"]').click()
        cy.url().should('eq', 'http://localhost:8100/registro-medico')
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
            cy.get('ion-input[formcontrolname="email"]').type('test@test.com')

            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña muy corta', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('test@test.com')
            cy.get('ion-input[formcontrolname="password"]').type('12345')
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña muy larga', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('test@test.com')
            cy.get('ion-input[formcontrolname="password"]').type('1234567890123456789012345')
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test correo invalido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('test')
            cy.get('ion-input[formcontrolname="password"]').type('123123')
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test correo requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('123123')
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000)
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test login correcto', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('test@test.com')
            cy.get('ion-input[formcontrolname="password"]').type('123456')
            cy.get('ion-button[id="login-button"]').click()
        })
        cy.wait(1000)
        cy.url().should('eq', 'http://localhost:8100/inicio')
    });
  })