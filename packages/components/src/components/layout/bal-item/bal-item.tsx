import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core'
import { Props } from '../../../types'
import { BEM } from '../../../utils/bem'
import { Loggable, Logger, LogInstance } from '../../../utils/log'

@Component({
  tag: 'bal-item',
  styleUrls: {
    css: './bal-item.sass',
  },
})
export class BalItem implements ComponentInterface, Loggable {
  log!: LogInstance

  @Logger('bal-item')
  createLogger(log: LogInstance) {
    this.log = log
  }

  /**
   * PUBLIC PROPERTY API
   * ------------------------------------------------------
   */

  /**
   * Defines the position of the child elements if they
   * are showed verticaly or horizontally. Default is horizontally.
   */
  @Prop() direction: Props.BalItemDirection = ''

  /**
   * Defines the text positioning like center, right or
   * default to left.
   */
  @Prop() alignment: Props.BalItemAlignment = ''

  /**
   * Defines the space between the child elements.
   */
  @Prop() space: Props.BalItemSpace = ''

  /**
   * RENDER
   * ------------------------------------------------------
   */
  render() {
    const block = BEM.block('item')
    const direction = !!this.direction
    const space = !!this.space
    const alignment = !!this.alignment

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
