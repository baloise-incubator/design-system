import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core'
import { Props } from '../../../types'
import { BEM } from '../../../utils/bem'
import { Loggable, Logger, LogInstance } from '../../../utils/log'

@Component({
  tag: 'bal-content',
  styleUrls: {
    css: './bal-content.sass',
  },
})
export class BalContent implements ComponentInterface, Loggable {
  log!: LogInstance

  @Logger('bal-content')
  createLogger(log: LogInstance) {
    this.log = log
  }

  /**
   * PUBLIC PROPERTY API
   * ------------------------------------------------------
   */

  /**
   * Defines the position of the child elements if they
   * are showed verticaly or horizontally. Default is verticaly.
   */
  @Prop() direction: Props.BalContentDirection = ''

  /**
   * Defines the text positioning like center, end or
   * default to start.
   */
  @Prop() alignment: Props.BalContentAlignment = ''

  /**
   * Defines the space between the child elements.
   */
  @Prop() space: Props.BalContentSpace = ''

  /**
   * RENDER
   * ------------------------------------------------------
   */

  render() {
    const block = BEM.block('content')
    const direction = !!this.direction
    const alignment = !!this.alignment
    const space = !!this.space

    return (
      <Host
        class={{
          ...block.class(),
          ...block.modifier(`direction-${this.direction}`).class(direction),
          ...block.modifier(`alignment-${this.alignment}`).class(alignment),
          ...block.modifier(`space-${this.space}`).class(space),
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
