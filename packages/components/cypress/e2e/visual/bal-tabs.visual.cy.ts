describe('bal-tabs', () => {
  before(() => cy.page('/components/bal-tabs/test/bal-tabs.visual.html').getComponent('bal-doc-app').wait(400))

  it('basic component', () => {
    cy.platform('desktop')
    cy.getByTestId('basic').compareSnapshot('tabs-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('basic').compareSnapshot('tabs-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('basic').compareSnapshot('tabs-mobile', 0.0)
  })

  it('vertical', () => {
    cy.platform('desktop')
    cy.getByTestId('vertical').compareSnapshot('tabs-vertical-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('vertical').compareSnapshot('tabs-vertical-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('vertical').compareSnapshot('tabs-vertical-mobile', 0.0)
  })

  it('steps', () => {
    cy.platform('desktop')
    cy.getByTestId('steps').compareSnapshot('tabs-steps-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('steps').compareSnapshot('tabs-steps-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('steps').compareSnapshot('tabs-steps-mobile', 0.0)
  })

  it('navigation', () => {
    cy.platform('desktop')
    cy.getByTestId('navigation').compareSnapshot('tabs-navigation-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('navigation').compareSnapshot('tabs-navigation-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('navigation').compareSnapshot('tabs-navigation-mobile', 0.0)
  })

  it('meta navigation', () => {
    cy.platform('desktop')
    cy.getByTestId('meta-navigation').compareSnapshot('tabs-meta-navigation-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('meta-navigation').compareSnapshot('tabs-meta-navigation-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('meta-navigation').compareSnapshot('tabs-meta-navigation-mobile', 0.0)
  })

  it('basic with slider', () => {
    cy.platform('desktop')
    cy.getByTestId('basic-with-slider').compareSnapshot('tabs-basic-with-slider-desktop', 0.0)

    cy.platform('tablet')
    cy.getByTestId('basic-with-slider').compareSnapshot('tabs-basic-with-slider-tablet', 0.0)

    cy.platform('mobile')
    cy.getByTestId('basic-with-slider').compareSnapshot('tabs-basic-with-slider-mobile', 0.0)
  })

  // it('component variants', () => cy.compareSnapshot('tabs-variants', 0.0))

  // wait for component
  // cy.platform(platform).getComponent('bal-navigation').wait(200)

  // make a variable for wait value - animationTime
})
