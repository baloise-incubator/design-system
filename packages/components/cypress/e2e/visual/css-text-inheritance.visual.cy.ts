describe('css - text inheritance', () => {
  beforeEach(() => cy.visit('/components/css-text-inheritance.visual.html').platform('desktop'))

  it('basic component', () => {
    cy.getByTestId('basic').compareSnapshot('css-text-inheritance', 0.0)
  })
})
