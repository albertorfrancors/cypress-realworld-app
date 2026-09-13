
  describe('Enviar dinheiro com saldo suficiente', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('[name="username"]').type('Dina20')
    cy.get('[name="password"]').type('s3cret') 
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Ted')
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click()
    cy.get('[name="amount"]').type('100')
    cy.get('.MuiInputBase-root > [name="description"]').type('Payment test')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
})
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('[name="username"]').type('Dina20')
    cy.get('[name="password"]').type('s3cret') 
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Lia')
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1').click()
    cy.get('[name="amount"]').type('20000')
    cy.get('.MuiInputBase-root > [name="description"]').type('Payment test')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root')
    
})
  });
  
    





