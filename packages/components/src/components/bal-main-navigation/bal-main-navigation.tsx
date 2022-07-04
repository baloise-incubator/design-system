import { Component, h, ComponentInterface, Host, Element } from '@stencil/core'
import { BEM } from '../../utils/bem'

@Component({
  tag: 'bal-main-navigation',
})
export class MainNavigation implements ComponentInterface {
  @Element() el!: HTMLElement

  render() {
    const mainNavigationEl = BEM.block('mainnav')

    return (
      <Host
        class={{
          ...mainNavigationEl.class(),
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
