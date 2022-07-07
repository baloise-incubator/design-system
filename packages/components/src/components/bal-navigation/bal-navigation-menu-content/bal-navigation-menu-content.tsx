import { Component, h, Host } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-navigation-menu-content',
  scoped: false,
  shadow: false,
})
export class NavigationMenuContent {
  render() {
    const contentEl = BEM.block('nav').element('metabar').element('menu').element('content')

    return (
      <Host
        class={{
          ...contentEl.class(),
          'is-hidden-desktop': true,
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
