import { Component, h, Host, Method, State, Element } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-main-navigation-menu',
  scoped: false,
  shadow: false,
})
export class NavbarMenu {
  @Element() element!: HTMLElement
  @State() isMenuActive = false

  /**
   * @internal - If the menu is open it closes it and the other way around.
   */
  @Method()
  async toggle(isMenuActive: boolean): Promise<void> {
    this.isMenuActive = isMenuActive
  }

  render() {
    const navMenuEl = BEM.block('mainnav').element('metabar').element('menu')

    return (
      <Host
        class={{
          ...navMenuEl.class(),
          ...navMenuEl.modifier('active').class(this.isMenuActive),
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
