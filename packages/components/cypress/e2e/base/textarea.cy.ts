describe('bal-textarea', () => {
  beforeEach(() => {
    cy.platform('desktop').page('/components/form/bal-textarea/test/bal-textarea.cy.html')
  })

  it('should have value and typeable', () => {
    cy.getByTestId('basic').should('have.value', '')
    cy.getByTestId('basic').type('bubu').should('have.value', 'bubu')
    cy.getByTestId('basic').clear().should('not.have.value', 'bubu').should('have.value', '')
  })

  it('should have placeholder', () => {
    cy.getByTestId('basic').should('have.attr', 'placeholder', 'Enter your comment')
    cy.getByTestId('basic').should('not.have.attr', 'placeholder', 'Enter your lastname')
  })

  it('should be disabled', () => {
    cy.getByTestId('basic').should('not.be.disabled')
    cy.getByTestId('disabled').should('be.disabled')
  })

  it('should be focusable', () => {
    cy.getByTestId('basic').focus().should('be.focused')
    cy.getByTestId('basic').blur().should('not.be.focused')
  })

  it('should be able to reset the form', () => {
    cy.getByTestId('reset').clear().type('bubu')
    cy.getByTestId('reset').should('have.value', 'bubu')
    cy.getByTestId('button-reset').click()
    cy.getByTestId('reset').should('have.value', 'Tony Stark')
  })
})
