import { Component, h, Host } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-main-navigation-links',
  scoped: false,
  shadow: false,
})
export class MainNavigationLinks {
  render() {
    const linksEl = BEM.block('mainnav').element('metabar').element('links')

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
