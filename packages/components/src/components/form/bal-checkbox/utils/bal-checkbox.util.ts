import { Props } from '../../../../types'
import { BalCheckboxOption } from '../bal-checkbox.type'

type HtmlFunction = () => string

interface Option {
  name: string
  value: any
  html?: HtmlFunction | string
  checked?: boolean
  labelHidden?: boolean
  flat?: boolean
  interface?: Props.BalCheckboxInterface
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  hidden?: boolean
  invalid?: boolean
}

export const newBalCheckboxOption = (option: Option): BalCheckboxOption => {
  return {
    html: undefined,
    checked: false,
    labelHidden: false,
    flat: false,
    interface: 'checkbox',
    disabled: false,
    readonly: false,
    required: false,
    hidden: false,
    invalid: false,
    ...option,
  }
}
