import { h, Component, ComponentInterface, Host, Prop } from '@stencil/core'
import { BEM } from '../../../utils/bem'
import { Action, MetaLevelInfo } from '../bal-navigation.types'
import { attachActions } from '../utils/action.util'

@Component({
  tag: 'bal-navigation-meta',
  styleUrls: {
    css: 'bal-navigation-meta.sass',
  },
})
export class NavigationMeta implements ComponentInterface {
  private containerElement?: HTMLElement

  @Prop() levels: MetaLevelInfo[] = []
  @Prop() actions: Action[] = []

  @Prop() container: BalProps.BalNavigationContainer = ''

  componentDidRender() {
    attachActions(this.containerElement, this.actions)
  }

  render() {
    const block = BEM.block('nav-meta')
    const hasContainerType = this.container !== ''
    const cssContainerType = hasContainerType ? `is-${this.container}` : ''

    return (
      <Host class={{ ...block.class() }}>
        <bal-tabs inverted spaceless>
          {this.levels.map(level => (
            <bal-tab-item label={level.label} value={level.value}></bal-tab-item>
          ))}
        </bal-tabs>
        <div class={{ ...block.element('nav').class(), [cssContainerType]: hasContainerType }}>
          <div class={{ ...block.element('nav').element('tabs').class() }}>
            <div>
              <bal-tabs inverted spaceless>
                {this.levels.map(level => (
                  <bal-tab-item label={level.label} value={level.value}></bal-tab-item>
                ))}
              </bal-tabs>
            </div>
          </div>
          <div class={{ ...block.element('nav').element('actions').class() }}>
            <div ref={div => (this.containerElement = div)}></div>
          </div>
        </div>
      </Host>
    )
  }
}
