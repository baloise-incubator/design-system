import { BalFileUpload } from '../../.storybook/vue/generated/components'

describe('bal-tag.cy.ts', () => {
  let onBalBlurSpy: Cypress.Agent<sinon.SinonSpy>
  let onBalChangeSpy: Cypress.Agent<sinon.SinonSpy>
  let onBalClickSpy: Cypress.Agent<sinon.SinonSpy>
  let onBalFocusSpy: Cypress.Agent<sinon.SinonSpy>
  let onBalFilesAddedSpy: Cypress.Agent<sinon.SinonSpy>
  let onBalFilesRemovedSpy: Cypress.Agent<sinon.SinonSpy>
  let onBalRejectedFileSpy: Cypress.Agent<sinon.SinonSpy>

  beforeEach(() => {
    onBalBlurSpy = cy.spy().as('balBlur')
    onBalChangeSpy = cy.spy().as('balChange')
    onBalClickSpy = cy.spy().as('balClick')
    onBalFocusSpy = cy.spy().as('balFocus')
    onBalFilesAddedSpy = cy.spy().as('balFilesAdded')
    onBalFilesRemovedSpy = cy.spy().as('balFilesRemoved')
    onBalRejectedFileSpy = cy.spy().as('balRejectedFile')

    cy.mount(BalFileUpload, {
      props: {
        onBalBlur: onBalBlurSpy,
        onBalFocus: onBalFocusSpy,
        onBalChange: onBalChangeSpy,
        onBalClick: onBalClickSpy,
        onBalFilesAdded: onBalFilesAddedSpy,
        onBalFilesRemoved: onBalFilesRemovedSpy,
        onBalRejectedFileSpy: onBalRejectedFileSpy,
      },
    })
  })

  it('should increase a value and fire input, increase and change event', () => {
    cy.get('bal-file-upload').find('.file-input').click({ force: true })
    cy.get('@balFocus').should('have.been.calledOnce')
    cy.get('@balClick').should('have.been.calledOnce')
  })
})
