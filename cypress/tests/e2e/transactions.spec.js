describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    cy.visit('http://localhost:3000')

    cy.get('[name="username"]').type('Heath93')
    cy.get('[name="password"]').type('s3cret') 
    cy.get('[data-test="signin-submit"]').click()
    cy.get('.css-1idn90j-MuiGrid-root')
    
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    cy.visit('http://localhost:3000')

    cy.get('[name="username"]').type('Dina20')
    cy.get('[name="password"]').type('s3cret') 
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="transaction-list-filter-date-range-button"] > .MuiChip-label').click()
    cy.get(':nth-child(13) > abbr').click()
    cy.get('.react-calendar__tile--active').click()
    cy.get('[data-test="empty-list-header"] > .MuiTypography-root')
  });
});