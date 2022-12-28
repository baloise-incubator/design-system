import BalModalTest from './bal-modal.vue'

describe('bal-modal.cy.ts', () => {
  it('should fire close event', () => {
    const onBalModalDidDismissSpy = cy.spy().as('balModalDidDismiss')

    cy.mount(BalModalTest, {
      props: {
        onBalModalDidDismiss: onBalModalDidDismissSpy,
      },
    })

    // cy.get('bal-tag').find('bal-close').click()
    // cy.get('@balCloseClick').should('have.been.calledOnce')
  })
})
