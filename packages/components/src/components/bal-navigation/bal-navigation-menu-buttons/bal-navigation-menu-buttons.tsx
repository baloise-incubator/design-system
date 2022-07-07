import { Component, h, Host, Element, Listen } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { isPlatform } from '../../../utils/platform'

@Component({
  tag: 'bal-navigation-menu-buttons',
  scoped: false,
  shadow: false,
})
export class NavigationMenuButtons {
  @Element() el!: HTMLBalNavigationMenuButtonsElement
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
    const navMenuButtonsEl = BEM.block('nav').element('metabar').element('menu').element('buttons')

    return (
      <Host class={{ ...navMenuButtonsEl.class() }}>
        <slot></slot>
      </Host>
    )
  }
}
