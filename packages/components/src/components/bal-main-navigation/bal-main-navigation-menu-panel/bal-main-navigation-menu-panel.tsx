import { Component, h, Host, Element, Prop, State, Listen } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { isPlatform } from '../../../utils/platform'

@Component({
  tag: 'bal-main-navigation-menu-panel',
  scoped: false,
  shadow: false,
})
export class BalMainNavigationMenuPanel {
  @Element() el!: HTMLBalMainNavigationMenuPanelElement
  @Prop() linkHref?: string
  @Prop() linkName?: string
  @State() isTouch: boolean = isPlatform('touch')

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.isTouch = isPlatform('touch')
  }

  render() {
    const navMenuPanelEl = BEM.block('mainnav').element('metabar').element('menu').element('content').element('panel')

    return (
      <Host
        class={{
          'is-block': true,
          ...navMenuPanelEl.class(),
        }}
      >
        {this.linkHref && (
          <a class="is-block is-small" href={this.linkHref}>
            {this.linkName}
          </a>
        )}
        <div class="columns is-multiline">
          <div class={{ 'column is-full is-6-desktop is-two-thirds-widescreen': true, 'py-0': this.isTouch }}>
            <slot name="left"></slot>
          </div>
          <div class={{ 'column is-full is-6-desktop is-one-third-widescreen': true, 'pt-0': this.isTouch }}>
            <slot name="right"></slot>
          </div>
        </div>
      </Host>
    )
  }
}
