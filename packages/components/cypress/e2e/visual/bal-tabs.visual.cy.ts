describe('bal-tabs', () => {
  before(() => cy.page('/components/bal-tabs/test/bal-tabs.visual.html'))

  it('basic component', () => {
    cy.platform('desktop')
    cy.getByTestId('basic').compareSnapshot('tabs-desktop', 0.0)
    // cy.getByTestId('basic').click()
    // cy.getByTestId('basic').compareSnapshot('accordion-desktop-open', 0.0)
    // cy.getByTestId('basic').click()
    // cy.getByTestId('basic').compareSnapshot('accordion-desktop-closed', 0.0)

    // cy.platform('tablet')
    // cy.getByTestId('basic').compareSnapshot('accordion-tablet', 0.0)
    // cy.getByTestId('basic').click()
    // cy.getByTestId('basic').compareSnapshot('accordion-tablet-open', 0.0)
    // cy.getByTestId('basic').click()
    // cy.getByTestId('basic').compareSnapshot('accordion-tablet-closed', 0.0)

    // cy.platform('mobile')
    // cy.getByTestId('basic').compareSnapshot('accordion-mobile', 0.0)
    // cy.getByTestId('basic').click()
    // cy.getByTestId('basic').compareSnapshot('accordion-mobile-open', 0.0)
    // cy.getByTestId('basic').click()
    // cy.getByTestId('basic').compareSnapshot('accordion-mobile-closed', 0.0)
  })

  it('component variants', () => cy.compareSnapshot('tabs-variants', 0.0))
})
