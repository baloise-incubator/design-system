import { Component, h, ComponentInterface, Host, Element, Prop, Event, EventEmitter, State } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-navigation-meta-bar',
})
export class NavigationMetaBar implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * Link of the logo
   */
  @Prop() logoPath = '/'

  // @Prop() ariaLabel!: string

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
    const metaNavbar = this.el.closest('bal-navigation-meta-bar')
    if (metaNavbar) {
      const navbarMenuElement = metaNavbar.querySelector('bal-navigation-menu')
      if (navbarMenuElement) {
        await navbarMenuElement.toggle(this.isMenuActive)
      }
    }
  }

  async onClick() {
    await this.toggle(!this.isMenuActive)
  }

  render() {
    const metaBarEl = BEM.block('nav').element('metabar')

    return (
      <Host
        class={{
          ...metaBarEl.class(),
        }}
      >
        <nav role="navigation" aria-label="TODO i18n meta nav">
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
