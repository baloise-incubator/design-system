import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'
import { BEM } from '../../utils/bem'

@Component({
  tag: 'bal-main-navigation',
})
export class MainNavigation implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * Link of the logo
   */
  @Prop() logoPath = '/'

  /**
   * TODO: describe
   */
  @Prop() container: 'fluid' | 'detail-page' | 'compact' | 'blog-page' | 'wide' | '' = ''

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
