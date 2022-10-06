import { Component, Host, h, Element, State, Event, EventEmitter, Method, Prop, Watch, Listen } from '@stencil/core'
import { debounceEvent } from '../../helpers/helpers'
import { BalTabOption } from './bal-tab.type'
import { watchForTabs } from './utils/watch-tabs'
import { TabList } from './components/tabs'
import { StepList } from './components/steps'
import { Props, Platforms, Events } from '../../types'
import { BEM } from '../../utils/bem'
import { getPlatforms, isPlatform } from '../../utils/platform'
import { stopEventBubbling } from '../../helpers/form-input.helpers'

@Component({
  tag: 'bal-tabs',
})
export class Tabs {
  @Element() el!: HTMLElement

  private didInit = false
  private mutationO?: MutationObserver
  private timeoutTimer?: NodeJS.Timer
  private listEl?: HTMLUListElement
  private transformLeft = 0
  private xPosition = 0

  @State() tabsOptions: BalTabOption[] = []
  @State() lineWidth = 0
  @State() lineOffsetLeft = 0
  @State() lineHeight = 0
  @State() lineOffsetTop = 0
  @State() isReady = false
  @State() platform: Platforms[] = ['mobile']
  @State() isLastSlide = false
  @State() isFirstSlide = true
  @State() isSliderActive = false
  @State() slideIndex = 0

  /**
   * Defines the layout of the tabs.
   */
  @Prop() interface: Props.BalTabsInterface = 'tabs'

  /**
   * Defines the layout of the tabs.
   */
  @Prop() iconPosition: Props.BalTabsIconPosition = 'horizontal'

  /**
   * Defines the layout of the tabs. Right only works from the breakpoint
   * high-definition and beyond.
   */
  @Prop() float: Props.BalTabsFloat = 'left'

  /**
   * If `true` the field expands over the whole width.
   */
  @Prop() expanded = false

  /**
   * If `true` the tabs container does not have a padding left or right.
   */
  @Prop() spaceless = false

  /**
   * If `true` the field expands over the whole width.
   */
  @Prop() inverted = false

  /**
   * If `true` the tabs is a block element and uses 100% of the width
   */
  @Prop() fullwidth = false

  /**
   * If `true` the tabs or steps can be clicked.
   */
  @Prop() clickable = true

  /**
   * If `true` a light border is shown for the tabs.
   */
  @Prop() border = false

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 0

  /**
   * If `true` tabs are align vertically.
   */
  @Prop() vertical: Props.BalTabsVertical = false

  /**
   * The col size of the tabs on vertical mode.
   */
  @Prop() verticalColSize: Props.BalTabsColSize = 'one-third'

  /**
   * If `true` the tabs are shown as a select component on mobile
   */
  @Prop() selectOnMobile = false

