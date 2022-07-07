import { Component, h, Host } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-navigation-links',
  scoped: false,
  shadow: false,
})
export class NavigationLinks {
  render() {
    const linksEl = BEM.block('nav').element('metabar').element('links')

    return (
      <Host
        class={{
          ...linksEl.class(),
          'is-hidden-touch': true,
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
