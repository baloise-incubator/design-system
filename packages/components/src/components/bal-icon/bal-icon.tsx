import { Component, h, Host, Prop } from '@stencil/core'
import * as balIcons from '@baloise/design-system-next-icons'
import upperFirst from 'lodash.upperfirst'
import camelCase from 'lodash.camelcase'
import { BalButtonColor } from '../../types'

@Component({
  tag: 'bal-icon',
})
export class Icon {
  /**
   * Name of the baloise icon.
   */
  @Prop() name = ''

  /**
   * Svg content.
   */
  @Prop() svg = ''

  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | '' = ''

  /**
   * The theme type of the button. Given by bulma our css framework.
   */
  @Prop() color: BalButtonColor = 'info'

  /**
   * If `true` the button is inverted
   */
  @Prop() inverted = false

  /**
   * If `true` the icon rotates like for a loading spinner
   */
  @Prop() rotate = false

  /**
   * If `true` the icon is rotated 180deg
   */
  @Prop() turn = false

  private get svgContent() {
    if (balIcons && this.name && this.name.length > 0) {
      const icon: string | undefined = (balIcons as any)[`balIcon${upperFirst(camelCase(this.name))}`]
      if (icon) {
        return icon
      }
    }

    return this.svg || ''
  }

  render() {
    return (
      <Host
        class={{
          [`is-size-${this.size}`]: !!this.size,
          [`is-inverted`]: this.inverted,
          [`is-${this.color}`]: true,
          [`turn`]: this.turn,
          [`rotate`]: this.rotate,
        }}
      >
        <div class="bal-icon-inner" innerHTML={this.svgContent}></div>
      </Host>
    )
  }
}
