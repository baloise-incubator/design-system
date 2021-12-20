/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineSetup } from './vue-component-lib/utils';
import * as Lib from '@baloise/design-system-next-components';
import { defineComponent, PropType } from 'vue';


export const BalAccordion = /*@__PURE__*/ defineComponent({
  name: 'bal-accordion',
  props: {
    color: {
      type: String,
      default: 'primary',
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: false,
    },
    openLabel: {
      type: String,
      default: '',
      required: false,
    },
    openIcon: {
      type: String,
      default: 'plus',
      required: false,
    },
    closeLabel: {
      type: String,
      default: '',
      required: false,
    },
    closeIcon: {
      type: String,
      default: 'minus',
      required: false,
    },
    card: {
      type: Boolean,
      default: false,
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balCollapse: (value: boolean) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-accordion', ['balCollapse','update:modelValue'], {
    modelProp: 'is-active',
    modelUpdateEvent: 'balCollapsed'
  })
})

export const BalApp = /*@__PURE__*/ defineComponent({
  name: 'bal-app',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-app', [], undefined)
})

export const BalButton = /*@__PURE__*/ defineComponent({
  name: 'bal-button',
  props: {
    color: {
      type: String,
      default: 'primary',
      required: false,
    },
    type: {
      type: String,
      default: 'button',
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    size: {
      type: String,
      default: '',
      required: false,
    },
    href: {
      type: String,
      default: undefined,
      required: false,
    },
    target: {
      type: String,
      default: '_self',
      required: false,
    },
    rel: {
      type: String,
      default: undefined,
      required: false,
    },
    download: {
      type: String,
      default: undefined,
      required: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      required: false,
    },
    square: {
      type: Boolean,
      default: false,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
    outlined: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    topRounded: {
      type: Boolean,
      default: false,
      required: false,
    },
    bottomRounded: {
      type: Boolean,
      default: false,
      required: false,
    },
    icon: {
      type: String,
      default: '',
      required: false,
    },
    iconRight: {
      type: String,
      default: '',
      required: false,
    },
    name: {
      type: String,
      default: '',
      required: false,
    },
    value: {
      type: [Number, String],
      default: '',
      required: false,
    },
  },
  emits: {
    balNavigate: (value: MouseEvent) => true,
    balFocus: (value: void) => true,
    balBlur: (value: void) => true,
    balDidRender: (value: void) => true,
  },
  setup: defineSetup('bal-button', ['balNavigate','balFocus','balBlur','balDidRender'], undefined)
})

export const BalCard = /*@__PURE__*/ defineComponent({
  name: 'bal-card',
  props: {
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
    flatMobile: {
      type: Boolean,
      default: false,
      required: false,
    },
    flat: {
      type: Boolean,
      default: false,
      required: false,
    },
    square: {
      type: Boolean,
      default: false,
      required: false,
    },
    spacing: {
      type: String,
      default: '',
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    color: {
      type: String,
      default: '',
      required: false,
    },
    teaser: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-card', [], undefined)
})

export const BalCardActions = /*@__PURE__*/ defineComponent({
  name: 'bal-card-actions',
  props: {
    right: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-card-actions', [], undefined)
})

export const BalCardButton = /*@__PURE__*/ defineComponent({
  name: 'bal-card-button',
  props: {
    icon: {
      type: String,
      default: '',
      required: false,
    },
    type: {
      type: String,
      default: 'button',
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    href: {
      type: String,
      default: undefined,
      required: false,
    },
    target: {
      type: String,
      default: '_self',
      required: false,
    },
    iconRight: {
      type: String,
      default: '',
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-card-button', [], undefined)
})

export const BalCardContent = /*@__PURE__*/ defineComponent({
  name: 'bal-card-content',
  props: {
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-card-content', [], undefined)
})

export const BalCardHead = /*@__PURE__*/ defineComponent({
  name: 'bal-card-head',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-card-head', [], undefined)
})

export const BalCardHeading = /*@__PURE__*/ defineComponent({
  name: 'bal-card-heading',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-card-heading', [], undefined)
})

export const BalCardSteps = /*@__PURE__*/ defineComponent({
  name: 'bal-card-steps',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-card-steps', [], undefined)
})

export const BalCardSubtitle = /*@__PURE__*/ defineComponent({
  name: 'bal-card-subtitle',
  props: {
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-card-subtitle', [], undefined)
})

export const BalCardTitle = /*@__PURE__*/ defineComponent({
  name: 'bal-card-title',
  props: {
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-card-title', [], undefined)
})

export const BalCheckbox = /*@__PURE__*/ defineComponent({
  name: 'bal-checkbox',
  props: {
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    interface: {
      type: String,
      default: 'checkbox',
      required: false,
    },
    balTabindex: {
      type: Number,
      default: 0,
      required: false,
    },
    value: {
      type: String,
      default: 'on',
      required: false,
    },
    checked: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balChange: (value: boolean) => true,
    balFocus: (value: FocusEvent) => true,
    balBlur: (value: FocusEvent) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-checkbox', ['balChange','balFocus','balBlur','update:modelValue'], {
    modelProp: 'checked',
    modelUpdateEvent: 'balChange'
  })
})

export const BalData = /*@__PURE__*/ defineComponent({
  name: 'bal-data',
  props: {
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-data', [], undefined)
})

export const BalDataItem = /*@__PURE__*/ defineComponent({
  name: 'bal-data-item',
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-data-item', [], undefined)
})

export const BalDataLabel = /*@__PURE__*/ defineComponent({
  name: 'bal-data-label',
  props: {
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-data-label', [], undefined)
})

export const BalDataValue = /*@__PURE__*/ defineComponent({
  name: 'bal-data-value',
  props: {
    editable: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {
    balClick: (value: MouseEvent) => true,
    balFocus: (value: void) => true,
    balBlur: (value: void) => true,
  },
  setup: defineSetup('bal-data-value', ['balClick','balFocus','balBlur'], undefined)
})

export const BalDatepicker = /*@__PURE__*/ defineComponent({
  name: 'bal-datepicker',
  props: {
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
    balTabindex: {
      type: Number,
      default: 0,
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    placeholder: {
      type: String,
      default: undefined,
      required: false,
    },
    min: {
      type: String,
      default: undefined,
      required: false,
    },
    max: {
      type: String,
      default: undefined,
      required: false,
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
      required: false,
    },
    triggerIcon: {
      type: Boolean,
      default: false,
      required: false,
    },
    minYearProp: {
      type: Number,
      default: undefined,
      required: false,
    },
    maxYearProp: {
      type: Number,
      default: undefined,
      required: false,
    },
    debounce: {
      type: Number,
      default: 0,
      required: false,
    },
    defaultDate: {
      type: String,
      default: undefined,
      required: false,
    },
    value: {
      type: String,
      default: undefined,
      required: false,
    },
    allowedDates: {
      type: Function as PropType<((datestring: string) => boolean)>,
      default: undefined,
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balChange: (value: string | undefined | null) => true,
    balInput: (value: string) => true,
    balBlur: (value: FocusEvent) => true,
    balFocus: (value: FocusEvent) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-datepicker', ['balChange','balInput','balBlur','balFocus','update:modelValue'], {
    modelProp: 'value',
    modelUpdateEvent: 'balChange'
  })
})

export const BalDocApp = /*@__PURE__*/ defineComponent({
  name: 'bal-doc-app',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-doc-app', [], undefined)
})

export const BalDocColor = /*@__PURE__*/ defineComponent({
  name: 'bal-doc-color',
  props: {
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    background: {
      type: Boolean,
      default: false,
      required: false,
    },
    color: {
      type: String,
      default: 'primary',
      required: false,
    },
    subject: {
      type: String,
      default: 'Primary',
      required: false,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
    scssVars: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-doc-color', [], undefined)
})

export const BalDocDownload = /*@__PURE__*/ defineComponent({
  name: 'bal-doc-download',
  props: {
    link: {
      type: String,
      default: '',
      required: false,
    },
    iconLeft: {
      type: String,
      default: 'document',
      required: false,
    },
    iconRight: {
      type: String,
      default: 'download',
      required: false,
    },
    subject: {
      type: String,
      default: '',
      required: false,
    },
    subtitle: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-doc-download', [], undefined)
})

export const BalDocIcons = /*@__PURE__*/ defineComponent({
  name: 'bal-doc-icons',
  props: {
    icons: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-doc-icons', [], undefined)
})

export const BalDocImage = /*@__PURE__*/ defineComponent({
  name: 'bal-doc-image',
  props: {
    src: {
      type: String,
      default: '',
      required: false,
    },
    text: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-doc-image', [], undefined)
})

export const BalDropdown = /*@__PURE__*/ defineComponent({
  name: 'bal-dropdown',
  props: {
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
    fixedContentWidth: {
      type: Boolean,
      default: false,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balCollapse: (value: boolean) => true,
    balDropdownPrepare: (value: string) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-dropdown', ['balCollapse','balDropdownPrepare','update:modelValue'], {
    modelProp: 'is-active',
    modelUpdateEvent: 'balCollapsed'
  })
})

export const BalDropdownMenu = /*@__PURE__*/ defineComponent({
  name: 'bal-dropdown-menu',
  props: {
    scrollable: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-dropdown-menu', [], undefined)
})

export const BalDropdownTrigger = /*@__PURE__*/ defineComponent({
  name: 'bal-dropdown-trigger',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-dropdown-trigger', [], undefined)
})

export const BalField = /*@__PURE__*/ defineComponent({
  name: 'bal-field',
  props: {
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
    invalid: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-field', [], undefined)
})

export const BalFieldControl = /*@__PURE__*/ defineComponent({
  name: 'bal-field-control',
  props: {
    iconRight: {
      type: String,
      default: '',
      required: false,
    },
    iconLeft: {
      type: String,
      default: '',
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-field-control', [], undefined)
})

export const BalFieldHint = /*@__PURE__*/ defineComponent({
  name: 'bal-field-hint',
  props: {
    subject: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-field-hint', [], undefined)
})

export const BalFieldLabel = /*@__PURE__*/ defineComponent({
  name: 'bal-field-label',
  props: {
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-field-label', [], undefined)
})

export const BalFieldMessage = /*@__PURE__*/ defineComponent({
  name: 'bal-field-message',
  props: {
    color: {
      type: String,
      default: '',
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-field-message', [], undefined)
})

export const BalFileUpload = /*@__PURE__*/ defineComponent({
  name: 'bal-file-upload',
  props: {
    label: {
      type: String,
      default: 'Choose or drop a file...',
      required: false,
    },
    multiple: {
      type: Boolean,
      default: true,
      required: false,
    },
    hasFileList: {
      type: Boolean,
      default: true,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    accept: {
      type: String,
      default: '',
      required: false,
    },
    maxFiles: {
      type: Number,
      default: undefined,
      required: false,
    },
    maxFileSize: {
      type: Number,
      default: undefined,
      required: false,
    },
    maxBundleSize: {
      type: Number,
      default: undefined,
      required: false,
    },
    value: {
      type: Array as () => Array<File>,
      default: [],
      required: false,
    },
    subTitle: {
      type: Function as PropType<((file: File) => string)>,
      default: undefined,
      required: false,
    },
  },
  emits: {
    balChange: (value: File[]) => true,
    balRejectedFile: (value: Lib.FileUploadRejectedFile) => true,
  },
  setup: defineSetup('bal-file-upload', ['balChange','balRejectedFile'], undefined)
})

export const BalFooter = /*@__PURE__*/ defineComponent({
  name: 'bal-footer',
  props: {
    hasTrackLine: {
      type: Boolean,
      default: false,
      required: false,
    },
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
    hideLinks: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-footer', [], undefined)
})

export const BalHeading = /*@__PURE__*/ defineComponent({
  name: 'bal-heading',
  props: {
    level: {
      type: String,
      default: 'h1',
      required: false,
    },
    visualLevel: {
      type: String,
      default: undefined,
      required: false,
    },
    subtitle: {
      type: Boolean,
      default: false,
      required: false,
    },
    space: {
      type: String,
      default: 'all',
      required: false,
    },
    color: {
      type: String,
      default: '',
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-heading', [], undefined)
})

export const BalHint = /*@__PURE__*/ defineComponent({
  name: 'bal-hint',
  props: {
    closeLabel: {
      type: String,
      default: 'Close',
      required: false,
    },
    small: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-hint', [], undefined)
})

export const BalHintText = /*@__PURE__*/ defineComponent({
  name: 'bal-hint-text',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-hint-text', [], undefined)
})

export const BalHintTitle = /*@__PURE__*/ defineComponent({
  name: 'bal-hint-title',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-hint-title', [], undefined)
})

export const BalIcon = /*@__PURE__*/ defineComponent({
  name: 'bal-icon',
  props: {
    name: {
      type: String,
      default: '',
      required: false,
    },
    svg: {
      type: String,
      default: '',
      required: false,
    },
    size: {
      type: String,
      default: '',
      required: false,
    },
    color: {
      type: String,
      default: 'info',
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    rotate: {
      type: Boolean,
      default: false,
      required: false,
    },
    turn: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-icon', [], undefined)
})

export const BalInput = /*@__PURE__*/ defineComponent({
  name: 'bal-input',
  props: {
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    accept: {
      type: String,
      default: undefined,
      required: false,
    },
    autocapitalize: {
      type: String,
      default: 'off',
      required: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
      required: false,
    },
    autocorrect: {
      type: String,
      default: 'off',
      required: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
      required: false,
    },
    debounce: {
      type: Number,
      default: 0,
      required: false,
    },
    placeholder: {
      type: String,
      default: undefined,
      required: false,
    },
    max: {
      type: String,
      default: undefined,
      required: false,
    },
    maxLength: {
      type: Number,
      default: undefined,
      required: false,
    },
    min: {
      type: String,
      default: undefined,
      required: false,
    },
    minLength: {
      type: Number,
      default: undefined,
      required: false,
    },
    multiple: {
      type: Boolean,
      default: undefined,
      required: false,
    },
    pattern: {
      type: String,
      default: undefined,
      required: false,
    },
    balTabindex: {
      type: Number,
      default: 0,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    spellcheck: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    clickable: {
      type: Boolean,
      default: false,
      required: false,
    },
    numberInput: {
      type: Boolean,
      default: false,
      required: false,
    },
    decimal: {
      type: Number,
      default: undefined,
      required: false,
    },
    suffix: {
      type: String,
      default: undefined,
      required: false,
    },
    hasIconRight: {
      type: Boolean,
      default: false,
      required: false,
    },
    inputmode: {
      type: String,
      default: undefined,
      required: false,
    },
    value: {
      type: [Number, String],
      default: '',
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balInput: (value: string | number | null) => true,
    balBlur: (value: FocusEvent) => true,
    balClick: (value: MouseEvent) => true,
    balKeyPress: (value: KeyboardEvent) => true,
    balFocus: (value: FocusEvent) => true,
    balChange: (value: string | number | null) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-input', ['balInput','balBlur','balClick','balKeyPress','balFocus','balChange','update:modelValue'], {
    modelProp: 'value',
    modelUpdateEvent: 'balInput'
  })
})

export const BalList = /*@__PURE__*/ defineComponent({
  name: 'bal-list',
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-list', [], undefined)
})

export const BalListItem = /*@__PURE__*/ defineComponent({
  name: 'bal-list-item',
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    clickable: {
      type: Boolean,
      default: false,
      required: false,
    },
    selected: {
      type: Boolean,
      default: false,
      required: false,
    },
    href: {
      type: String,
      default: '',
      required: false,
    },
    target: {
      type: String,
      default: '_self',
      required: false,
    },
  },
  emits: {
    balNavigate: (value: MouseEvent) => true,
  },
  setup: defineSetup('bal-list-item', ['balNavigate'], undefined)
})

export const BalListItemContent = /*@__PURE__*/ defineComponent({
  name: 'bal-list-item-content',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-list-item-content', [], undefined)
})

export const BalListItemIcon = /*@__PURE__*/ defineComponent({
  name: 'bal-list-item-icon',
  props: {
    right: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-list-item-icon', [], undefined)
})

export const BalListItemSubtitle = /*@__PURE__*/ defineComponent({
  name: 'bal-list-item-subtitle',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-list-item-subtitle', [], undefined)
})

export const BalListItemTitle = /*@__PURE__*/ defineComponent({
  name: 'bal-list-item-title',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-list-item-title', [], undefined)
})

export const BalModal = /*@__PURE__*/ defineComponent({
  name: 'bal-modal',
  props: {
    overlayIndex: {
      type: Number,
      default: undefined,
      required: true,
    },
    delegate: {
      type: String,
      default: undefined,
      required: false,
    },
    dataTestId: {
      type: String,
      default: undefined,
      required: false,
    },
    modalWidth: {
      type: Number,
      default: 640,
      required: false,
    },
    hasBackdrop: {
      type: Boolean,
      default: true,
      required: false,
    },
    isClosable: {
      type: Boolean,
      default: true,
      required: false,
    },
    interface: {
      type: String,
      default: 'light',
      required: false,
    },
    component: {
      type: String,
      default: undefined,
      required: true,
    },
    componentProps: {
      type: String,
      default: undefined,
      required: false,
    },
    cssClass: {
      type: [String, Array as () => Array<string>],
      default: undefined,
      required: false,
    },
  },
  emits: {
    balModalDidPresent: (value: void) => true,
    balModalWillPresent: (value: void) => true,
    balModalWillDismiss: (value: Lib.OverlayEventDetail) => true,
    balModalDidDismiss: (value: Lib.OverlayEventDetail) => true,
  },
  setup: defineSetup('bal-modal', ['balModalDidPresent','balModalWillPresent','balModalWillDismiss','balModalDidDismiss'], undefined)
})

export const BalModalActions = /*@__PURE__*/ defineComponent({
  name: 'bal-modal-actions',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-modal-actions', [], undefined)
})

export const BalModalBody = /*@__PURE__*/ defineComponent({
  name: 'bal-modal-body',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-modal-body', [], undefined)
})

export const BalModalFooter = /*@__PURE__*/ defineComponent({
  name: 'bal-modal-footer',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-modal-footer', [], undefined)
})

export const BalModalHeader = /*@__PURE__*/ defineComponent({
  name: 'bal-modal-header',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-modal-header', [], undefined)
})

export const BalNavbar = /*@__PURE__*/ defineComponent({
  name: 'bal-navbar',
  props: {
    light: {
      type: Boolean,
      default: false,
      required: false,
    },
    noBurger: {
      type: Boolean,
      default: false,
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-navbar', [], undefined)
})

export const BalNavbarBrand = /*@__PURE__*/ defineComponent({
  name: 'bal-navbar-brand',
  props: {
    href: {
      type: String,
      default: '/',
      required: false,
    },
  },
  emits: {
    balNavigate: (value: MouseEvent) => true,
  },
  setup: defineSetup('bal-navbar-brand', ['balNavigate'], undefined)
})

export const BalNavbarMenu = /*@__PURE__*/ defineComponent({
  name: 'bal-navbar-menu',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-navbar-menu', [], undefined)
})

export const BalNavbarMenuEnd = /*@__PURE__*/ defineComponent({
  name: 'bal-navbar-menu-end',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-navbar-menu-end', [], undefined)
})

export const BalNavbarMenuStart = /*@__PURE__*/ defineComponent({
  name: 'bal-navbar-menu-start',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-navbar-menu-start', [], undefined)
})

export const BalNotices = /*@__PURE__*/ defineComponent({
  name: 'bal-notices',
  props: {
    interface: {
      type: String,
      default: 'toast',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-notices', [], undefined)
})

export const BalNotification = /*@__PURE__*/ defineComponent({
  name: 'bal-notification',
  props: {
    color: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-notification', [], undefined)
})

export const BalPagination = /*@__PURE__*/ defineComponent({
  name: 'bal-pagination',
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    value: {
      type: Number,
      default: 1,
      required: false,
    },
    totalPages: {
      type: Number,
      default: 1,
      required: false,
    },
    pageRange: {
      type: Number,
      default: 2,
      required: false,
    },
  },
  emits: {
    balChange: (value: number) => true,
  },
  setup: defineSetup('bal-pagination', ['balChange'], undefined)
})

export const BalRadio = /*@__PURE__*/ defineComponent({
  name: 'bal-radio',
  props: {
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    interface: {
      type: String,
      default: 'radio',
      required: false,
    },
    balTabindex: {
      type: Number,
      default: 0,
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    isEmpty: {
      type: Boolean,
      default: false,
      required: false,
    },
    checked: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {
    balFocus: (value: FocusEvent) => true,
    balBlur: (value: FocusEvent) => true,
  },
  setup: defineSetup('bal-radio', ['balFocus','balBlur'], undefined)
})

export const BalRadioGroup = /*@__PURE__*/ defineComponent({
  name: 'bal-radio-group',
  props: {
    interface: {
      type: String,
      default: 'radio',
      required: false,
    },
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: undefined,
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balChange: (value: string) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-radio-group', ['balChange','update:modelValue'], {
    modelProp: 'value',
    modelUpdateEvent: 'balChange'
  })
})

export const BalSelect = /*@__PURE__*/ defineComponent({
  name: 'bal-select',
  props: {
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    balTabindex: {
      type: Number,
      default: 0,
      required: false,
    },
    multiple: {
      type: Boolean,
      default: false,
      required: false,
    },
    noDataLabel: {
      type: String,
      default: undefined,
      required: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
      required: false,
    },
    hasMovement: {
      type: Boolean,
      default: false,
      required: false,
    },
    typeahead: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    placeholder: {
      type: String,
      default: undefined,
      required: false,
    },
    scrollable: {
      type: Number,
      default: 250,
      required: false,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    value: {
      type: [String, Array as () => Array<string>],
      default: [],
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balChange: (value: string | string[] | undefined) => true,
    balClick: (value: MouseEvent) => true,
    balInput: (value: string) => true,
    balBlur: (value: FocusEvent) => true,
    balFocus: (value: FocusEvent) => true,
    balCancel: (value: KeyboardEvent) => true,
    balKeyPress: (value: KeyboardEvent) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-select', ['balChange','balClick','balInput','balBlur','balFocus','balCancel','balKeyPress','update:modelValue'], {
    modelProp: 'value',
    modelUpdateEvent: 'balChange'
  })
})

export const BalSelectOption = /*@__PURE__*/ defineComponent({
  name: 'bal-select-option',
  props: {
    label: {
      type: String,
      default: undefined,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    value: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-select-option', [], undefined)
})

export const BalSheet = /*@__PURE__*/ defineComponent({
  name: 'bal-sheet',
  props: {

  },
  emits: {

  },
  setup: defineSetup('bal-sheet', [], undefined)
})

export const BalSlider = /*@__PURE__*/ defineComponent({
  name: 'bal-slider',
  props: {
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    step: {
      type: Number,
      default: 0,
      required: false,
    },
    min: {
      type: Number,
      default: 0,
      required: false,
    },
    max: {
      type: Number,
      default: 100,
      required: false,
    },
    balTabindex: {
      type: Number,
      default: 0,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    hasTicks: {
      type: Boolean,
      default: false,
      required: false,
    },
    debounce: {
      type: Number,
      default: 0,
      required: false,
    },
    value: {
      type: [Number, String],
      default: '',
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balInput: (value: string | number | null) => true,
    balBlur: (value: FocusEvent) => true,
    balClick: (value: MouseEvent) => true,
    balKeyPress: (value: KeyboardEvent) => true,
    balFocus: (value: FocusEvent) => true,
    balChange: (value: string | number | null) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-slider', ['balInput','balBlur','balClick','balKeyPress','balFocus','balChange','update:modelValue'], {
    modelProp: 'value',
    modelUpdateEvent: 'balInput'
  })
})

export const BalSnackbar = /*@__PURE__*/ defineComponent({
  name: 'bal-snackbar',
  props: {
    color: {
      type: String,
      default: '',
      required: false,
    },
    duration: {
      type: Number,
      default: 0,
      required: false,
    },
    subject: {
      type: String,
      default: '',
      required: false,
    },
    message: {
      type: String,
      default: '',
      required: false,
    },
    icon: {
      type: String,
      default: '',
      required: false,
    },
    action: {
      type: String,
      default: '',
      required: false,
    },
    closeHandler: {
      type: Function as PropType<() => void>,
      default: () => {},
      required: false,
    },
    actionHandler: {
      type: Function as PropType<() => void>,
      default: () => {},
      required: false,
    },
  },
  emits: {
    balClose: (value: string) => true,
    balAction: (value: string) => true,
  },
  setup: defineSetup('bal-snackbar', ['balClose','balAction'], undefined)
})

export const BalSpinner = /*@__PURE__*/ defineComponent({
  name: 'bal-spinner',
  props: {
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    small: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-spinner', [], undefined)
})

export const BalTabItem = /*@__PURE__*/ defineComponent({
  name: 'bal-tab-item',
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
    href: {
      type: String,
      default: '',
      required: false,
    },
    bubble: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    done: {
      type: Boolean,
      default: false,
      required: false,
    },
    failed: {
      type: Boolean,
      default: false,
      required: false,
    },
    active: {
      type: Boolean,
      default: false,
      required: false,
    },
    prevent: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {
    balNavigate: (value: MouseEvent) => true,
  },
  setup: defineSetup('bal-tab-item', ['balNavigate'], undefined)
})

export const BalTable = /*@__PURE__*/ defineComponent({
  name: 'bal-table',
  props: {
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-table', [], undefined)
})

export const BalTabs = /*@__PURE__*/ defineComponent({
  name: 'bal-tabs',
  props: {
    interface: {
      type: String,
      default: 'tabs',
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
    clickable: {
      type: Boolean,
      default: true,
      required: false,
    },
    rounded: {
      type: Boolean,
      default: false,
      required: false,
    },
    action: {
      type: Boolean,
      default: false,
      required: false,
    },
    actionLabel: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {
    balTabChange: (value: Lib.BalTabOption) => true,
    balActionClick: (value: MouseEvent) => true,
  },
  setup: defineSetup('bal-tabs', ['balTabChange','balActionClick'], undefined)
})

export const BalTag = /*@__PURE__*/ defineComponent({
  name: 'bal-tag',
  props: {
    color: {
      type: String,
      default: '',
      required: false,
    },
    size: {
      type: String,
      default: '',
      required: false,
    },
    closable: {
      type: Boolean,
      default: false,
      required: false,
    },
    dense: {
      type: Boolean,
      default: false,
      required: false,
    },
    transparent: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {
    balCloseClick: (value: MouseEvent) => true,
  },
  setup: defineSetup('bal-tag', ['balCloseClick'], undefined)
})

export const BalText = /*@__PURE__*/ defineComponent({
  name: 'bal-text',
  props: {
    small: {
      type: Boolean,
      default: false,
      required: false,
    },
    bold: {
      type: Boolean,
      default: false,
      required: false,
    },
    color: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {

  },
  setup: defineSetup('bal-text', [], undefined)
})

export const BalTextarea = /*@__PURE__*/ defineComponent({
  name: 'bal-textarea',
  props: {
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    autocapitalize: {
      type: String,
      default: 'none',
      required: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
      required: false,
    },
    debounce: {
      type: Number,
      default: 0,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    placeholder: {
      type: String,
      default: undefined,
      required: false,
    },
    balTabindex: {
      type: Number,
      default: 0,
      required: false,
    },
    maxLength: {
      type: Number,
      default: undefined,
      required: false,
    },
    minLength: {
      type: Number,
      default: undefined,
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    cols: {
      type: Number,
      default: undefined,
      required: false,
    },
    rows: {
      type: Number,
      default: undefined,
      required: false,
    },
    wrap: {
      type: String,
      default: undefined,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    clickable: {
      type: Boolean,
      default: false,
      required: false,
    },
    inputmode: {
      type: String,
      default: undefined,
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balChange: (value: string) => true,
    balInput: (value: string) => true,
    balBlur: (value: FocusEvent) => true,
    balClick: (value: MouseEvent) => true,
    balKeyPress: (value: KeyboardEvent) => true,
    balFocus: (value: FocusEvent) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-textarea', ['balChange','balInput','balBlur','balClick','balKeyPress','balFocus','update:modelValue'], {
    modelProp: 'value',
    modelUpdateEvent: 'balInput'
  })
})

export const BalTimeinput = /*@__PURE__*/ defineComponent({
  name: 'bal-timeinput',
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    maxTime: {
      type: String,
      default: '',
      required: false,
    },
    minTime: {
      type: String,
      default: '',
      required: false,
    },
    inverted: {
      type: Boolean,
      default: false,
      required: false,
    },
    modelValue: {
      default: undefined,
    },
  },
  emits: {
    balChange: (value: string) => true,
    balBlur: (value: FocusEvent) => true,
    'update:modelValue': (value: any) => true,
  },
  setup: defineSetup('bal-timeinput', ['balChange','balBlur','update:modelValue'], {
    modelProp: 'value',
    modelUpdateEvent: 'balChange'
  })
})

export const BalToast = /*@__PURE__*/ defineComponent({
  name: 'bal-toast',
  props: {
    color: {
      type: String,
      default: '',
      required: false,
    },
    duration: {
      type: Number,
      default: 0,
      required: false,
    },
    message: {
      type: String,
      default: '',
      required: false,
    },
    closeHandler: {
      type: Function as PropType<() => void>,
      default: () => {},
      required: false,
    },
  },
  emits: {
    balClose: (value: string) => true,
  },
  setup: defineSetup('bal-toast', ['balClose'], undefined)
})

