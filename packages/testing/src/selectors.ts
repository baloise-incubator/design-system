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
    label: byTestId('bal-badge-label'),
  },
  button: {
    native: byTestId('bal-button'),
    label: byTestId('bal-button-label'),
  },
  carousel: {
    paginationPrevious: byTestId('bal-pagination-controls-left'),
    paginationNext: byTestId('bal-pagination-controls-right'),
    carouselSmallControlsPrevious: byTestId('bal-carousel-small-controls-left'),
    carouselSmallControlsNext: byTestId('bal-carousel-small-controls-right'),
    carouselLargeControlsPrevious: byTestId('bal-carousel-large-controls-left'),
    carouselLargeControlsNext: byTestId('bal-carousel-large-controls-right'),
  },
  close: {
    button: byTestId('bal-close'),
  },
  data: {
    editable: byTestId('bal-data-value-button'),
  },
  footer: {
    language: byTestId('bal-footer-language"'),
  },
  heading: {
    native: byTestId('bal-heading'),
  },
  notification: {
    native: byTestId('bal-notification'),
  },
  pagination: {
    previous: byTestId('bal-pagination-controls-left'),
    next: byTestId('bal-pagination-controls-right'),
    list: byTestId('bal-pagination-list'),
    pageNumber: byTestId('bal-pagination-page-number'),
    pages: '.bal-pagination__nav__pagination-list > li > bal-button',
    button: '.bal-pagination__nav__pagination-list > li > bal-button > button',
  },
  tag: {
    label: byTestId('bal-tag-label'),
    close: byTestId('bal-tag-close'),
  },
  text: {
    native: byTestId('bal-text'),
  },
  checkbox: {
    input: byTestId('bal-checkbox-input'),
    label: byTestId('bal-checkbox-label'),
    text: byTestId('bal-checkbox-text'),
  },
  datepicker: {
    input: byTestId('bal-datepicker-input'),
  },
  field: {
    hint: byTestId('bal-field-hint'),
  },
  fileUpload: {
    input: byTestId('bal-file-upload-input'),
    label: byTestId('bal-file-upload-label'),
  },
  inputSlider: {
    native: byTestId('bal-input-slider'),
  },
  inputStepper: {
    decrease: byTestId('bal-input-stepper-decrease'),
    increase: byTestId('bal-input-stepper-increase'),
    native: byTestId('bal-input-stepper'),
    text: byTestId('bal-input-stepper-text'),
  },
  input: {
    native: byTestId('bal-input'),
  },
  numberInput: {
    native: byTestId('bal-number-input'),
  },
  radio: {
    input: byTestId('bal-radio-input'),
    label: byTestId('bal-radio-label'),
    text: byTestId('bal-radio-text'),
  },
  select: {
    input: byTestId('bal-select-input'),
    options: byTestId('bal-select-option'),
    chips: byTestId('bal-select-chip'),
  },
  popover: {
    trigger: 'bal-popover-trigger',
    content: byTestId('bal-popover-content'),
  },
  textarea: {
    native: byTestId('bal-textarea-input'),
  },
  modal: {
    // needed?
    main: 'div.modal',
  },
  tabs: {
    // needed?
    tabItems: 'li.data-test-tab-item',
    action: '.data-test-tabs-action',
  },
  toast: {
    label: byTestId('bal-toast-label'),
    close: byTestId('bal-toast-close'),
  },
  snackbar: {
    heading: byTestId('bal-snackbar-heading'),
    label: byTestId('bal-snackbar-label'),
    close: byTestId('bal-snackbar-close'),
    action: byTestId('bal-snackbar-action'),
  },
  hint: {
    trigger: byTestId('bal-hint-trigger'),
    content: byTestId('bal-hint-content'),
    close: byTestId('bal-hint-close'),
  },
}
