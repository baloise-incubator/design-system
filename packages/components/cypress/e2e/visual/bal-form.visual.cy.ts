describe('bal-logo', () => {
  before(() => cy.page('/components/form/bal-form/test/bal-form.visual.html'))

  it('basic component', () => {
    cy.platform('desktop')
    cy.getByTestId('basic').compareSnapshot('form-basic-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('basic').compareSnapshot('form-basic-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('basic').compareSnapshot('form-basic-mobile', 0.0)
  })
})
