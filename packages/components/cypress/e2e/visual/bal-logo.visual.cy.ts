describe('bal-logo', () => {
  before(() => cy.page('/components/bal-logo/test/bal-logo.visual.html'))

  it('basic component', () => {
    cy.platform('desktop')
    cy.getByTestId('basic').compareSnapshot('logo-basic-desktop', 0.0)
    cy.getByTestId('colors').compareSnapshot('logo-colors-desktop', 0.0)
    cy.getByTestId('colors-inverted').compareSnapshot('logo-colors-inverted-desktop', 0.0)
    cy.getByTestId('animated').compareSnapshot('logo-animated-desktop', 0.1)

    // cy.getByTestId('basic').compareSnapshot('logo-basic-tablet', 0.0)

    // cy.platform('mobile')
    // cy.getByTestId('basic').compareSnapshot('logo-basic-mobile', 0.0)
  })
})
