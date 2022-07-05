import { Component, h, Host, Element, Prop } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-main-navigation-menu-panel-list-item',
  scoped: false,
  shadow: false,
})
export class BalMainNavigationMenuPanelListItem {
  @Element() el!: HTMLBalMainNavigationMenuPanelListItemElement
  @Prop() href?: string

  render() {
    const navMenuPanelListItemEl = BEM.block('mainnav')
      .element('metabar')
      .element('menu')
      .element('content')
      .element('panel')
      .element('list')
      .element('item')

    return (
      <Host
        class={{
          'is-block': true,
          ...navMenuPanelListItemEl.class(),
        }}
      >
        <a class="is-block mt-2" href={this.href}>
          <slot></slot>
        </a>
      </Host>
    )
  }
}
