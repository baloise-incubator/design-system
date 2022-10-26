describe('bal-spinner', () => {
  before(() => cy.page('/components/bal-spinner/test/bal-spinner.visual.html'))

  it('basic component', () => {
    cy.platform('desktop')
    cy.getByTestId('basic').compareSnapshot('spinner-basic-desktop', 0.1)
    // cy.getByTestId('colors').compareSnapshot('spinner-colors-desktop', 0.0)
    // cy.getByTestId('colors-inverted').compareSnapshot('spinner-colors-inverted-desktop', 0.0)
    // cy.getByTestId('deactivated').compareSnapshot('spinner-deactivated-desktop', 0.0)
    // cy.getByTestId('inverted').compareSnapshot('spinner-inverted-desktop', 0.0)
    // cy.getByTestId('small').compareSnapshot('spinner-small-desktop', 0.0)

    // cy.platform('tablet')
    // cy.getByTestId('basic').compareSnapshot('spinner-basic-tablet', 0.0)
    // cy.getByTestId('colors').compareSnapshot('spinner-colors-tablet', 0.0)
    // cy.getByTestId('colors-inverted').compareSnapshot('spinner-colors-inverted-tablet', 0.0)
    // cy.getByTestId('deactivated').compareSnapshot('spinner-deactivated-tablet', 0.0)
    // cy.getByTestId('inverted').compareSnapshot('spinner-inverted-tablet', 0.0)
    // cy.getByTestId('small').compareSnapshot('spinner-small-tablet', 0.0)

    // cy.platform('mobile')
    // cy.getByTestId('basic').compareSnapshot('spinner-basic-mobile', 0.0)
    // cy.getByTestId('colors').compareSnapshot('spinner-colors-mobile', 0.0)
    // cy.getByTestId('colors-inverted').compareSnapshot('spinner-colors-inverted-mobile', 0.0)
    // cy.getByTestId('deactivated').compareSnapshot('spinner-deactivated-mobile', 0.0)
    // cy.getByTestId('inverted').compareSnapshot('spinner-inverted-mobile', 0.0)
  })
})
