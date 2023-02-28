import { log, wrapOptions } from '../helpers'
import { selectors } from '../../selectors'

Cypress.Commands.add(
  'balTabsFindItems',
  {
    prevSubject: true,
  },
  (subject, options) => {
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .find(selectors.tabs.item, o)
      .then($el => {
        log('balTabsFindItems', '', $el, options)
        return $el
      })
      .waitForComponents(o)
  },
)

Cypress.Commands.add(
  'balTabsFindLabel',
  {
    prevSubject: true,
  },
  (subject, options) => {
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .find(selectors.tabs.itemLabel, o)
      .then($el => {
        log('balTabsFindLabel', '', $el, options)
        return $el
      })
  },
)

Cypress.Commands.add(
  'balTabsShouldHaveItems',
  {
    prevSubject: true,
  },
  (subject, labels, dataKey = 'label', options) => {
    const o = wrapOptions(options)
    return cy
      .wrapComponent(subject, o)
      .balTabsFindItems(o)
      .should($o => {
        const dataItems = $o.map((_, el) => Cypress.$(el).attr(`data-${dataKey}`))
        expect(dataItems.get()).to.deep.eq(labels)
      })
  },
)
