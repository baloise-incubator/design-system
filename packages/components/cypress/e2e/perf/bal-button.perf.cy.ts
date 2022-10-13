describe('bal-button', () => {
  before(() => cy.page('/components/bal-button/test/bal-button.perf.html').platform('desktop'))

  it('performance', () => {
    cy.performance()
  })
})
