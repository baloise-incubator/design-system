import { byTestId } from './selectors.util'
export { byTestId, dataTestSelector } from './selectors.util'

/**
 * Selectors
 */
export const selectors = {
  accordion: {
    /**
     * The trigger button.
     */
    trigger: byTestId('bal-accordion-button'),
    /**
     * Content wrapper.
     */
    content: byTestId('bal-accordion-content'),
  },
  badge: {
    /**
     * Badge label.
     */
    label: byTestId('bal-badge-label'),
  },
  button: {
    /**
     * Native button element.
     */
    native: byTestId('bal-button'),
    /**
     * Button label.
     */
    label: byTestId('bal-button-label'),
  },
  carousel: {
    /**
     * Pagination left control.
     */
    paginationPrevious: byTestId('bal-pagination-controls-left'),
    /**
     * Pagination right control.
     */
    paginationNext: byTestId('bal-pagination-controls-right'),
    /**
     * Carousel small right control.
     */
    carouselSmallControlsPrevious: byTestId('bal-carousel-small-controls-left'),
    /**
     * Carousel small left control.
     */
    carouselSmallControlsNext: byTestId('bal-carousel-small-controls-right'),
    /**
     * Carousel large left control.
     */
    carouselLargeControlsPrevious: byTestId('bal-carousel-large-controls-left'),
    /**
     * Carousel large right control.
     */
    carouselLargeControlsNext: byTestId('bal-carousel-large-controls-right'),
  },
  close: {
    /**
     * The trigger button.
     */
    button: byTestId('bal-close'),
  },
  data: {
    /**
     * Editable button.
     */
    editable: byTestId('bal-data-value-button'),
  },
  footer: {
    /**
     * Language select element.
     */
    language: byTestId('bal-footer-language"'),
  },
  heading: {
    /**
     * Native h1 element.
     */
    native: byTestId('bal-heading'),
  },
  notification: {
    /**
     * Notification inner element.
     */
    native: byTestId('bal-notification'),
  },
  pagination: {
    /**
     * Pagination left control.
     */
    previous: byTestId('bal-pagination-controls-left'),
    /**
     * Pagination right control.
     */
    next: byTestId('bal-pagination-controls-right'),
    /**
     * Pagination ul list.
     */
    list: byTestId('bal-pagination-list'),
    /**
     * The number of the page.
     */
    pageNumber: byTestId('bal-pagination-page-number'),
    /**
     * bal-button of the number of the page..
     */
    pages: '.bal-pagination__nav__pagination-list > li > bal-button',
    /**
     * The native button of the number of the page.
     */
    button: '.bal-pagination__nav__pagination-list > li > bal-button > button',
  },
  tag: {
    /**
     * Tag label..
     */
    label: byTestId('bal-tag-label'),
    /**
     * Close button.
     */
    close: byTestId('bal-tag-close'),
  },
  text: {
    /**
     * Native p element.
     */
    native: byTestId('bal-text'),
  },
  checkbox: {
    /**
     * Native input element.
     */
    input: byTestId('bal-checkbox-input'),
    /**
     * Label element.
     */
    label: byTestId('bal-checkbox-label'),
    /**
     * Label span element.
     */
    text: byTestId('bal-checkbox-text'),
  },
  datepicker: {
    /**
     * Native input element.
     */
    input: byTestId('bal-datepicker-input'),
  },
  field: {
    /**
     * Hint element.
     */
    hint: byTestId('bal-field-hint'),
  },
  fileUpload: {
    /**
     * Native input element.
     */
    input: byTestId('bal-file-upload-input'),
    /**
     * Native span element.
     */
    label: byTestId('bal-file-upload-label'),
  },
  slider: {
    /**
     * Native input element.
     */
    native: byTestId('bal-input-slider'),
  },
  inputStepper: {
    /**
     * Decrease button.
     */
    decrease: byTestId('bal-input-stepper-decrease'),
    /**
     * Increase button.
     */
    increase: byTestId('bal-input-stepper-increase'),
    /**
     * Native input element.
     */
    native: byTestId('bal-input-stepper'),
    /**
     * Text element.
     */
    text: byTestId('bal-input-stepper-text'),
  },
  input: {
    /**
     * Native input element.
     */
    native: byTestId('bal-input'),
  },
  numberInput: {
    /**
     * Native input element.
     */
    native: byTestId('bal-number-input'),
  },
  radio: {
    /**
     * Native input element.
     */
    input: byTestId('bal-radio-input'),
    /**
     * Native label element.
     */
    label: byTestId('bal-radio-label'),
    /**
     * Native span element.
     */
    text: byTestId('bal-radio-text'),
  },
  select: {
    /**
     * Native input element.
     */
    input: byTestId('bal-select-input'),
    /**
     * Select option.
     */
    options: byTestId('bal-select-option'),
    /**
     * Description.
     */
    chips: byTestId('bal-select-chip'),
  },
  popover: {
    /**
     * Description.
     */
    trigger: 'bal-popover-trigger',
    /**
     * Popover content element.
     */
    content: byTestId('bal-popover-content'),
  },
  textarea: {
    /**
     * Native input element.
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
    /**
     * Description.
     */
    action: '.data-test-tabs-action',
  },
  toast: {
    /**
     * Description.
     */
    main: '.bal-notices > .bal-toast',
    /**
     * Description.
     */
    label: byTestId('bal-toast-label'),
    /**
     * Description.
     */
    close: byTestId('bal-toast-close'),
  },
  snackbar: {
    /**
     * Description.
     */
    main: '.bal-notices > .bal-snackbar',
    /**
     * Description.
     */
    heading: byTestId('bal-snackbar-heading'),
    /**
     * Description.
     */
    label: byTestId('bal-snackbar-label'),
    /**
     * Description.
     */
    close: byTestId('bal-snackbar-close'),
    /**
     * Description.
     */
    action: byTestId('bal-snackbar-action'),
  },
  hint: {
    /**
     * Description.
     */
    trigger: byTestId('bal-hint-trigger'),
    /**
     * Description.
     */
    content: byTestId('bal-hint-content'),
    /**
     * Description.
     */
    close: byTestId('bal-hint-close'),
  },
}
