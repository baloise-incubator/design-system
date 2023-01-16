/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Disabled all animations for the Design System components.
     */
    disableAnimation(): Chainable<JQuery>
    /**
     * Waits until the component is fully loaded.
     */
    waitForComponents(options?: Partial<Loggable>): Chainable<JQuery>
    /**
     * Gets component and waits until it is ready
     */
    getComponent(selector: string, options?: Partial<Loggable>): Chainable<JQuery>
    /**
     * Wraps component and waits until it is ready.
     */
    wrapComponent(element: any, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery>
  }
}
