describe('bal-button', () => {
  before(() => cy.page('/components/bal-button/test/bal-button.visual.html'))

  it('basic component', () => {
    cy.getByTestId('primary').compareSnapshot('button-primary', 0.0)
    cy.getByTestId('flat').compareSnapshot('button-flat', 0.0)
    cy.getByTestId('outlined').compareSnapshot('button-outlined', 0.0)
    cy.getByTestId('inverted').compareSnapshot('button-inverted', 0.0)

    cy.platform('desktop')
    cy.getByTestId('group').compareSnapshot('button-group-desktop', 0.0)
    cy.getByTestId('states').compareSnapshot('button-states-desktop', 0.0)
    cy.getByTestId('alert').compareSnapshot('button-alert-desktop', 0.0)
    cy.getByTestId('square').compareSnapshot('button-square-desktop', 0.0)

    cy.platform('mobile')
    cy.getByTestId('group').compareSnapshot('button-group-mobile', 0.0)
    cy.getByTestId('states').compareSnapshot('button-states-mobile', 0.0)
    cy.getByTestId('alert').compareSnapshot('button-alert-mobile', 0.0)
    cy.getByTestId('square').compareSnapshot('button-square-mobile', 0.0)
  })

  it('component variants', () => {
    cy.compareSnapshot('button-variants', 0.0)
  })
})
