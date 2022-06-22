import { Component, Element, h, Host, Listen } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { isPlatform } from '../../../utils/platform'

@Component({
  tag: 'bal-main-navigation-actions',
  scoped: false,
  shadow: false,
})
export class MainNavigationActions {
  @Element() el!: HTMLBalMainNavigationActionsElement
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
        console.log('mobile button ', button)
      }
    })
  }

  connectedCallback() {
    this.actionButtons = Array.from(this.el.querySelectorAll('bal-button'))
    this.handleResize()
    console.log('buttons', this.actionButtons)
  }

  render() {
    const actionsEl = BEM.block('mainnav').element('metabar').element('actions')

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
