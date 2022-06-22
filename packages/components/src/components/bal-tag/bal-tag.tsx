import { Component, EventEmitter, h, Host, Prop, Event, Element } from '@stencil/core'
import { inheritAttributes } from '../../helpers/helpers'
import { BEM } from '../../utils/bem'
import { Props, Events } from '../../types'

@Component({
  tag: 'bal-tag',
  scoped: false,
  shadow: false,
})
export class Tag {
  @Element() el!: HTMLElement

  private inheritedAttributes: { [k: string]: any } = {}

  /**
   * The theme type of the tag. Given by bulma our css framework.
   */
  @Prop() color: Props.BalTagColor = ''

  /**
   * The size of the tag element
   */
  @Prop() size: Props.BalTagSize = ''

  /**
   * The theme type of the tag. Given by bulma our css framework.
   */
  @Prop() closable = false

  /**
   * If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants.
   */
  @Prop() disabled = false

  /**
   * If `true` a light version of the color is displayed
   */
  @Prop() light = false

  /**
   * @deprecated
   * @internal
   * Sets background color to transparent
   */
  @Prop() transparent = false

  /**
   * Emitted when the input got clicked.
   */
  @Event() balCloseClick!: EventEmitter<Events.BalTagCloseClickDetail>

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'title'])
  }

  render() {
    const block = BEM.block('tag')
    const elLabel = block.element('label')
    const hasSize = this.size !== ''
    const sizeClass = `is-${this.size}`
    const hasColor = this.color !== ''
    const colorClass = `is-${this.color}${this.light ? '-light' : ''}`
    const disabledClass = 'is-disabled'
    const hasDisabled = this.disabled

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          ...block.class(),
          ...block.modifier(sizeClass).class(hasSize),
          ...block.modifier(colorClass).class(hasColor),
          ...block.modifier(disabledClass).class(hasDisabled),
        }}
        {...this.inheritedAttributes}
      >
        <span
          class={{
            ...elLabel.class(),
            ...elLabel.modifier(sizeClass).class(hasSize),
            ...elLabel.modifier(colorClass).class(hasColor),
          }}
        >
          <slot />
        </span>
        <bal-close
          class={{
            ...block.element('close').class(),
          }}
          style={{
            display: this.closable && !this.disabled ? 'flex' : 'none',
          }}
          size={this.size}
          inverted={['blue', 'primary', 'info', 'success', 'warning', 'danger'].includes(this.color) && !this.light}
          onClick={(event: MouseEvent) => this.balCloseClick.emit(event)}
        ></bal-close>
      </Host>
    )
  }
}
