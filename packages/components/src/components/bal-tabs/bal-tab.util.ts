import { Props } from '../../types'
import { BalTabOption } from './bal-tab.type'

interface Option {
  value: string
  label: string
  href?: string
  target?: Props.BalButtonTarget
  active?: boolean
  disabled?: boolean
  done?: boolean
  hidden?: boolean
  failed?: boolean
  prevent?: boolean
}

export const newBalTabOption = (option: Option): BalTabOption => {
  return {
    href: '',
    target: '_self',
    bubble: false,
    active: false,
    disabled: false,
    hidden: false,
    prevent: false,
    ...option,
  }
}
