import { FunctionalComponent, h } from '@stencil/core'
import { Props } from '../../../types'
import { BEM } from '../../../utils/bem'
import { BalTabOption } from '../bal-tab.type'
import { TabIcon } from './tab-icon'
import { TabLabel } from './tab-label'

export interface TabButtonProps {
  item: BalTabOption
  tabsId: string
  isFirst: boolean
  isLast: boolean
  isMobile: boolean
  isVertical: boolean
  expanded: boolean
  spaceless: boolean
  clickable: boolean
  iconPosition: Props.BalTabsIconPosition
  onSelectTab: (event: MouseEvent, item: BalTabOption) => void
}

export const TabButton: FunctionalComponent<TabButtonProps> = ({
  item,
  tabsId,
  isFirst,
  isLast,
  isMobile,
  isVertical,
  expanded,
  spaceless,
  clickable,
  iconPosition,
  onSelectTab,
}) => {
  const bemEl = BEM.block('tabs').element('nav').element('item')

  if (item.hidden) {
    return
  }

  const hasBubble = item.bubble !== false
  const hasIcon = item.icon !== undefined

  const hasIconBubble =
    (hasIcon && hasBubble && iconPosition !== 'horizontal') || (isMobile && hasIcon && hasBubble && !isVertical)
  const hasLabelBubble =
    (!hasIcon && hasBubble) || (hasBubble && !isMobile && iconPosition === 'horizontal') || (hasBubble && isVertical)

  return (
    <a
      role="tab"
      id={`${tabsId}-button`}
      class={{
        ...bemEl.class(),
        ...bemEl.modifier('active').class(item.active),
        ...bemEl.modifier('disabled').class(item.disabled),
        ...bemEl.modifier('clickable').class(clickable),
        ...bemEl.modifier('expanded').class(expanded),
        ...bemEl.modifier('spaceless').class(spaceless),
        ...bemEl.modifier('first').class(isFirst),
        ...bemEl.modifier('last').class(isLast),
        ...bemEl.modifier('passed').class(item.passed),
        ...bemEl.modifier('vertical').class(isVertical),
        ...bemEl.modifier(`icon-position-${iconPosition}`).class(iconPosition !== 'horizontal'),
      }}
      data-label={item.label}
      data-value={item.value}
      data-index={item.index}
      data-testid="bal-tabs-item"
      aria-disabled={`${item.disabled}`}
      href={item.href === '' ? 'javascript:;' : item.href}
      target={item.target}
      onClick={(event: MouseEvent) => onSelectTab(event, item)}
    >
      {item.icon ? <TabIcon item={item} isMobile={isMobile} hasBubble={hasIconBubble}></TabIcon> : ''}
      <TabLabel item={item} isMobile={isMobile} isVertical={isVertical} hasBubble={hasLabelBubble}></TabLabel>
    </a>
  )
}
