import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-main-navigation-second-bar',
})
export class MainNavigationSecondBar implements ComponentInterface {
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
    const mainBarEl = BEM.block('mainnav').element('mainbar')

    return (
      <Host
        class={{
          ...mainBarEl.class(),
          'is-hidden-touch': true,
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
