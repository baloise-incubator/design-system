import {
  selectors,
  isAccordion,
  isButton,
  isCheckbox,
  isDatepicker,
  wrapRoot,
  isRadio,
  isTag,
  hasClass,
  isHint,
} from '../helpers'

Cypress.Commands.overwrite('click', (originalFn, element: Cypress.Chainable<JQuery>, options) => {
  if (isAccordion(element)) {
    return wrapRoot(element, selectors.accordion.button, $el => originalFn($el, options))
  }

  if (isButton(element)) {
    return wrapRoot(element, selectors.button.main, $el => originalFn($el, options))
  }

  if (isCheckbox(element)) {
    return wrapRoot(element, selectors.checkbox.label, $el => originalFn($el, options))
  }

  if (isDatepicker(element)) {
    return wrapRoot(element, selectors.datepicker.input, $el => originalFn($el, options))
  }

  if (isRadio(element)) {
    return wrapRoot(element, selectors.radio.label, $el => originalFn($el, options))
  }

  if (isTag(element) && hasClass(element, 'sc-bal-select')) {
    return wrapRoot(element, '.delete', $el => originalFn($el, options))
  }

  if (isHint(element)) {
    return wrapRoot(element, selectors.hint.trigger, $el => originalFn($el, options))
  }

  return originalFn(element, options)
})
