import { Component, Host, h, Prop, Method, Element, State, Event, EventEmitter } from '@stencil/core'
import { ColorTypes, BalButtonColor } from '../../../types/color.types'

@Component({
  tag: 'bal-snackbar',
})
export class Snackbar {
  @Element() element!: HTMLElement

  timer!: NodeJS.Timer
  snackbarId = `bal-snackbar-${snackbarIds++}`

  @State() animationClass = 'fadeInDown'

  /**
   * The theme type of the snackbar. Given by bulma our css framework.
   */
  @Prop() color: ColorTypes | '' = ''

  /**
   * The duration of the snackbar
   */
  @Prop() duration: number = 0

  /**
   * The subject of the snackbar header
   */
  @Prop() subject: string = ''

  /**
   * The message of the snackbar
   */
  @Prop() message: string = ''

  /**
   * The icon of the snackbar header
   */
  @Prop() icon: string = ''

  /**
   * Label text for the action button
   */
  @Prop() action: string = ''

  /**
   * @internal Handler for on close event
   */
  @Prop() closeHandler: () => void = () => {}

  /**
   * @internal Handler for on action button click event
   */
  @Prop() actionHandler: () => void = () => {}

  /**
   * Emitted when snackbar is closed
   */
  @Event() balClose!: EventEmitter<string>

  /**
   * Emitted when the action button is clicked
   */
  @Event() balAction!: EventEmitter<string>

  async componentWillLoad() {
    if (this.duration > 0) {
      await this.closeIn(this.duration)
    }
  }

  /**
   * Closes the snackbar after the given duration in ms
   */
  @Method()
  async closeIn(duration: number): Promise<void> {
    this.timer = setTimeout(() => this.close(), duration)
  }

  /**
   * Closes this snackbar
   */
  @Method()
  async close(): Promise<void> {
    clearTimeout(this.timer)
    this.balClose.emit(this.snackbarId)
    this.element.remove()
    this.closeHandler()
  }

  onActionHandler = () => {
    this.balAction.emit(this.snackbarId)
    this.actionHandler()
  }

  get colorType() {
    if (this.color === '') {
      return ''
    }
    return `is-${this.color}`
  }

  get buttonType(): BalButtonColor {
    if (this.color === '') {
      return 'info'
    }
    return this.color
  }

  render() {
    return (
      <Host id={this.snackbarId}>
        <div role="alert" class={`snackbar ${this.animationClass} ${this.colorType}`}>
          <div class="snackbar-header">
            <span class="icon-text">
              <span class="icon" style={{ display: this.icon ? '' : 'none' }}>
                <bal-icon name={this.icon} inverted={this.color !== ''}></bal-icon>
              </span>
              <bal-heading level="h4" inverted={this.color !== ''} space="none">
                {this.subject}
              </bal-heading>
            </span>
          </div>
          <bal-text innerHTML={this.message}>
            <slot />
          </bal-text>
          <bal-icon name="close" class="close" inverted={this.color !== ''} size="xsmall" onClick={() => this.close()}></bal-icon>
          <div class="snackbar-footer" style={{ display: this.action === '' ? 'none' : 'inline-block' }}>
            <bal-button color={this.buttonType} inverted={this.color !== ''} outlined onClick={() => this.onActionHandler()}>
              {this.action}
            </bal-button>
          </div>
        </div>
      </Host>
    )
  }
}

let snackbarIds = 0
