import {
  isAccordion,
  isButton,
  isNumberInput,
  isCardTitle,
  isCheckbox,
  isHeading,
  isInput,
  isRadio,
  isTag,
  isText,
  isTextarea,
  isModal,
  isDatepicker,
  selectors,
  wrapCommand,
  wrapOptions,
} from '../helpers'

Cypress.Commands.overwrite('contains', (originalFn, element: Cypress.Chainable<JQuery>, content, options) => {
  const command = wrapCommand('contains', element, content, $el => originalFn($el, content, wrapOptions(options)))

  if (isAccordion(element)) {
    return command(selectors.accordion.button)
  }

  if (isButton(element)) {
    return command(selectors.button.label)
  }

  if (isCheckbox(element)) {
    return command(selectors.checkbox.text)
  }

  if (isInput(element) || isNumberInput(element)) {
    return command(selectors.input.main)
  }

  if (isTextarea(element)) {
    return command(selectors.textarea.main)
  }

  if (isRadio(element)) {
    return command(selectors.radio.text)
  }

  if (isTag(element)) {
    return command(selectors.tag.text)
  }

  if (isHeading(element) || isCardTitle(element)) {
    return command(selectors.heading.content)
  }

  if (isText(element)) {
    return command('span')
  }

  if (isModal(element)) {
    return command('.modal-card')
  }

  if (isDatepicker(element)) {
    return command(selectors.datepicker.input)
  }

  return originalFn(element, content, options)
})
