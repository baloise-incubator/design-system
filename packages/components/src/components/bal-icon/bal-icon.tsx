import { Component, h, Host, Prop, Watch } from '@stencil/core'
import * as balIcons from '@baloise/design-system-next-icons'
import upperFirst from 'lodash.upperfirst'
import camelCase from 'lodash.camelcase'
import { Props } from '../../types'
import { BEM } from '../../utils/bem'

@Component({
  tag: 'bal-icon',
})
export class Icon {
  /**
   * Name of the baloise icon.
   */
  @Prop({ reflect: true }) name = ''

  /**
   * Svg content.
   */
  @Prop() svg = ''

  /**
   * The theme type of the button. Given by bulma our css framework.
   */
  @Prop() color: Props.BalIconColor = ''

  /**
   * If `true` the icon has display inline style
   */
  @Prop() inline = false

  /**
   * If `true` the icon is inverted
   */
  @Prop() inverted = false

  /**
   * If `true` the icon is rotated 180deg
   */
  @Prop() turn = false

  /**
   * @deprecated
   * Defines the size of the icon.
   */
  @Prop() size: Props.BalIconSize = ''

  @Watch('size')
  sizeHandler() {
    if (this.size) {
      console.warn('[DEPRECATED] - The Design System only support one size of 16px = 1rem')
    }
  }

  private get svgContent() {
    if (balIcons && this.name && this.name.length > 0) {
      // We are doing this to avoid breaking change.
      if (this.name.startsWith('alert')) {
        this.name = 'alert-triangle'
      }
      if (this.name.startsWith('info')) {
        this.name = 'info-circle'
      }
      const icon: string | undefined = (balIcons as { [key: string]: string })[
        `balIcon${upperFirst(camelCase(this.name))}`
      ]
      if (icon) {
        return icon
      }
    }

    return this.svg || ''
  }

  connectedCallback() {
    this.sizeHandler()
  }

  render() {
    const color = ['white', 'blue', 'grey', 'danger', 'warning', 'success'].includes(this.color) ? this.color : 'blue'

    const block = BEM.block('icon')

    return (
      <Host
        class={{
          ...block.class(),
          ...block.modifier('is-inverted').class(this.inverted),
          ...block.modifier('is-inline').class(this.inline),
          ...block.modifier(`is-${color}`).class(),
        }}
      >
        <div
          class={{
            ...block.element('inner').class(),
            ...block.element('inner').modifier('turn').class(this.turn),
          }}
          innerHTML={this.svgContent}
        ></div>
      </Host>
    )
  }
}
