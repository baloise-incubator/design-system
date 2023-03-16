describe('bal-input-slider', () => {
  beforeEach(() => {
    cy.visit('/components/form/bal-input-slider/test/bal-input-slider.cy.html')
    cy.waitForDesignSystem()
  })

  it('should have value', () => {
    cy.getByTestId('basic').should('have.value', '10')
    cy.getByTestId('basic').invoke('val', 50).should('have.value', '50')
  })

  it('should be disabled', () => {
    cy.getByTestId('basic').should('not.be.disabled')
    cy.getByTestId('disabled').should('be.disabled')
  })

  it('should be able to reset the form', () => {
    cy.getByTestId('reset').should('have.value', '2')
    cy.getByTestId('reset').invoke('val', 50).should('have.value', '50')
    cy.getByTestId('button-reset').click()
    cy.getByTestId('reset').should('have.value', '2')
  })
})
