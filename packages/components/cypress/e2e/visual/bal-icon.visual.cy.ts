describe('bal-icon', () => {
  beforeEach(() => cy.visit('/components/bal-icon/test/bal-icon.visual.html').waitForDesignSystem())

  it('basic component', () => {
    cy.platform('desktop')
    cy.getByTestId('basic').compareSnapshot('icon-desktop', 0.0)
  })

  it('component variants', () => {
    cy.platform('desktop')
    cy.compareSnapshot('icon-variants-desktop', 0.0)
  })
})
