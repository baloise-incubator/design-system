import { testOnPlatforms } from '../../../../testing/src'

describe('bal-tabs', () => {
  testOnPlatforms(['mobile', 'desktop'], () => {
    beforeEach(() => cy.page('/components/bal-tabs/test/bal-tabs.cy.html'))

    it('should have content', () => {
      cy.getByTestId('tabs').should('have.value', 'Tab C')
      cy.getByTestId('tabs').select('Tab B').should('have.value', 'Tab B')
    })

    it('should disable Tab D', () => {
      cy.getByTestId('tabs').balTabsFindItems().last().should('have.value', 'Tab D')
      cy.getByTestId('tabs').balTabsFindItems().last().should('be.disabled')
    })
  })
})
