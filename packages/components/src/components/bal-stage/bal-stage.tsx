import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'
import { Props } from '../../props'

@Component({
  tag: 'bal-stage',
})
export class Stage implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * Defines the background color of the stage section
   */
  @Prop() color: Props.BalStageColor = 'white'

  /**
   * sets text color to white for images and dark backgrounds (optional)
   */
  @Prop() inverted: undefined | boolean = undefined

  render() {
    return (
      <Host
        class={{
          'bal-stage': true,
          [`bal-stage--is-${this.color}`]: true,
          'bal-stage--is-inverted': this.inverted === true || this.color === 'blue',
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
