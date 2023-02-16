import { Component, Host, h, Prop, Method, State, Element, EventEmitter, Event } from '@stencil/core'
import { Props } from '../../../types'
import { Attributes, inheritTrackingAttributes } from '../../../utils/attributes'
import { BalTabOption } from '../bal-tab.type'

@Component({
  tag: 'bal-tab-item',
})
export class TabItem {
  private inheritAttributes: Attributes = {}

  @Element() el!: HTMLElement

  @State() isActive = false

  /**
   * Tells if this route is active and overrides the bal-tabs value property.
   */
  @Prop({ reflect: true }) active = false

  /**
   * This is the key of the tab.
   */
  @Prop({ reflect: true }) value = ''

  /**
   * Label for the tab.
   */
  @Prop({ reflect: true }) label = ''

  /**
   * Link to path.
   */
  @Prop({ reflect: true }) href = ''

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   */
  @Prop() target: Props.BalButtonTarget = '_self'

  /**
   * If `true` a small red bubble is added to the tab.
   */
  @Prop({ reflect: true }) bubble: boolean | string = false

  /**
   * If `true` the tab is disabled.
   */
  @Prop({ reflect: true }) disabled = false

  /**
   * If `true` the step is hidden.
   */
  @Prop({ reflect: true }) hidden = false

  /**
   * Tell's if the linking is done by a router.
   */
  @Prop() prevent = false

  /**
   * Tab icon not available for the steps.
   */
  @Prop({ reflect: true }) icon?: string = undefined

  /**
   * Emitted when the link element has clicked
   */
  @Event() balNavigate!: EventEmitter<MouseEvent>

  componentWillLoad() {
    this.inheritAttributes = inheritTrackingAttributes(this.el)
  }

  /**
   * Options of the tab like label, value etc.
   */
  @Method()
  async getOptions(): Promise<BalTabOption> {
    return this.options
  }

  /**
   * Sets the tab active.
   */
  @Method()
  async setActive(active: boolean): Promise<void> {
    this.isActive = active
  }

  get options() {
    return {
      value: this.value,
      icon: this.icon,
      label: this.label,
      href: this.href,
      target: this.target,
      active: this.active,
      disabled: this.disabled,
      hidden: this.hidden,
      bubble: this.bubble,
      passed: false,
      prevent: this.prevent,
      navigate: this.balNavigate,
      trackingData: this.inheritAttributes,
    }
  }

  render() {
    return (
      <Host
        role="tabpanel"
        class={{
          'bal-tab-item': true,
          'bal-tab-item--active': this.isActive,
        }}
      >
        <slot />
      </Host>
    )
  }
}
