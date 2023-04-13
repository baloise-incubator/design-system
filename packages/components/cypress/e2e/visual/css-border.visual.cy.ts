describe('css-typography.visual', () => {
  beforeEach(() => cy.visit('/test/css-border.visual.html').platform('desktop').waitForDesignSystem())

  it('basic', () => {
    cy.getByTestId('basic').compareSnapshot('css-border-basic', 0.0)
    cy.getByTestId('colors').compareSnapshot('css-border-colors', 0.0)
    cy.getByTestId('radius').compareSnapshot('css-border-radius', 0.0)
  })
})
