import { Component, h, Host, Element, Prop, Listen, State } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { isPlatform } from '../../../utils/platform'

@Component({
  tag: 'bal-main-navigation-menu-panel-list',
  scoped: false,
  shadow: false,
})
export class BalMainNavigationMenuPanelList {
  @Element() el!: HTMLBalMainNavigationMenuPanelListElement
  @Prop() isService = false
  @Prop() headline?: string
  @Prop() href?: string
  @State() isMobile: boolean = isPlatform('mobile')

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.isMobile = isPlatform('mobile')
  }

  render() {
    const navMenuPanelListEl = BEM.block('mainnav')
      .element('metabar')
      .element('menu')
      .element('content')
      .element('panel')
      .element('list')

    return (
      <Host
        class={{
          'is-block mb-7': true,
          ...navMenuPanelListEl.class(),
        }}
      >
        <bal-card class="m-0" flat color={`${this.isService ? 'grey' : ''}`}>
          <bal-card-content class={{ 'py-0': !this.isService, 'px-0': !this.isMobile && !this.isService }}>
            <a href={this.href}>
              <bal-heading class="mb-4" level="h5" visual-level="h4" space="none">
                {this.headline}
              </bal-heading>
            </a>
            <slot name="links"></slot>
          </bal-card-content>
        </bal-card>
      </Host>
    )
  }
}