  @Watch('debounce')
  protected debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce)
  }

  @Prop({ mutable: true }) value?: string = undefined

  @Watch('value')
  protected async valueChanged(newValue?: string, oldValue?: string) {
    this.tabs.forEach(t => t.setActive(t.value === this.value))

    if (this.didInit && newValue !== oldValue) {
      this.isReady = true
      this.syncSlider()
    }
  }

  /**
   * Emitted when the changes has finished.
   */
  @Event({ eventName: 'balChange' }) balChange!: EventEmitter<Events.BalTabsChangeDetail>

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.platform = getPlatforms()
    this.syncIsSliderActive()
    this.syncSlider()
    this.moveLine(this.getTargetElement(this.value))
  }

  @Listen('touchstart')
  touchStart(event: TouchEvent) {
    const productContainer = this.getProductContainer()
    if (productContainer?.contains(event.target as HTMLElement)) {
      this.xPosition = event.touches[0].pageX
    }
  }

  @Listen('touchend')
  touchEnd(event: TouchEvent) {
    const productContainer = this.getProductContainer()
    if (productContainer?.contains(event.target as HTMLElement)) {
      if (event.changedTouches[0].pageX < this.xPosition) {
        this.nextPage()
      }
      if (event.changedTouches[0].pageX > this.xPosition) {
        this.previousPage()
      }
    }
  }

  @Listen('load', { target: 'window' })
  async loadHandler() {
    this.moveLine(this.getTargetElement(this.value))
  }

  @Listen('balPopoverPrepare', { target: 'window' })
  async popoverHandler() {
    this.platform = getPlatforms()
    this.moveLine(this.getTargetElement(this.value))
  }

  connectedCallback() {
    this.platform = getPlatforms()
    this.debounceChanged()
    this.updateTabs()

    this.mutationO = watchForTabs<HTMLBalTabItemElement>(this.el, 'bal-tab-item', () => {
      this.updateTabs()
    })
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect()
      this.mutationO = undefined
    }
  }

  componentDidLoad() {
    this.didInit = true
    let value = this.value
    if ((value === undefined || value === '') && this.interface !== 'navigation') {
      const availableTabs = this.tabsOptions.filter(t => !t.disabled)
      if (availableTabs.length > 0) {
        value = availableTabs[0].value
      }
    }
    this.value = value
    this.valueChanged(value, this.value)
    this.syncSlider()
  }

  componentDidRender() {
    this.syncIsSliderActive()
    this.moveLine(this.getTargetElement(this.value))
  }

  /**
   * Go to tab with the given value
   */
  @Method()
  async select(tab: BalTabOption) {
    this.value = tab.value
  }

  /**
   * @internal
   * Rerenders the line to mark the active tab.
   */
  @Method()
  async renderLine() {
    this.moveLine(this.getTargetElement(this.value), 100)
  }

  private get tabs(): HTMLBalTabItemElement[] {
    return Array.from(this.el.querySelectorAll('bal-tab-item'))
  }

  private async updateTabs() {
    try {
      await Promise.all(this.tabs.map(value => value.getOptions())).then(tabsOptions => {
        this.tabsOptions = tabsOptions
      })
      const activeTabs = this.tabsOptions.filter(t => t.active)
      if (activeTabs.length > 0) {
        const firstActiveTab = activeTabs[0]
        this.value = firstActiveTab.value
      }
    } catch (e) {
      console.warn('[WARN] - Could not read tab options')
    }
  }

  private async onSelectTab(event: MouseEvent, tab: BalTabOption) {
    if (tab.prevent || tab.disabled || !this.clickable) {
      stopEventBubbling(event)
    }

    if (!tab.disabled) {
      tab.navigate.emit(event)
      if (this.clickable) {
        let value = tab.value
        if (this.interface === 'navigation' && value === this.value) {
          value = ''
        }

        if (value !== this.value) {
          this.balChange.emit(value)
          await this.select(tab)
        }
      }
    }
  }

  private parseVertical(): Props.BalTabsVertical {
    if ((this.vertical as any) === 'true' || (this.vertical as any) === '') {
      return true
    }
    if ((this.vertical as any) === 'false' || (this.vertical as any) === undefined) {
      return false
    }

    return this.vertical
  }

  private moveLine(element: HTMLElement, timeout = 0) {
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer)
    }
    this.timeoutTimer = setTimeout(() => {
      if (this.interface !== 'steps' && this.interface !== 'o-steps') {
        if (element) {
          let paddingLeft = 0
          let paddingRight = 0
          const listElement = element.closest('li')
          if (listElement) {
            paddingLeft = parseInt(
              window
                .getComputedStyle(listElement.firstChild as Element)
                .getPropertyValue('padding-left')
                .slice(0, -2),
              10,
            )
            paddingRight = parseInt(
              window
                .getComputedStyle(listElement.firstChild as Element)
                .getPropertyValue('padding-right')
                .slice(0, -2),
              10,
            )
          }

          const isMobile = isPlatform('mobile')
          const isTablet = isPlatform('tablet')
          const isVertical = this.parseVertical() === true
          const isNavbarTablet = this.interface === 'navbar' && (isMobile || isTablet)
          const isVerticalMobile = isMobile && (this.vertical === 'mobile' || this.vertical === 'tablet')
          const isVerticalTablet = (isMobile || isTablet) && this.vertical === 'tablet'

          if (isVertical || isVerticalMobile || isVerticalTablet || isNavbarTablet) {
            if (listElement?.clientHeight !== undefined) {
              this.lineHeight = listElement.clientHeight - 8
            }

            if (listElement?.offsetTop !== undefined) {
              this.lineOffsetTop = listElement.offsetTop + 4
            }
          } else {
            if (listElement?.clientWidth !== undefined) {
              this.lineWidth = listElement.clientWidth - (this.expanded ? 0 : paddingLeft + paddingRight)
            }

            if (listElement?.offsetLeft !== undefined) {
              this.lineOffsetLeft = listElement.offsetLeft + (this.expanded ? 0 : paddingLeft)
            }
          }
        } else {
          this.lineWidth = 0
        }
      }
    }, timeout)
  }

  private getTargetElement(value?: string) {
    const elements = Array.from(this.el.querySelectorAll('.data-test-tab-item')) as HTMLElement[]
    return elements.filter(element => element.getAttribute('data-value') == value)[0]
  }

  private isTabActive(tab: BalTabOption): boolean {
    return tab.value === this.value
  }

  private getProductContainer() {
    return this.el.querySelector<HTMLDivElement>('.bal-tabs__tabs')
  }

  private nextPage(animated = true) {
    const reversedList = this.tabItems.reverse()
    const lastVisible = reversedList.findIndex(item => item.isVisible)
    const nextItemToShow = reversedList[lastVisible - 1]
    this.transformLeft = nextItemToShow.el.offsetLeft
    const isPageBigEnough = this.listWidth - this.transformLeft >= this.containerWidth
    this.isLastSlide = false
    this.isFirstSlide = false
    this.slideIndex++
    if (!isPageBigEnough) {
      this.transformLeft = this.listWidth - this.containerWidth
      this.isLastSlide = true
    }
    this.setTransition(animated)
  }

  private previousPage(animated = true) {
    const list = this.tabItems

    const firstVisibleIndex = list.findIndex(item => item.isVisible)
    const firstVisibleElement = list[firstVisibleIndex <= 0 ? 0 : firstVisibleIndex]
    const offsetLeft = firstVisibleElement.el.offsetLeft - this.containerWidth
    this.transformLeft = offsetLeft < 0 ? 0 : offsetLeft
    this.isFirstSlide = this.transformLeft === 0
    this.isLastSlide = false
    this.slideIndex--

    this.setTransition(animated)
  }

  private setTransition(animated = true) {
    const container = this.getProductContainer()
    if (container) {
      if (animated) {
        container.style.transitionDuration = '1.2s'
      } else {
        container.style.transitionDuration = '0'
      }
      container.style.transitionTimingFunction = 'cubic-bezier(0.23, 0.93, 0.13, 1)'
      container.style.transform = `translate(-${this.transformLeft}px)`
    }
  }

  private get listWidth(): number {
    return this.listEl?.clientWidth || 0
  }

  private get containerWidth(): number {
    return this.getProductContainer()?.clientWidth || 0
  }

  private get tabItems(): any[] {
    const list = Array.from(this.el?.querySelectorAll<HTMLDivElement>('.bal-tabs__tabs__item'))
    const newList = list
      .filter(item => item.dataset.hidden !== '')
      .map((item, index) => {
        let pointer = item.clientWidth + item.offsetLeft
        pointer = this.interface === 'navigation' ? pointer - 30 : pointer
        const isVisible =
          index === 0
            ? pointer <= this.containerWidth + this.transformLeft && pointer >= this.transformLeft
            : pointer <= this.containerWidth + this.transformLeft && pointer - item.clientWidth >= this.transformLeft
        return { el: item, pointer, isVisible, index, value: item.dataset.value }
      })
    return [...newList]
  }

  private syncSlider(animated = false) {
    if (this.value === '') {
      return
    }

    if (this.isSliderActive) {
      const list = this.tabItems
      const isValueVisible = list.filter(item => item.isVisible && item.value === this.value).length > 0
      if (!isValueVisible) {
        let isOnPreviousPage = false

        for (let index = 0; index < list.length; index++) {
          const item = list[index]
          if (item.isVisible) {
            break
          }
          if (item.value === this.value) {
            isOnPreviousPage = true
            break
          }
        }
        if (isOnPreviousPage) {
          this.previousPage(animated)
        } else {
          this.nextPage(animated)
        }

        this.syncSlider(animated)
        this.renderLine()
      }
    }
  }

  private syncIsSliderActive() {
    this.isSliderActive =
      this.tabItems.some(item => !item.isVisible) &&
      this.interface !== 'steps' &&
      this.interface !== 'meta' &&
      !this.vertical
  }

  render() {
    const block = BEM.block('tabs')
    const isSteps = this.interface === 'steps' || this.interface === 'o-steps'
    const Tabs = isSteps ? StepList : TabList

    const isMobile = isPlatform('mobile')
    const isTablet = isPlatform('tablet')
    const isPropVertical = this.parseVertical() === true
    const isVerticalMobile = isMobile && (this.vertical === 'mobile' || this.vertical === 'tablet')
    const isVerticalTablet = (isMobile || isTablet) && this.vertical === 'tablet'

    const controls = block.element('controls')
    const controlButton = controls.element('button')

    const leftControlIsDisabled = this.isSliderActive && this.isFirstSlide
    const rightControlIsDisabled = this.isSliderActive && this.isLastSlide

    const isVertical = isPropVertical || isVerticalMobile || isVerticalTablet

    const isBorderVisible = this.border && this.interface !== 'steps'

    return (
      <Host
        class={{
          ...block.class(),
          ...block.modifier(`context-${this.interface}`).class(),
          ...block.modifier('vertical').class(this.parseVertical() === true),
          ...block.modifier('fullwidth').class(this.expanded || this.fullwidth || isSteps),
        }}
        data-value={this.tabsOptions
          .filter(t => this.isTabActive(t))
          .map(t => t.value)
          .join(',')}
        data-label={this.tabsOptions
          .filter(t => this.isTabActive(t))
          .map(t => t.label)
          .join(',')}
      >
        <div
          class={{
            'columns is-multiline': this.interface !== 'meta' && this.interface !== 'navigation',
            'has-slider': this.interface === 'navigation' && this.isSliderActive,
          }}
        >
          <div
            class={{
              'column': this.interface !== 'meta' && this.interface !== 'navigation',
              'is-full': !isVertical,
              [`is-${this.verticalColSize}`]: isVertical,
              'bal-tabs__col-items': true,
              'bal-tabs__col-items--vertical': isVertical,
            }}
            style={{ 'padding-left': leftControlIsDisabled ? '0' : '16px' }}
          >
            <div
              class={{
                'bal-tabs__col-items__border-wrapper': isBorderVisible,
                'bal-tabs__col-items__border-wrapper--vertical': isBorderVisible && this.vertical === true,
                'bal-tabs__col-items__border-wrapper--vertical-on-mobile':
                  isBorderVisible && this.vertical === 'mobile',
                'bal-tabs__col-items__border-wrapper--vertical-on-tablet':
                  isBorderVisible && this.vertical === 'tablet',
              }}
            >
              <div class="column-content-inner-test">
                <Tabs
                  value={this.value}
                  context={this.interface}
                  inverted={this.inverted}
                  spaceless={this.spaceless}
                  tabs={this.tabsOptions}
                  border={this.border}
                  borderWidth={this.listEl?.offsetWidth === undefined ? 0 : this.listEl?.offsetWidth}
                  float={this.float}
                  expanded={this.expanded}
                  clickable={this.clickable}
                  isReady={this.isReady}
                  iconPosition={this.iconPosition}
                  onSelectTab={(e, t) => this.onSelectTab(e, t)}
                  lineWidth={this.lineWidth}
                  lineOffsetLeft={this.lineOffsetLeft}
                  lineHeight={this.lineHeight}
                  lineOffsetTop={this.lineOffsetTop}
                  vertical={this.interface === 'navbar' ? 'tablet' : this.parseVertical()}
                  selectOnMobile={this.selectOnMobile}
                  refListEl={el => (this.listEl = el)}
                ></Tabs>
              </div>
            </div>
          </div>
          <div
            class={{
              'column': this.interface !== 'meta' && this.interface !== 'navigation',
              'is-full': !isVertical,
              'bal-tabs__col-content': true,
              'bal-tabs__col-content--vertical': isVertical,
              'bal-tabs__col-content--full': this.verticalColSize === 'full',
            }}
          >
            <slot></slot>
          </div>
          <div class={{ ...controls.class(), 'is-hidden': !this.isSliderActive }}>
            <div
              class={{
                ...controlButton.class(),
                ...controlButton.modifier('left').class(),
                'is-hidden': leftControlIsDisabled,
              }}
            >
              <button
                type="button"
                aria-label="left"
                onClick={() => this.previousPage()}
                disabled={leftControlIsDisabled}
              >
                <bal-icon name="caret-left" inverted={!this.inverted} size="xsmall"></bal-icon>
              </button>
            </div>
            <div class={{ ...controlButton.class(), ...controlButton.modifier('right').class() }}>
              <button
                type="button"
                aria-label="right"
                onClick={() => this.nextPage()}
                disabled={rightControlIsDisabled}
              >
                <bal-icon name="caret-right" inverted={!this.inverted} size="xsmall"></bal-icon>
              </button>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
