import { FunctionalComponent, h } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { BalTabOption } from '../bal-tab.type'

export interface TabIconProps {
  item: BalTabOption
  isMobile: boolean
  hasBubble: boolean
}

export const TabIcon: FunctionalComponent<TabIconProps> = ({ item, isMobile, hasBubble }) => {
  const bemEl = BEM.block('tabs').element('nav').element('item').element('icon')

  return (
    <span
      class={{
        ...bemEl.class(),
        ...bemEl.modifier('active').class(item.active),
        ...bemEl.modifier('disabled').class(item.disabled),
      }}
    >
      <bal-icon size={isMobile ? 'small' : ''} name={item.icon} color={item.disabled ? 'grey' : 'primary'}></bal-icon>
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
