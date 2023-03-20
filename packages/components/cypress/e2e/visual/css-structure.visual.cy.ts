describe('css-structure.visual', () => {
  beforeEach(() => cy.page('/test/css-structure.visual.html').platform('desktop'))

  it('basic component', () => {
    cy.getByTestId('basic').compareSnapshot('css-structure-base', 0.0)
    cy.getByTestId('inheritance').compareSnapshot('css-structure-base', 0.0)
  })
})
