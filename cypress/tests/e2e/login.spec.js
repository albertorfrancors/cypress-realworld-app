describe('Login com Sucesso', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('[name="username"]').type('Dina20')
    cy.get('[name="password"]').type('s3cret') 
    cy.get('[data-test="signin-submit"]').click()
})
  });

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      cy.visit('http://localhost:3000')
      cy.get('[name="username"]').type('Dino10')
      cy.get('[name="password"]').type('s3cretos')
      cy.get('[data-test="signin-submit"]').click()
      cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
    })
  })

  describe('Tentar registrar um novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com sucesso', () => {
      cy.visit('http://localhost:3000/register')  
      cy.get('[data-test="signup"]').click()
      cy.get('[name="firstName"]').type('Ribeiro')
      cy.get('[name="lastName"]').type('Francowski')
      cy.get('[name="username"]').type('Dinobrasil')
      cy.get('[name="password"]').type('Braza')
      cy.get('[name="confirmPassword"]').type('Braza')
      cy.get('[data-test="signup-submit"]').click()    
    })
  })

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir uma mensagem de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      cy.visit('http://localhost:3000/register')
      cy.get('[data-test="signup"]').click()
      cy.get('[name="firstName"]').type('Ribeiro')
      cy.get('[name="lastName"]').type('Francowski')
      cy.get('[name="username"]').type('Dinobrasil')
      cy.get('[name="password"]').type('Braza')
      cy.get('[name="confirmPassword"]').type('Br')
      cy.get('#confirmPassword-helper-text')
      
      
     
      
    })
  })