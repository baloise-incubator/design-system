import {
  isAccordion,
  isButton,
  isCheckbox,
  isDatepicker,
  isRadio,
  isTag,
  hasClass,
  isHint,
  wrapCommand,
  wrapOptions,
} from '../helpers'
import { selectors } from '../../selectors'

Cypress.Commands.overwrite<any, any>('click', (originalFn: any, element: Cypress.Chainable<JQuery>, options) => {
  const command = wrapCommand('click', element, '', $el => originalFn($el, wrapOptions(options)))

  if (isAccordion(element)) {
    return command(selectors.accordion.trigger)
  }

  if (isButton(element)) {
    return command(selectors.button.native)
  }

  if (isCheckbox(element)) {
    return command(selectors.checkbox.label)
  }

  if (isDatepicker(element)) {
    return command(selectors.datepicker.input)
  }

  if (isRadio(element)) {
    return command(selectors.radio.label)
  }

  if (isTag(element) && hasClass(element, 'sc-bal-select')) {
    return command('.delete')
  }

  if (isHint(element)) {
    return command(selectors.hint.trigger)
  }

  return originalFn(element, options)
})
