import { byTestId } from './selectors.util'
export { byTestId, dataTestSelector } from './selectors.util'

/**
 * Selectors
 */
export const selectors = {
  accordion: {
    /**
     * Description.
     */
    trigger: byTestId('bal-accordion-button'),
    content: byTestId('bal-accordion-content'),
  },
  badge: {
    /**
     * Description.
     */
    label: byTestId('bal-badge-label'),
  },
  button: {
    /**
     * Description.
     */
    native: byTestId('bal-button'),
    label: byTestId('bal-button-label'),
  },
  carousel: {
    /**
     * Description.
     */
    paginationPrevious: byTestId('bal-pagination-controls-left'),
    paginationNext: byTestId('bal-pagination-controls-right'),
    carouselSmallControlsPrevious: byTestId('bal-carousel-small-controls-left'),
    carouselSmallControlsNext: byTestId('bal-carousel-small-controls-right'),
    carouselLargeControlsPrevious: byTestId('bal-carousel-large-controls-left'),
    carouselLargeControlsNext: byTestId('bal-carousel-large-controls-right'),
  },
  close: {
    /**
     * Description.
     */
    button: byTestId('bal-close'),
  },
  data: {
    /**
     * Description.
     */
    editable: byTestId('bal-data-value-button'),
  },
  footer: {
    /**
     * Description.
     */
    language: byTestId('bal-footer-language"'),
  },
  heading: {
    /**
     * Description.
     */
    native: byTestId('bal-heading'),
  },
  notification: {
    /**
     * Description.
     */
    native: byTestId('bal-notification'),
  },
  pagination: {
    /**
     * Description.
     */
    previous: byTestId('bal-pagination-controls-left'),
    next: byTestId('bal-pagination-controls-right'),
    list: byTestId('bal-pagination-list'),
    pageNumber: byTestId('bal-pagination-page-number'),
    pages: '.bal-pagination__nav__pagination-list > li > bal-button',
    button: '.bal-pagination__nav__pagination-list > li > bal-button > button',
  },
  tag: {
    /**
     * Description.
     */
    label: byTestId('bal-tag-label'),
    close: byTestId('bal-tag-close'),
  },
  text: {
    /**
     * Description.
     */
    native: byTestId('bal-text'),
  },
  checkbox: {
    /**
     * Description.
     */
    input: byTestId('bal-checkbox-input'),
    label: byTestId('bal-checkbox-label'),
    text: byTestId('bal-checkbox-text'),
  },
  datepicker: {
    /**
     * Description.
     */
    input: byTestId('bal-datepicker-input'),
  },
  field: {
    /**
     * Description.
     */
    hint: byTestId('bal-field-hint'),
  },
  fileUpload: {
    /**
     * Description.
     */
    input: byTestId('bal-file-upload-input'),
    label: byTestId('bal-file-upload-label'),
  },
  slider: {
    /**
     * Description.
     */
    native: byTestId('bal-input-slider'),
  },
  inputStepper: {
    /**
     * Description.
     */
    decrease: byTestId('bal-input-stepper-decrease'),
    increase: byTestId('bal-input-stepper-increase'),
    native: byTestId('bal-input-stepper'),
    text: byTestId('bal-input-stepper-text'),
  },
  input: {
    /**
     * Description.
     */
    native: byTestId('bal-input'),
  },
  numberInput: {
    /**
     * Description.
     */
    native: byTestId('bal-number-input'),
  },
  radio: {
    /**
     * Description.
     */
    input: byTestId('bal-radio-input'),
    label: byTestId('bal-radio-label'),
    text: byTestId('bal-radio-text'),
  },
  select: {
    /**
     * Description.
     */
    input: byTestId('bal-select-input'),
    options: byTestId('bal-select-option'),
    chips: byTestId('bal-select-chip'),
  },
  popover: {
    /**
     * Description.
     */
    trigger: 'bal-popover-trigger',
    content: byTestId('bal-popover-content'),
  },
  textarea: {
    /**
     * Description.
     */
    native: byTestId('bal-textarea-input'),
  },
  modal: {
    /**
     * Description.
     */
    main: 'div.modal',
  },
  tabs: {
    /**
     * Description.
     */
    tabItems: 'li.data-test-tab-item',
    action: '.data-test-tabs-action',
  },
  toast: {
    /**
     * Description.
     */
    main: '.bal-notices > .bal-toast',
    label: byTestId('bal-toast-label'),
    close: byTestId('bal-toast-close'),
  },
  snackbar: {
    /**
     * Description.
     */
    main: '.bal-notices > .bal-snackbar',
    heading: byTestId('bal-snackbar-heading'),
    label: byTestId('bal-snackbar-label'),
    close: byTestId('bal-snackbar-close'),
    action: byTestId('bal-snackbar-action'),
  },
  hint: {
    /**
     * Description.
     */
    trigger: byTestId('bal-hint-trigger'),
    content: byTestId('bal-hint-content'),
    close: byTestId('bal-hint-close'),
  },
}
