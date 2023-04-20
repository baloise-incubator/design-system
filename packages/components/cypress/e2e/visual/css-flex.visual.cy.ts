describe('css-typography.visual', () => {
  beforeEach(() => cy.visit('/test/css-background-colors.visual.html').platform('desktop').waitForDesignSystem())

  it('basic', () => {
    cy.getByTestId('flex-direction').compareSnapshot('flex-direction', 0.0)
    cy.getByTestId('flex-wrap').compareSnapshot('flex-wrap', 0.0)
    cy.getByTestId('justify-content').compareSnapshot('flex-justify-content', 0.0)
    cy.getByTestId('align-content').compareSnapshot('flex-align-content', 0.0)
    cy.getByTestId('align-items').compareSnapshot('flex-align-items', 0.0)
    cy.getByTestId('align-self').compareSnapshot('flex-align-self', 0.0)
    cy.getByTestId('flex-operators').compareSnapshot('flex-operators', 0.0)
    cy.getByTestId('flex-gap').compareSnapshot('flex-gap', 0.0)
  })
})
