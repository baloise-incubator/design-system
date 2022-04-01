/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Finds the open modal and returns it.
     */
    balModalFindOpen(): Chainable<JQuery>
    /**
     * Assert if the modal is open.
     */
    balModalIsOpen(): Chainable<JQuery>
    /**
     * Assert if the modal is closed. Only works for modals,
     * which are not created with the modal service.
     */
    balModalIsClosed(): Chainable<JQuery>
    /**
     * Closes the selected modal.
     */
    balModalClose(): Chainable<JQuery>
  }
}
