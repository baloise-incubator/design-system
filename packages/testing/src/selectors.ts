// @deprecated standard ist data-testid instead of data-test-id
export const dataTestSelector = (testId: string): string => `[data-test-id="${testId}"]`

export const byTestId = (testId: string): string => `[data-testid="${testId}"]`

/**
 * Selectors
 */
export const selectors = {
  accordion: {
    trigger: byTestId('bal-accordion-button'),
    content: byTestId('bal-accordion-content'),
  },
  badge: {
    label: '.bal-badge__label',
    icon: '.bal-badge__icon',
  },
  button: {
    native: 'button',
    label: '.data-test-button-label',
  },
  carousel: {
    paginationPrevious: '.bal-pagination__nav__pagination-previous',
    paginationNext: '.bal-pagination__nav__pagination-next',
    carouselPrevious: '.bal-carousel__controls__button--right',
    carouselNext: '.bal-carousel__controls__button--left',
  },
  close: {
    button: '.bal-close__button',
    icon: '.bal-close__button__icon',
  },
  data: {
    editable: '.bal-data-value-btn',
  },
  footer: {
    language: '.bal-footer__inner__wrapper__header-container__language',
    socialMedia: '.bal-footer__inner__wrapper__links-container__social-media-links',
    legalLinks: '.bal-footer__inner__wrapper__links-container__legal-links',
  },
  heading: {
    native: '.bal-heading__text',
  },
  icon: {
    native: '.bal-icon__inner',
  },
  notification: {
    native: '.bal-notification__inner',
  },
  pagination: {
    next: '.bal-pagination__nav__pagination-next',
    previous: '.bal-pagination__nav__pagination-previous',
    pages: '.bal-pagination__nav__pagination-list > li > bal-button',
    button: '.bal-pagination__nav__pagination-list > li > bal-button > button',
  },
  tag: {
    text: '.bal-tag__label',
    close: '.bal-tag__close',
  },
  text: {
    native: '.bal-text__text',
  },
  checkbox: {
    input: 'input.data-test-checkbox-input',
    label: 'label.data-test-checkbox-label',
    text: 'label.data-test-checkbox-label > span',
  },
  datepicker: {
    input: 'input.data-test-input',
  },
  field: {
    hint: 'bal-field-hint > bal-hint',
  },
  fileUpload: {
    input: 'bal-file-upload-1',
    label: '.file-cta > .file-label',
  },
  inputSlider: {
    native: '.bal-input-slider__input__native',
  },
  inputStepper: {
    native: '.bal-input-stepper__input',
    decrease: byTestId('decrease'),
    text: '.bal-input-stepper__inner__text',
    increase: byTestId('increase'),
  },
  input: {
    native: 'input',
  },
  numberInput: {
    native: 'input',
  },
  radio: {
    input: 'input.data-test-radio-input',
    label: 'label.data-test-radio-label',
    text: 'label.data-test-radio-label > span',
  },
  select: {
    input: 'input.data-test-select-input',
    options: 'button.bal-select__option',
    chips: '.bal-select__control__selections > .bal-tag',
  },
  popover: {
    trigger: 'bal-popover-trigger',
    content: 'bal-popover-content',
  },
  textarea: {
    main: '> textarea',
  },
  modal: {
    main: 'div.modal',
  },
  tabs: {
    tabItems: 'li.data-test-tab-item',
    action: '.data-test-tabs-action',
  },
  toast: {
    main: '.bal-notices > .bal-toast',
  },
  snackbar: {
    main: '.bal-notices > .bal-snackbar',
  },
  hint: {
    trigger: '.data-test-hint-trigger',
    content: '.data-test-hint-content',
    close: '.data-test-hint-close',
  },
}
