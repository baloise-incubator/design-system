describe('bal-button', () => {
  it('performance', () => {
    cy.visit('/components/bal-button/test/bal-button.perf.html')
    cy.performance()
  })
})
