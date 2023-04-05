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
   * RENDER
   * ------------------------------------------------------
   */
  render() {
    const block = BEM.block('item')
    const direction = !!this.direction
    const alignment = !!this.alignment

    return (
      <Host
        class={{
          ...block.class(),
          ...block.modifier(`direction-${this.direction}`).class(direction),
          ...block.modifier(`alignment-${this.alignment}`).class(alignment),
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
