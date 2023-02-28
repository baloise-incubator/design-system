import { Component, Host, h, Element, State, Event, EventEmitter, Method, Prop, Watch, Listen } from '@stencil/core'
import { areArraysEqual } from '@baloise/web-app-utils'
import { debounceEvent, deepReady, parentDidAnimate, raf, transitionEndAsync } from '../../utils/helpers'
import { BalTabOption } from './bal-tab.type'
import { watchForTabs } from './utils/watch-tabs'
import { Props, Events } from '../../types'
import { attachComponentToConfig, BalConfigObserver, BalConfigState, detachComponentToConfig } from '../../utils/config'
import { BEM } from '../../utils/bem'
import { isPlatform } from '../../utils/platform'
import { ResizeHandler } from '../../utils/resize'
import { Loggable, Logger, LogInstance } from '../../utils/log'
import { newBalTabOption } from './bal-tab.util'
import { stopEventBubbling } from '../../utils/form-input'
import { TabSelect } from './components/tab-select'
import { TabNav } from './components/tab-nav'
import { getPadding, Padding } from '../../utils/style'

/**
 * TODO's
 * ------------------------
 * - fix component tests
 * - add inverted style
 * - add interfaces for meta navbar...
 */

@Component({
  tag: 'bal-tabs',
  styleUrls: {
    css: 'bal-tabs.sass',
  },
})
export class Tabs implements Loggable, BalConfigObserver {
  @Element() el!: HTMLElement

  private mutationO?: MutationObserver
  private resizeWidthHandler = ResizeHandler()
  private tabsId = `bal-tabs-${TabsIds++}`
  private currentRaf: number | undefined

  @State() isMobile = isPlatform('mobile')
  @State() isTablet = isPlatform('tablet')
  @State() store: BalTabOption[] = []
  @State() animated = true

  log!: LogInstance

  @Logger('bal-tabs')
  createLogger(log: LogInstance) {
    this.log = log
  }

  // private didInit = false
  // private mutationO?: MutationObserver
  // private timeoutTimer?: NodeJS.Timer
  // private tabsId = `bal-tabs-${TabsIds++}`

  // @State() tabsOptions: BalTabOption[] = []
  // @State() lineWidth = 0
  // @State() lineOffsetLeft = 0
  // @State() lineHeight = 0
  // @State() lineOffsetTop = 0
  // @State() isReady = false
  // @State() platform: Platforms[] = ['mobile']

  /**
   * PUBLIC PROPERTY API
   * ------------------------------------------------------
   */

  /**
   * @deprecated Defines the layout of the tabs. Right only works from the breakpoint
   * high-definition and beyond.
   */
  @Prop() float: Props.BalTabsFloat = 'left'

  /**
   * @deprecated If `true` the tabs is a block element and uses 100% of the width
   */
  @Prop() fullwidth = false

  /**
   * If `true` the tabs have a carousel if they need more space than provided.
   */
  @Prop() overflow = true

  /**
   * Steps can be passed as a property or through HTML markup.
   */
  @Prop() options: BalTabOption[] = []

  @Watch('options')
  protected async optionChanged() {
    this.onOptionChange()
  }

  /**
   * Defines the layout of the tabs.
   */
  @Prop() interface: Props.BalTabsInterface = 'tabs'

  /**
   * Defines the layout of the tabs.
   */
  @Prop() iconPosition: Props.BalTabsIconPosition = 'horizontal'

  /**
   * If `true` the field expands over the whole width.
   */
  @Prop() expanded = false

  /**
   * If `true` the tabs container does not have a padding left or right.
   */
  @Prop() spaceless = false

  /**
   * If `true` the tabs or steps can be clicked.
   */
  @Prop() clickable = true

  /**
   * If `true` a light border is shown for the tabs.
   */
  @Prop() border = false

  /**
   * If `true` the tabs can be uses on dark background
   */
  @Prop() inverted = false

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 0

