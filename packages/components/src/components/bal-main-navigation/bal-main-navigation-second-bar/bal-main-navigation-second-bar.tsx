import { Component, h, ComponentInterface, Host, Element, Prop, Event, EventEmitter } from '@stencil/core'
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
   * Emitted when the link element has clicked
   */
  @Event() balNavigate!: EventEmitter<MouseEvent>

  render() {
    const mainBarEl = BEM.block('mainnav').element('mainbar')

    return (
      <Host
        class={{
          ...mainBarEl.class(),
          'is-hidden-touch': true,
        }}
      >
        <nav role="navigation" aria-label="Secondary navigation TODO i18n" class={{}}>
          <a class="pt-4 pb-4" href={this.logoPath} onClick={(event: MouseEvent) => this.balNavigate.emit(event)}>
            <bal-logo size="normal" color="blue" />
          </a>
          <slot name="second-tabs"></slot>
        </nav>
      </Host>
    )
  }
}
