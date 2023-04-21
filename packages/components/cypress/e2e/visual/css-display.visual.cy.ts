describe('css-typography.visual', () => {
  beforeEach(() => cy.visit('/test/css-display.visual.html').platform('desktop').waitForDesignSystem())

  it('basic', () => {
    cy.platform('desktop')
    cy.getByTestId('hidden').compareSnapshot('css-display-hidden-desktop', 0.0)
    cy.getByTestId('invisible').compareSnapshot('css-display-invisible-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('hidden').compareSnapshot('css-display-hidden-tablet', 0.0)
    cy.getByTestId('invisible').compareSnapshot('css-display-invisible-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('hidden').compareSnapshot('css-display-hidden-mobile', 0.0)
    cy.getByTestId('invisible').compareSnapshot('css-display-invisible-mobile', 0.0)
  })
})
