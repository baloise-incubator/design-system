import { Attributes } from '../../utils/attributes'
import { ComponentRef } from '../../utils/framework-delegate'
import { ComponentProps } from '../notice/bal-modal/bal-modal.type'

export type NavigationBreakpoints = 'touch' | 'desktop' | 'highDefinition' | 'widescreen'

export interface LevelInfo {
  type: 'meta' | 'main' | 'block' | 'block-item'
  value: string
  label: string
  isTabLink?: boolean
  link?: string
  target?: BalProps.BalButtonTarget
  linkLabel?: string
  color?: BalProps.BalNavigationLevelBlockColor
  subLevels?: LevelInfo[]
  trackingData?: Attributes
  onClick: (event: MouseEvent) => void
}

export interface MetaLevelInfo {
  value: string
  label: string
  isTabLink?: boolean
  link?: string
  linkLabel?: string
  trackingData?: Attributes
  onClick: (event: MouseEvent) => void
}

export interface Action {
  component: ComponentRef
  componentProps?: ComponentProps
  componentCssClass?: string | string[]
}
