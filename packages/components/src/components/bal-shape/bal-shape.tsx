import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'
import { BEM } from '../../utils/bem'

@Component({
  tag: 'bal-shape',
})
export class Shape implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * The shape variation
   */
  @Prop() variation: '1' | '2' | '3' = '1'

  /**
   * The shape color
   */
  @Prop() color:
    | 'green'
    | 'green-light'
    | 'red'
    | 'red-light'
    | 'purple'
    | 'purple-light'
    | 'tangerine'
    | 'tangerine-light' = 'green'

  /**
   * The shape rotation
   */
  @Prop() rotation?: 0 | 90 | 180 | 270 = 0

  render() {
    const block = BEM.block('shape')

    return (
      <Host
        class={{
          ...block.class(),
          ...block.modifier(`is-variation-${this.variation}`).class(),
          ...block.modifier(`is-${this.color}`).class(),
          ...block.modifier(`is-${this.rotation}-deg`).class(!!this.rotation),
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Host>
    )
  }
}
