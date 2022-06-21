import { Component, h, Host } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-main-navigation-menu-content',
  scoped: false,
  shadow: false,
})
export class MainNavigationMenuContent {
  render() {
    const contentEl = BEM.block('metanav').element('menu').element('content')

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
