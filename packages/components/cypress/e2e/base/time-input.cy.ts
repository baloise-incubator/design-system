describe('bal-time-input', () => {
  beforeEach(() => {
    cy.platform('desktop').page('/components/form/bal-time-input/test/bal-time-input.cy.html')
  })

  it('should have value and typeable', () => {
    cy.getByTestId('basic').find('input').should('have.value', '')
    cy.getByTestId('basic').find('input').type('1945').should('have.value', '1945')
    cy.getByTestId('basic').find('input').clear().should('not.have.value', '1945').should('have.value', '')
  })

  it('should have placeholder', () => {
    cy.getByTestId('basic').should('have.attr', 'placeholder', 'HH:MM')
    cy.getByTestId('basic').should('not.have.attr', 'placeholder', 'Enter a time')
  })

  it('should be disabled', () => {
    cy.getByTestId('basic').find('input').should('not.be.disabled')
    cy.getByTestId('disabled').find('input').should('be.disabled')
  })

  it('should be focusable', () => {
    cy.getByTestId('basic').find('input').focus().should('be.focused')
    cy.getByTestId('basic').find('input').blur().should('not.be.focused')
  })

  it('should be able to reset the form', () => {
    cy.getByTestId('reset').find('input').clear().type('23')
    cy.getByTestId('reset').find('input').should('have.value', '23')
    cy.getByTestId('button-reset').click()
    cy.getByTestId('reset').find('input').should('have.value', '1945')
  })
})
