import { Component, h, ComponentInterface, Host, Element, Prop, Event, EventEmitter, State } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-main-navigation-meta-bar',
})
export class MainNavigationMetaBar implements ComponentInterface {
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
    const metaNavbar = this.el.closest('bal-main-navigation-meta-bar')
    if (metaNavbar) {
      const mainNavbarMenuElement = metaNavbar.querySelector('bal-main-navigation-menu')
      if (mainNavbarMenuElement) {
        await mainNavbarMenuElement.toggle(this.isMenuActive)
      }
    }
  }

  async onClick() {
    await this.toggle(!this.isMenuActive)
  }

  render() {
    const metaBarEl = BEM.block('mainnav').element('metabar')

    return (
      <Host
        class={{
          ...metaBarEl.class(),
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
              ...metaBarEl.element('burger').class(),
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
