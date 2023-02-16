import { FunctionalComponent, h } from '@stencil/core'
import { Props } from '../../../types'
import { BEM } from '../../../utils/bem'
import { stopEventBubbling } from '../../../utils/form-input'
import { BalTabOption } from '../bal-tab.type'
import { TabButton } from './tab-button'

export interface TabNavProps {
  items: BalTabOption[]
  tabsId: string
  hasCarousel: boolean
  isVertical: boolean
  isMobile: boolean
  border: boolean
  clickable: boolean
  animated: boolean
  spaceless: boolean
  expanded: boolean
  verticalColSize: Props.BalTabsColSize
  iconPosition: Props.BalTabsIconPosition
  onSelectTab: (event: MouseEvent, tab: BalTabOption) => void
}

export const TabNav: FunctionalComponent<TabNavProps> = ({
  items,
  tabsId,
  hasCarousel,
  isVertical,
  isMobile,
  border,
  clickable,
  animated,
  spaceless,
  expanded,
  verticalColSize,
  iconPosition,
  onSelectTab,
}) => {
  const bemEl = BEM.block('tabs').element('nav')

  const tabs = items.filter(tab => !tab.hidden)

  const Button: FunctionalComponent<{ item: BalTabOption; index: number }> = ({ item, index }) => (
    <TabButton
      item={item}
      tabsId={tabsId}
      isFirst={index === 0}
      isLast={index === tabs.length - 1}
      isMobile={isMobile}
      isVertical={isVertical}
      iconPosition={iconPosition}
      spaceless={spaceless}
      clickable={clickable && !item.disabled}
      onSelectTab={onSelectTab}
    ></TabButton>
  )

  return (
    <nav
      role="tablist"
      id={`${tabsId}-nav`}
      class={{
        ...bemEl.class(),
        ...bemEl.modifier(`border`).class(border),
        ...bemEl.modifier(`animated`).class(animated),
        ...bemEl.modifier(`vertical`).class(isVertical),
        ...bemEl.modifier(`vertical-col-${verticalColSize}`).class(isVertical),
      }}
    >
      {hasCarousel ? (
        <bal-carousel
          id={`${tabsId}-carousel`}
          class={{
            ...bemEl.element('carousel').class(),
          }}
          border={border}
          controls="small"
          items-per-view="auto"
          steps={3}
          onBalChange={stopEventBubbling}
        >
          {tabs.map((tab, index) => (
            <bal-carousel-item
              class={{
                ...bemEl.element('carousel').element('item').class(),
                ...bemEl.element('carousel').element('item').modifier('expanded').class(expanded),
              }}
            >
              <Button item={tab} index={index}></Button>
            </bal-carousel-item>
          ))}
          <div
            id={`${tabsId}-line`}
            class={{
              ...bemEl.element('line').class(),
              ...bemEl.element('line').modifier(`animated`).class(animated),
              ...bemEl.element('line').modifier(`vertical`).class(isVertical),
            }}
          ></div>
        </bal-carousel>
      ) : (
        tabs.map((tab, index) => <Button item={tab} index={index}></Button>)
      )}
      {!hasCarousel ? (
        <div
          id={`${tabsId}-line`}
          class={{
            ...bemEl.element('line').class(),
            ...bemEl.element('line').modifier(`animated`).class(animated),
            ...bemEl.element('line').modifier(`vertical`).class(isVertical),
          }}
        ></div>
      ) : (
        ''
      )}
      {!hasCarousel ? (
        <div
          id={`${tabsId}-border`}
          class={{
            ...bemEl.element('border').class(),
            ...bemEl.element('border').modifier(`vertical`).class(isVertical),
          }}
        ></div>
      ) : (
        ''
      )}
    </nav>
  )
}
