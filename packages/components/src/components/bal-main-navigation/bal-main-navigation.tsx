import { Component, h, ComponentInterface, Host, Element, Prop, Event, EventEmitter, State } from '@stencil/core'
import { BEM } from '../../utils/bem'

@Component({
  tag: 'bal-main-navigation',
})
export class MainNavigation implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * Link of the logo
   */
  @Prop() logoPath = '/'

  /**
   * TODO: describe
   */
  @Prop() container: 'fluid' | 'detail-page' | 'compact' | 'blog-page' | 'wide' | '' = ''

  @State() isMenuActive = false

  /**
   * Emitted when the link element has clicked
   */
  @Event() balNavigate!: EventEmitter<MouseEvent>

  componentWillLoad() {
    if (window.matchMedia) {
      window.matchMedia('(min-width: 1023px)').addEventListener('change', this.resetIsMenuActive.bind(this))
    }
  }

  async resetIsMenuActive(ev: MediaQueryListEvent) {
    if (ev.matches) {
      await this.toggle(false)
    }
  }

  async toggle(isMenuActive: boolean): Promise<void> {
    this.isMenuActive = isMenuActive
    const mainNavbar = this.el.closest('bal-main-navigation')
    if (mainNavbar) {
      const mainNavbarMenuElement = mainNavbar.querySelector('bal-main-navigation-menu')
      if (mainNavbarMenuElement) {
        await mainNavbarMenuElement.toggle(this.isMenuActive)
      }
    }
  }

  async onClick() {
    await this.toggle(!this.isMenuActive)
  }

  render() {
    const mainNavigationEl = BEM.block('metanav')

    return (
      <Host
        class={{
          ...mainNavigationEl.class(),
        }}
      >
        <nav
          role="navigation"
          aria-label="main navigation"
          class={{
            container: true,
            [`is-${this.container}`]: this.container !== '',
          }}
        >
          <a
            class={{ 'is-hidden-desktop': true }}
            href={this.logoPath}
            onClick={(event: MouseEvent) => this.balNavigate.emit(event)}
          >
            <bal-logo size="small" color="blue" />
          </a>
          <slot name="tabs"></slot>
          <slot name="menu"></slot>
          <slot name="actions"></slot>
          <bal-button
            class={{
              'is-hidden-desktop': true,
              ...mainNavigationEl.element('burger').class(),
            }}
            color="light"
            square
            icon={this.isMenuActive ? 'close' : 'menu-bars'}
            onClick={() => this.onClick()}
          ></bal-button>
        </nav>
      </Host>
    )
  }
}
