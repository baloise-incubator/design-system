import { areComponentsReady, log, wrapOptions } from '../helpers'

Cypress.Commands.add(
  'waitForComponents',
  {
    prevSubject: 'optional',
  },
  (subject, options?: Partial<Cypress.Loggable>) => {
    log('waitForComponents', '', subject, options)
    const o = wrapOptions(options)
    return cy
      .wrap(subject, o)
      .then(($el: any) => areComponentsReady($el))
      .then(() => {
        return new Promise(resolve => {
          if ('requestIdleCallback' in window) {
            ;(window as any).requestIdleCallback(resolve)
          } else {
            setTimeout(resolve, 32)
          }
        })
      })
      .wrap(subject, o) as any
  },
)

Cypress.Commands.add(
  'wrapComponent',
  {
    prevSubject: false,
  },
  (element, options?: Partial<Cypress.Loggable>) => {
    log('wrapComponent', '', element, options)
    const o = wrapOptions(options)
    return cy.wrap(element, o)
  },
)

Cypress.Commands.add(
  'getComponent',
  {
    prevSubject: false,
  },
  (selector, options?: Partial<Cypress.Loggable>) => {
    log('getComponent', selector, null, options)
    const o = wrapOptions(options)
    return cy.get(selector, o).waitForComponents(o)
  },
)

Cypress.Commands.add('disableAnimation', () => {
  cy.window({ log: false }).then(win => {
    ;(win as any).BaloiseDesignSystem.config.animated = false
  })
})

Cypress.Commands.add('waitForDesignSystem', () => {
  cy.document({ log: false }).then(document => document.fonts.ready)

  cy.get('bal-app,.bal-app', { log: false })
    .first({ log: false })
    .then($app => {
      Cypress.log({
        type: 'parent',
        $el: $app,
        displayName: 'bal-app',
        message: 'wait for DesignSystem to be ready',
      })
    })
    .waitForComponents({ log: false })
    .invoke({ log: false }, 'attr', 'ready')
    .should($el => {
      expect($el, 'if bal-app is ready').to.eq('')
    })
    .wait(100, { log: false })
    .disableAnimation()
    .then(() => {
      return new Promise(resolve => {
        if ('requestIdleCallback' in window) {
          ;(window as any).requestIdleCallback(resolve)
        } else {
          setTimeout(resolve, 32)
        }
      })
    })

  cy.get('bal-app,.bal-app', { log: false })
    .first({ log: false })
    .then($app => {
      Cypress.log({
        type: 'parent',
        $el: $app,
        displayName: 'bal-app',
        message: 'DesignSystem is ready 🚀',
      })
    })
})
