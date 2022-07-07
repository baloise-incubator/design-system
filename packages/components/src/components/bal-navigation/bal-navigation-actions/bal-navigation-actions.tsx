import { Component, Element, h, Host, Listen } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { isPlatform } from '../../../utils/platform'

@Component({
  tag: 'bal-navigation-actions',
  scoped: false,
  shadow: false,
})
export class NavigationActions {
  @Element() el!: HTMLBalNavigationActionsElement
  private actionButtons!: HTMLBalButtonElement[]

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.actionButtons.map(button => {
      if (isPlatform('desktop')) {
        button.setAttribute('size', 'small')
        button.setAttribute('inverted', 'true')
      } else {
        button.setAttribute('size', '')
        button.setAttribute('inverted', 'false')
      }
    })
  }

  connectedCallback() {
    this.actionButtons = Array.from(this.el.querySelectorAll('bal-button'))
    this.handleResize()
  }

  render() {
    const actionsEl = BEM.block('nav').element('metabar').element('actions')

    return (
      <Host
        class={{
          ...actionsEl.class(),
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
