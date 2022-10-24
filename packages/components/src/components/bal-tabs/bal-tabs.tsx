import { Component, Host, h, Element, State, Event, EventEmitter, Method, Prop, Watch, Listen } from '@stencil/core'
import { debounceEvent } from '../../utils/helpers'
import { BalTabOption } from './bal-tab.type'
import { watchForTabs } from './utils/watch-tabs'
import { TabList } from './components/tabs'
import { StepList } from './components/steps'
import { Props, Platforms, Events } from '../../types'
import { BEM } from '../../utils/bem'
import { getPlatforms, isPlatform } from '../../utils/platform'
import { stopEventBubbling } from '../../utils/form-input'
import { ResizeHandler } from '../../utils/resize'

@Component({
  tag: 'bal-tabs',
})
export class Tabs {
  @Element() el!: HTMLElement

  private didInit = false
  private mutationO?: MutationObserver
  private timeoutTimer?: NodeJS.Timer

  @State() tabsOptions: BalTabOption[] = []
  @State() lineWidth = 0
  @State() lineOffsetLeft = 0
  @State() lineHeight = 0
  @State() lineOffsetTop = 0
  @State() isReady = false
  @State() platform: Platforms[] = ['mobile']

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
    }
  }

  /**
   * Emitted when the changes has finished.
   */
  @Event({ eventName: 'balChange' }) balChange!: EventEmitter<Events.BalTabsChangeDetail>

  resizeWidthHandler = ResizeHandler()

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.resizeWidthHandler(() => {
      this.platform = getPlatforms()
      this.moveLine(this.getTargetElement(this.value))
    })
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
  }

  componentDidRender() {
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
   * Find the options properties by its value
   */
  @Method()
  async getOptionByValue(value: string) {
    const options = this.tabsOptions
    return options.find(option => option.value === value)
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
        if (this.interface === 'navigation' && value === this.value && !tab.href) {
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

  render() {
    const block = BEM.block('tabs')
    const isSteps = this.interface === 'steps' || this.interface === 'o-steps'
    const Tabs = isSteps ? StepList : TabList

    const isMobile = isPlatform('mobile')
    const isTablet = isPlatform('tablet')
    const isPropVertical = this.parseVertical() === true
    const isVerticalMobile = isMobile && (this.vertical === 'mobile' || this.vertical === 'tablet')
    const isVerticalTablet = (isMobile || isTablet) && this.vertical === 'tablet'

    const isVertical = isPropVertical || isVerticalMobile || isVerticalTablet

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
          >
            <Tabs
              value={this.value}
              context={this.interface}
              inverted={this.inverted}
              spaceless={this.spaceless}
              tabs={this.tabsOptions}
              border={this.border}
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
            ></Tabs>
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
        </div>
      </Host>
    )
  }
}
