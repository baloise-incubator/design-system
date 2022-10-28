describe('bal-app', () => {
  before(() => cy.page('/components/bal-app/test/bal-app.visual.html'))

  it('basic component', () => {
    cy.platform('desktop')
    cy.getByTestId('basic').compareSnapshot('app-basic-desktop', 0.1)
    cy.getByTestId('sticky-footer').compareSnapshot('app-sticky-footer-desktop', 0.1)

    cy.platform('tablet')
    cy.getByTestId('basic').compareSnapshot('app-basic-tablet', 0.1)
    cy.getByTestId('sticky-footer').compareSnapshot('app-sticky-footer-tablet', 0.1)

    cy.platform('mobile')
    cy.getByTestId('basic').compareSnapshot('app-basic-mobile', 0.1)
    cy.getByTestId('sticky-footer').compareSnapshot('app-sticky-footer-mobile', 0.1)
  })
})
