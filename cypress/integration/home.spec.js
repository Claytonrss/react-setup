/// <reference types="cypress" />

describe('Page Home', () => {
  it('should be display json with users', () => {
    cy.visit('');
    cy.get('[data-cy=user-list]').contains('Lista de usuários');
  });
});
