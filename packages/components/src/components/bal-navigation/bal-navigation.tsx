import { Component, h, ComponentInterface, Host, Element, State, Prop, Listen } from '@stencil/core'
import { BEM } from '../../utils/bem'
import { MutationHandler } from '../../utils/mutations'
import { ResizeHandler } from '../../utils/resize'
import { getPlatforms } from '../../utils/platform'
import { Action, LevelInfo, NavigationBreakpoints } from './bal-navigation.types'

@Component({
  tag: 'bal-navigation',
  styleUrls: {
    css: 'bal-navigation.sass',
  },
})
export class Navigation implements ComponentInterface {
  @Element() el!: HTMLElement

  private mutationHandler = MutationHandler({ tags: ['bal-navigation-levels', 'bal-navigation-action'] })
  private resizeWidthHandler = ResizeHandler()

  @State() levels: LevelInfo[] = []
  @State() actions: Action[] = []
  @State() breakpoints: NavigationBreakpoints = 'widescreen'

  /**
   * PUBLIC PROPERTY API
   * ------------------------------------------------------
   */

  /**
   * Defines if the animation should be active
   */
  @Prop() logoAnimated = true
  /**
   * Path to the logo-image
   */
  @Prop() logoPath = '/'
  /**
   * Aria label for the meta-navigation-wrapper
   */
  @Prop() ariaLabelMeta = ''
  /**
   * Aria label for the main-navigation-wrapper
   */
  @Prop() ariaLabelMain = ''
  /**
   * Defines the initially active meta-navigation-item
   */
  @Prop() metaValue?: string

  /**
   * LIFECYCLE
   * ------------------------------------------------------
   */

  async connectedCallback() {
    this.updateBreakpoints()
    await this.onMutation()
    this.mutationHandler.connect(this.el, () => this.onMutation())
  }

  componentWillLoad() {
    this.updateBreakpoints()
  }

  disconnectedCallback() {
    this.mutationHandler.disconnect()
  }

  /**
   * LISTENERS
   * ------------------------------------------------------
   */

  @Listen('resize', { target: 'window' })
  async resizeListener() {
    this.resizeWidthHandler(() => this.updateBreakpoints())
  }

  @Listen('orientationchange', { target: 'window' })
  async orientationHandler() {
    this.updateBreakpoints()
  }

  private async onMutation() {
    this.readSubLevels()
    this.readActions()
  }

  /**
   * PUBLIC METHODS
   * ------------------------------------------------------
   */

  /**
   * PRIVATE METHODS
   * ------------------------------------------------------
   */

  private updateBreakpoints = () => {
    const platforms = getPlatforms()
    let newBreakpoint: NavigationBreakpoints = 'desktop'
    if (platforms.includes('touch')) {
      newBreakpoint = 'touch'
    } else if (platforms.includes('highDefinition')) {
      newBreakpoint = 'highDefinition'
    } else if (platforms.includes('widescreen')) {
      newBreakpoint = 'widescreen'
    } else if (platforms.includes('fullhd')) {
      newBreakpoint = 'widescreen'
    } else {
      newBreakpoint = 'desktop'
    }

    if (this.breakpoints !== newBreakpoint) {
      this.breakpoints = newBreakpoint
    }
  }

  private async readActions() {
    const actions = Array.from(this.el.querySelectorAll('bal-navigation-action'))
    this.actions = actions.map(action => ({
      component: action.component,
      componentProps: action.componentProps,
      componentCssClass: action.cssClass,
    }))
    // console.warn(this.actions)
  }

  private async readSubLevels() {
    const levelEl = this.el.querySelector('bal-navigation-levels')
    const levels = await levelEl?.getLevelInfos()
    if (levels) {
      this.levels = levels
    }
  }

  /**
   * EVENT BINDING
   * ------------------------------------------------------
   */

  /**
   * RENDER
   * ------------------------------------------------------
   */

  render() {
    // console.log('RENDER', this.breakpoints, this.levels)
    const navigationEl = BEM.block('nav')
    const isTouch = this.breakpoints === 'touch'

    return (
      <Host
        class={{
          ...navigationEl.class(),
        }}
      >
        {/* <bal-navigation-desktop levels={this.levels} breakpoints={this.breakpoints}></bal-navigation-desktop> */}
        <div class="is-hidden">
          <p slot="nested-bubu">
            <slot name="bubu" />
          </p>
        </div>

        {isTouch ? (
          <bal-navigation-touch levels={this.levels} actions={this.actions}></bal-navigation-touch>
        ) : (
          <bal-navigation-desktop
            levels={this.levels}
            actions={this.actions}
            breakpoints={this.breakpoints}
          ></bal-navigation-desktop>
        )}
      </Host>
    )
  }
}
