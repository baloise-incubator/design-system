import { Component, h, Host, Element, Listen } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { isPlatform } from '../../../utils/platform'

@Component({
  tag: 'bal-main-navigation-menu-buttons',
  scoped: false,
  shadow: false,
})
export class BalMainNavigationMenuButtons {
  @Element() el!: HTMLBalMainNavigationMenuButtonsElement
  private buttons!: HTMLBalButtonElement[]

  @Listen('resize', { target: 'window' })
  resizeHandler() {
    this.buttons.map(button => {
      if (isPlatform('desktop')) {
        button.setAttribute('size', 'small')
        button.setAttribute('color', 'light')
      } else {
        button.setAttribute('size', '')
        button.setAttribute('color', 'primary')
      }
    })
  }

  connectedCallback() {
    this.buttons = Array.from(this.el.querySelectorAll('bal-button'))
    this.resizeHandler()
  }

  render() {
    const navMenuEndEl = BEM.block('metanav').element('menu').element('buttons')

    return (
      <Host class={{ ...navMenuEndEl.class() }}>
        <slot></slot>
      </Host>
    )
  }
}
