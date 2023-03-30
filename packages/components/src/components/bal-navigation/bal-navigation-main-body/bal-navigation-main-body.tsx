import { Component, h, ComponentInterface, Host } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-navigation-main-body',
})
export class NavigationMainBody implements ComponentInterface {
  render() {
    const mainBodyEl = BEM.block('nav').element('main').element('body')

    return (
      <Host class={{ ...mainBodyEl.class() }}>
        <slot></slot>
      </Host>
    )
  }
}
