describe('bal-list', () => {
  beforeEach(() => cy.visit('/components/bal-list/test/bal-list.visual.html').waitForDesignSystem())

  it('basic component', () => cy.getByTestId('basic').compareSnapshot('list-basic', 0.0))

  it('sizes variants', () => cy.getByTestId('sizes').compareSnapshot('list-sizes', 0.0))

  it('backgrounds variants', () => cy.getByTestId('backgrounds').compareSnapshot('list-backgrounds', 0.0))

  it('component variants', () => cy.compareSnapshot('list-variants', 0.0))
})
