import { FunctionalComponent, h } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { BalTabOption } from '../bal-tab.type'

export interface TabLabelProps {
  item: BalTabOption
  isMobile: boolean
  isVertical: boolean
  hasBubble: boolean
}

export const TabLabel: FunctionalComponent<TabLabelProps> = ({ item, hasBubble, isVertical }) => {
  const bemEl = BEM.block('tabs').element('nav').element('item').element('label')

  return (
    <span
      class={{
        ...bemEl.class(),
        ...bemEl.modifier('active').class(item.active),
        ...bemEl.modifier('disabled').class(item.disabled),
        ...bemEl.modifier('vertical').class(isVertical),
      }}
      data-testid="bal-tabs-option-label"
    >
      {item.label}
      {hasBubble ? (
        <bal-badge class={{ ...bemEl.element('bubble').class() }} size="small">
          {item.bubble}
        </bal-badge>
      ) : (
        ''
      )}
    </span>
  )
}
