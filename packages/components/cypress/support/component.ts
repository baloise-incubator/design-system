// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { mount } from 'cypress/vue'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('disableAnimation', () => {
  cy.window().then(win => {
    ;(win as any).BaloiseDesignSystem.config.animated = false
  })
})

export const deepReady = async (el: any | undefined, full = false): Promise<void> => {
  const element = el as any
  if (element) {
    if (element.componentOnReady !== null && element.componentOnReady !== undefined) {
      const stencilEl = await element.componentOnReady()
      if (!full && stencilEl !== null && stencilEl !== undefined) {
        return
      }
    }
    await Promise.all(Array.from(element.children).map(child => deepReady(child, full)))
  }
}

Cypress.Commands.add(
  'waitForComponents',
  {
    prevSubject: 'element',
  },
  (subject, options?: Partial<Cypress.Loggable>) => {
    return cy
      .wrap(subject, options)
      .then(($el: any) => deepReady($el, true))
      .wait(100, { log: false })
      .wrap(subject, options)
  },
)

Cypress.Commands.add('spyEvent', { prevSubject: 'element' }, (subject, event: string, asEventName?: string) => {
  if (asEventName === undefined) {
    asEventName = event
  }
  Cypress.log({
    $el: subject as any,
    type: 'parent',
    displayName: 'spyEvent',
    message: `${event} as @${asEventName}`,
  })
  return cy.wrap(subject, { log: false }).then($el => $el.on(event, cy.spy().as(asEventName))) as any
})
