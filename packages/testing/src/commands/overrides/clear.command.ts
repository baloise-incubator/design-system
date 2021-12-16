import {
  selectors,
  isDatepicker,
  wrapRoot,
  isCheckbox,
  isInput,
  isRadio,
  isSelect,
  isSlider,
  isTextarea,
} from '../helpers'

Cypress.Commands.overwrite('clear', (originalFn, element: Cypress.Chainable<JQuery>, options) => {
  if (isCheckbox(element)) {
    return wrapRoot(element, selectors.checkbox.input, $el => originalFn($el, options))
  }

  if (isDatepicker(element)) {
    return wrapRoot(element, selectors.datepicker.input, $el => originalFn($el, options))
  }

  if (isInput(element)) {
    return wrapRoot(element, selectors.input.main, $el => originalFn($el, options))
  }

  if (isTextarea(element)) {
    return wrapRoot(element, selectors.textarea.main, $el => originalFn($el, options))
  }

  if (isSlider(element)) {
    return wrapRoot(element, selectors.slider.main, $el => originalFn($el, options))
  }

  if (isRadio(element)) {
    return wrapRoot(element, selectors.radio.input, $el => originalFn($el, options))
  }

  if (isSelect(element)) {
    return cy
      .wrap(element)
      .then($el => ($el as any)[0].clear())
      .wrap(element)
  }

  return originalFn(element, options)
})
