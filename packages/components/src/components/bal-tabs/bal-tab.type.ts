import { Props } from '../../'
import { EventEmitter } from '@stencil/core'
import { Attributes } from '../../utils/attributes'

export interface BalTabOption {
  value: string
  label: string
  icon?: string
  href: string
  target: Props.BalButtonTarget
  active: boolean
  disabled: boolean
  done: boolean
  hidden: boolean
  failed: boolean
  bubble: boolean | string
  prevent: boolean
  passed?: boolean
  index?: number
  context?: Props.BalTabsInterface
  navigate: EventEmitter<MouseEvent>
  trackingData?: Attributes
}

export interface TabLineProps {
  context?: Props.BalTabsInterface
  inverted: boolean
  isReady: boolean
  vertical: boolean | 'mobile' | 'tablet'
  lineWidth?: number
  lineOffsetLeft?: number
  lineHeight?: number
  lineOffsetTop?: number
}

export interface TabProps {
  value: string | undefined
  expanded: boolean
  border: boolean
  float: Props.BalTabsFloat
  spaceless: boolean
  clickable: boolean
  isReady: boolean
  inverted: boolean
  iconPosition: Props.BalTabsIconPosition
  tabs: BalTabOption[]
  context: Props.BalTabsInterface
  onSelectTab: (event: MouseEvent, tab: BalTabOption) => void
  lineWidth?: number
  lineOffsetLeft?: number
  lineHeight?: number
  lineOffsetTop?: number
  vertical: boolean | 'mobile' | 'tablet'
  selectOnMobile: boolean
}

export interface TabItemProps {
  icon: string | undefined
  active: boolean
  inverted: boolean
  vertical: boolean | 'mobile' | 'tablet'
  expanded: boolean
  disabled: boolean
  bubble: boolean | string
  href: string | undefined
  target: Props.BalButtonTarget
  label: string | undefined
  context: Props.BalTabsInterface
  iconPosition: Props.BalTabsIconPosition
  trackingData?: Attributes
  onSelectTab: (event: MouseEvent) => void
}