  @Watch('debounce')
  protected debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce)
  }

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

  @Prop({ mutable: true }) value?: string = undefined

  @Watch('value')
  protected async valueChanged(newValue?: string, oldValue?: string) {
    if (newValue !== oldValue) {
      this.onOptionChange()
    }
  }

  /**
   * Emitted when the changes has finished.
   */
  @Event() balChange!: EventEmitter<Events.BalTabsChangeDetail>

  /**
   * @internal Emitted before the animation starts
   */
  @Event() balWillAnimate!: EventEmitter<Events.BalTabsWillAnimateDetail>

  /**
   * @internal Emitted after the animation has finished
   */
  @Event() balDidAnimate!: EventEmitter<Events.BalTabsDidAnimateDetail>

  /**
   * LIFECYCLE
   * ------------------------------------------------------
   */

  connectedCallback() {
    this.debounceChanged()
    attachComponentToConfig(this)
  }

  componentDidLoad() {
    this.onOptionChange()
    this.mutationO = watchForTabs<HTMLBalTabItemElement>(this.el, 'bal-tab-item', () => {
      this.onOptionChange()
    })
  }

  disconnectedCallback() {
    detachComponentToConfig(this)

    if (this.mutationO) {
      this.mutationO.disconnect()
      this.mutationO = undefined
    }
  }

  /**
   * LISTENERS
   * ------------------------------------------------------
   */

  configChanged(state: BalConfigState): void {
    this.animated = state.animated
  }

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.resizeWidthHandler(() => {
      this.isMobile = isPlatform('mobile')
      this.isTablet = isPlatform('tablet')
      this.animateLine()
      // this.platform = getPlatforms()
      // this.moveLine(this.getTargetElement(this.value))
    })
  }

  @Listen('balWillAnimate', { target: 'window' })
  listenToWillAnimate(event: UIEvent) {
    parentDidAnimate(event, this.el, () => this.animateLine())
  }

  @Listen('balDidAnimate', { target: 'window' })
  listenToDidAnimate(event: UIEvent) {
    parentDidAnimate(event, this.el, () => this.animateLine())
  }

  // @Listen('balPopoverPrepare', { target: 'window' })
  // async popoverHandler() {
  //   // this.platform = getPlatforms()
  //   // this.moveLine(this.getTargetElement(this.value))
  // }

  // /**
  //  * @Internal need this to animate the line when the accordion has opened
  //  */
  // @Listen('balChange', { target: 'window' })
  // async accordionChangeHandler(event: Events.BalAccordionChange) {
  //   const accordion = this.el.closest('bal-accordion')
  //   if (event.target === accordion) {
  //     // this.moveLine(this.getTargetElement(this.value))
  //   }
  // }

  // connectedCallback() {
  //   this.platform = getPlatforms()
  //   this.debounceChanged()
  // }

  // disconnectedCallback() {
  //   if (this.mutationO) {
  //     this.mutationO.disconnect()
  //     this.mutationO = undefined
  //   }
  // }

  // componentDidLoad() {
  //   this.didInit = true

  //   this.updateTabs().then(() => {
  //     let value = this.value
  //     if ((value === undefined || value === '') && this.interface !== 'navigation') {
  //       const availableTabs = this.tabsOptions.filter(t => !t.disabled)
  //       if (availableTabs.length > 0) {
  //         value = availableTabs[0].value
  //       }
  //     }
  //     this.value = value
  //     this.valueChanged(value, this.value)
  //   })

  //   this.mutationO = watchForTabs<HTMLBalTabItemElement>(this.el, 'bal-tab-item', () => {
  //     this.updateTabs()
  //   })
  // }

  // componentDidRender() {
  //   this.moveLine(this.getTargetElement(this.value))
  // }

  /**
   * PUBLIC METHODS
   * ------------------------------------------------------
   */

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
    const options = this.store
    return options.find(option => option.value === value)
  }

  /**
   * @internal
   * Rerenders the line to mark the active tab.
   */
  @Method()
  async renderLine() {
    this.animateLine()
    // this.moveLine(this.getTargetElement(this.value), 100)
  }

  /**
   * PRIVATE METHODS
   * ------------------------------------------------------
   */

  // private get tabs(): HTMLBalTabItemElement[] {
  //   return Array.from(this.el.querySelectorAll(`#${this.tabsId} > bal-tab-item`))
  // }

  // private async updateTabs() {
  //   try {
  //     await Promise.all(this.tabs.map(value => value.getOptions())).then(tabsOptions => {
  //       if (!areArraysEqual(this.tabsOptions, tabsOptions)) {
  //         this.tabsOptions = tabsOptions
  //       }
  //     })
  //     const activeTabs = this.tabsOptions.filter(t => t.active)
  //     if (activeTabs.length > 0) {
  //       const firstActiveTab = activeTabs[0]
  //       this.value = firstActiveTab.value
  //     }
  //   } catch (e) {
  //     console.warn('[WARN] - Could not read tab options')
  //   }
  // }

  // private async onSelectTab(event: MouseEvent, tab: BalTabOption) {
  //   if (tab.prevent || tab.disabled || !this.clickable) {
  //     stopEventBubbling(event)
  //   }

  //   if (!tab.disabled) {
  //     tab.navigate.emit(event)
  //     if (this.clickable) {
  //       let value = tab.value
  //       if (this.interface === 'navigation' && value === this.value && !tab.href) {
  //         value = ''
  //       }

  //       if (value !== this.value) {
  //         this.balChange.emit(value)
  //         await this.select(tab)
  //       }
  //     }
  //   }
  // }

  // private moveLine(element: HTMLElement, timeout = 0) {
  //   if (this.timeoutTimer) {
  //     clearTimeout(this.timeoutTimer)
  //   }
  //   this.timeoutTimer = setTimeout(() => {
  //     if (this.interface !== 'steps' && this.interface !== 'o-steps') {
  //       if (element) {
  //         let paddingLeft = 0
  //         let paddingRight = 0
  //         const listElement = element.closest('li')
  //         if (listElement) {
  //           paddingLeft = parseInt(
  //             window
  //               .getComputedStyle(listElement.firstChild as Element)
  //               .getPropertyValue('padding-left')
  //               .slice(0, -2),
  //             10,
  //           )
  //           paddingRight = parseInt(
  //             window
  //               .getComputedStyle(listElement.firstChild as Element)
  //               .getPropertyValue('padding-right')
  //               .slice(0, -2),
  //             10,
  //           )
  //         }

  //         const isMobile = isPlatform('mobile')
  //         const isTablet = isPlatform('tablet')
  //         const isVertical = this.parseVertical() === true
  //         const isNavbarTablet = this.interface === 'navbar' && (isMobile || isTablet)
  //         const isVerticalMobile = isMobile && (this.vertical === 'mobile' || this.vertical === 'tablet')
  //         const isVerticalTablet = (isMobile || isTablet) && this.vertical === 'tablet'

  //         if (isVertical || isVerticalMobile || isVerticalTablet || isNavbarTablet) {
  //           if (listElement?.clientHeight !== undefined) {
  //             this.lineHeight = listElement.clientHeight - 8
  //           }

  //           if (listElement?.offsetTop !== undefined) {
  //             this.lineOffsetTop = listElement.offsetTop + 4
  //           }
  //         } else {
  //           if (listElement?.clientWidth !== undefined) {
  //             this.lineWidth = listElement.clientWidth - (this.expanded ? 0 : paddingLeft + paddingRight)
  //           }

  //           if (listElement?.offsetLeft !== undefined) {
  //             this.lineOffsetLeft = listElement.offsetLeft + (this.expanded ? 0 : paddingLeft)
  //           }
  //         }
  //       } else {
  //         this.lineWidth = 0
  //       }
  //     }
  //   }, timeout)
  // }

  /**
   * PRIVATE METHODS
   * ------------------------------------------------------
   */

  private get items(): HTMLBalTabItemElement[] {
    return Array.from(this.el.querySelectorAll(`#${this.tabsId} > bal-tab-item`))
  }

  private getOptions = () => {
    if (this.options.length > 0) {
      return [...this.options.map(newBalTabOption)]
    } else {
      return Promise.all(this.items.map(value => value.getOptions()))
    }
  }

  private updateStore = (newStore: BalTabOption[]) => {
    if (!areArraysEqual(this.store, newStore)) {
      this.store = newStore
    }
  }

  private setActiveItem = () => {
    const activeTabs = this.store.filter(t => t.active)
    if (activeTabs.length > 0) {
      const firstActiveTab = activeTabs[0]
      this.value = firstActiveTab.value
    } else {
      if (this.value === undefined && this.store.length > 0) {
        const firstStep = this.store[0]
        this.value = firstStep.value
      }
    }
  }

  private setActiveContent = () => {
    if (this.options.length === 0) {
      this.items.forEach(item => item.setActive(this.isActive(item)))
    }
  }

  private isActive(step: BalTabOption): boolean {
    return step.value === this.value
  }

  private parseVertical(): Props.BalTabsVertical {
    if ((this.vertical as any) === 'true' || (this.vertical as any) === '') {
      return true
    }
    if ((this.vertical as any) === 'false' || (this.vertical as any) === undefined) {
      return false
    }
    if (this.vertical === 'mobile') {
      return this.isMobile
    }

    if (this.vertical === 'tablet') {
      return this.isTablet || this.isMobile
    }

    return this.vertical
  }

  private getTargetElement(value?: string) {
    const selector = `#${this.tabsId}-button`
    const elements = Array.from(this.el.querySelectorAll(selector)) as HTMLElement[]
    return elements.filter(element => element.getAttribute('data-value') == value)[0]
  }

  private getLineElement(): HTMLElement | null {
    return this.el.querySelector(`#${this.tabsId}-line`)
  }

  private getBorderElement(): HTMLElement | null {
    return this.el.querySelector(`#${this.tabsId}-border`)
  }

  private getCarouselElement(): HTMLElement | null {
    return this.el.querySelector(`#${this.tabsId}-carousel`)
  }

  private getLineSize = (element: HTMLElement, padding: Padding) => {
    if (element) {
      const isVertical = this.parseVertical() === true

      if (isVertical) {
        return element.clientHeight
      } else {
        const clientWidth = element.clientWidth
        const paddingX = padding.left + padding.right
        return clientWidth - paddingX
      }
    }
    return 0
  }

  private getOffset = (element: HTMLElement, padding: Padding) => {
    const isVertical = this.parseVertical() === true

    if (isVertical) {
      if (element.offsetTop) {
        return element.offsetTop
      }
    } else {
      if (element.offsetLeft) {
        return element.offsetLeft + padding.left
      }

      const carouselItem = element.closest('bal-carousel-item')
      if (carouselItem) {
        return carouselItem.offsetLeft + padding.left
      }
    }

    return 0
  }

  private animateLine = async () => {
    if (!this.shouldAnimate()) {
      return
    }

    if (this.currentRaf !== undefined) {
      cancelAnimationFrame(this.currentRaf)
    }

    raf(async () => {
      await deepReady(this.el, true)

      this.currentRaf = raf(async () => {
        const target = this.getTargetElement(this.value)
        if (!target) {
          return
        }

        const padding = getPadding(target)
        const size = this.getLineSize(target, padding)
        const offset = this.getOffset(target, padding)

        const lineElement = this.getLineElement()
        if (lineElement) {
          const isVertical = this.parseVertical() === true
          this.balWillAnimate.emit()
          const waitForTransition = transitionEndAsync(lineElement, 300)

          if (isVertical) {
            lineElement.style.setProperty('transform', `translateY(${offset}px)`)
            lineElement.style.setProperty('min-height', `${size}px`)
            lineElement.style.setProperty('height', `${size}px`)
            lineElement.style.removeProperty('min-width')
            lineElement.style.removeProperty('width')
          } else {
            lineElement.style.setProperty('transform', `translateX(${offset}px)`)
            lineElement.style.setProperty('min-width', `${size}px`)
            lineElement.style.setProperty('width', `${size}px`)
            lineElement.style.removeProperty('min-height')
            lineElement.style.removeProperty('height')

            const borderElement = this.getBorderElement()
            const carouselElement = this.getCarouselElement()
            if (borderElement && carouselElement) {
              const containerMaxWidth = carouselElement.clientWidth
              borderElement.style.setProperty('width', `${containerMaxWidth}px`)
            }

            await waitForTransition
            this.balDidAnimate.emit()
          }
        }
      })
    })
  }

  private shouldAnimate = () => {
    if (typeof (window as any) === 'undefined') {
      return false
    }

    return this.animated
  }

  /**
   * EVENT BINDING
   * ------------------------------------------------------
   */

  private onOptionChange = async () => {
    try {
      const options = await this.getOptions()
      this.updateStore(options)
      this.setActiveItem()
      this.setActiveContent()
      this.animateLine()
    } catch (e) {
      console.warn('[WARN] - Could not read tab options')
    }
  }

  private onSelectTab = async (event: MouseEvent, step: BalTabOption) => {
    if (step.prevent || step.disabled || !this.clickable) {
      stopEventBubbling(event)
    }

    if (!step.disabled) {
      if (step.navigate) {
        step.navigate.emit(event)
      }
      if (this.clickable) {
        if (step.value !== this.value) {
          this.balChange.emit(step.value)
          await this.select(step)
        }
      }
    }
  }

  /**
   * RENDER
   * ------------------------------------------------------
   */

  render() {
    const block = BEM.block('tabs')

    const isMobile = isPlatform('mobile')
    const isTablet = isPlatform('tablet')
    const isPropVertical = this.parseVertical() === true
    const isVerticalMobile = isMobile && (this.vertical === 'mobile' || this.vertical === 'tablet')
    const isVerticalTablet = (isMobile || isTablet) && this.vertical === 'tablet'

    const isVertical = isPropVertical || isVerticalMobile || isVerticalTablet
    const hasCarousel = !isVertical && this.overflow

    const isSelect = isMobile && this.selectOnMobile

    const tabs = this.store.map(tab => ({ ...tab, active: tab.value === this.value }))

    return (
      <Host
        class={{
          ...block.class(),
          ...block.modifier('vertical').class(isVertical),
          ...block.modifier('fullwidth').class(this.expanded || this.fullwidth),
        }}
        data-value={this.store
          .filter(t => this.isActive(t))
          .map(t => t.value)
          .join(',')}
        data-label={this.store
          .filter(t => this.isActive(t))
          .map(t => t.label)
          .join(',')}
      >
        {isSelect ? (
          <TabSelect value={this.value} items={tabs} onSelectTab={this.onSelectTab}></TabSelect>
        ) : (
          <TabNav
            items={tabs}
            tabsId={this.tabsId}
            onSelectTab={this.onSelectTab}
            clickable={this.clickable}
            animated={this.animated}
            border={this.border}
            spaceless={this.spaceless}
            expanded={this.expanded}
            isMobile={isMobile}
            isVertical={isVertical}
            hasCarousel={hasCarousel}
            iconPosition={this.iconPosition}
            verticalColSize={this.verticalColSize}
          ></TabNav>
        )}
        <div
          id={this.tabsId}
          class={{
            ...block.element('tabs__content').class(),
          }}
        >
          <slot></slot>
        </div>
      </Host>
    )
  }
}

let TabsIds = 0
