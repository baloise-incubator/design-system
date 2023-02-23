import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core'
import {
  FormInput,
  getInputTarget,
  getUpcomingValue,
  inputHandleBlur,
  inputHandleChange,
  inputHandleClick,
  inputHandleFocus,
  inputHandleHostClick,
  inputHandleReset,
  inputListenOnClick,
  inputSetBlur,
  inputSetFocus,
  stopEventBubbling,
} from '../../../utils/form-input'
import { Loggable, Logger, LogInstance } from '../../../utils/log'
import { BEM } from '../../../utils/bem'
import { Events } from '../../../types'
import isNil from 'lodash.isnil'
import { isCtrlOrCommandKey, ACTION_KEYS, NUMBER_KEYS } from '../../../utils/constants/keys.constant'
import { inheritAttributes } from '../../../utils/attributes'
import { debounceEvent } from '../../../utils/helpers'
import { formatTime } from './bal-time-input.util'

@Component({
  tag: 'bal-time-input',
  styleUrls: {
    css: 'bal-time-input.sass',
  },
})
export class TimeInput implements ComponentInterface, FormInput<string | undefined>, Loggable {
  private inputId = `bal-time-input-${TimeInputIds++}`
  private inheritedAttributes: { [k: string]: any } = {}

  log!: LogInstance
  @Logger('bal-time-input')
  createLogger(log: LogInstance) {
    this.log = log
  }

  nativeInput?: HTMLInputElement
  inputValue = this.value
  initialValue = this.value || ''

  @Element() el!: HTMLElement

  @State() hasFocus = false

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `balChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 0

  @Watch('debounce')
  protected debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce)
  }

  /**
   * If `true`, the element is not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants.
   */
  @Prop() disabled = false

  /**
   * If `true` this component can be placed on dark background
   */
  @Prop() inverted = false

  /**
   * If `true` the component gets a invalid style.
   */
  @Prop() invalid = false

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string

  /**
   * If `true` the element can not mutated, meaning the user can not edit the control.
   */
  @Prop() readonly = false

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value?: string = undefined

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() balBlur!: EventEmitter<FocusEvent>

  /**
   * Emitted when the input value has changed.
   */
  @Event() balChange!: EventEmitter<Events.BalInputTimeInputDetail>

  /**
   * Emitted when the input has clicked.
   */
  @Event() balClick!: EventEmitter<MouseEvent>

  /**
   * Emitted when the input has focus.
   */
  @Event() balFocus!: EventEmitter<FocusEvent>

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() balInput!: EventEmitter<Events.BalInputTimeChangeDetail>

  /**
   * Emitted when a keyboard key has pressed.
   */
  @Event() balKeyPress!: EventEmitter<KeyboardEvent>

  @Listen('click', { capture: true, target: 'document' })
  listenOnClick(event: UIEvent) {
    inputListenOnClick(this, event)
  }

  private resetHandlerTimer?: NodeJS.Timer

  @Listen('reset', { capture: true, target: 'document' })
  resetHandler(event: UIEvent) {
    const formElement = event.target as HTMLElement
    if (formElement?.contains(this.el)) {
      inputHandleReset(this, this.initialValue, this.resetHandlerTimer)
    }
  }

  connectedCallback() {
    this.debounceChanged()
    this.initialValue = this.value || ''
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title'])
  }

  componentDidLoad() {
    this.inputValue = this.value
  }

  /**
   * Sets focus on the native `input` in `bal-time-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    inputSetFocus(this)
  }

  /**
   * Sets blur on the native `input` in `bal-time-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  @Method()
  async setBlur() {
    inputSetBlur(this)
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput!)
  }

  private getAllowedKeys() {
    return [...NUMBER_KEYS, ...ACTION_KEYS]
  }

  private getValue(): string {
    const value = (this.value || '').toString()
    return value
  }

  private handleClick = (event: MouseEvent) => inputHandleHostClick(this, event)

  private onBlur = (ev: FocusEvent) => {
    inputHandleBlur(this, ev)

    const input = ev.target as HTMLInputElement | null
    if (input) {
      inputHandleChange(this)
    }
  }

  private onClick = (event: MouseEvent) => inputHandleClick(this, event)

  private onFocus = (event: FocusEvent) => {
    inputHandleFocus(this, event)
  }

  private onInput = (ev: InputEvent) => {
    const input = getInputTarget(ev)
    const cursorPositionStart = (ev as any).target?.selectionStart
    const cursorPositionEnd = (ev as any).target?.selectionEnd

    if (input) {
      if (input.value) {
        this.inputValue = input.value.replace(/\D/g, '')
        if (this.inputValue.length > 4) {
          this.inputValue = this.inputValue.substring(0, 4)
        }
        const formatted = formatTime(this.inputValue)
        input.value = formatted
        if (cursorPositionStart < this.inputValue.length) {
          input.setSelectionRange(cursorPositionStart, cursorPositionEnd)
        }
        this.inputValue = formatted
        this.value = formatted
      } else {
        this.inputValue = input.value
        this.value = this.inputValue
      }
    }

    this.balInput.emit(this.inputValue)
  }

  private onKeydown = (event: KeyboardEvent) => {
    if (!isNil(event) && !isCtrlOrCommandKey(event)) {
      if (!this.getAllowedKeys().includes(event.key)) {
        return stopEventBubbling(event)
      }
    }

    if ([...NUMBER_KEYS].indexOf(event.key) >= 0) {
      const newValue = getUpcomingValue(this, event)
      const sanitizedTimeValue = newValue.replace(':', '')
      const lengthOfValue = sanitizedTimeValue.length

      switch (lengthOfValue) {
        case 1:
          if (Number(sanitizedTimeValue) < 0 || Number(sanitizedTimeValue) > 2) {
            stopEventBubbling(event)
          }
          break
        case 2:
          if (Number(sanitizedTimeValue) < 0 || Number(sanitizedTimeValue) > 23) {
            stopEventBubbling(event)
          }
          break
        case 3:
          if (Number(sanitizedTimeValue[2]) < 0 || Number(sanitizedTimeValue[2]) > 5) {
            stopEventBubbling(event)
          }
          break
        case 4:
          const minutes = Number(`${sanitizedTimeValue[3]}${sanitizedTimeValue[4]}`)
          if (minutes < 0 || minutes > 59) {
            stopEventBubbling(event)
          }
          break
      }
    }
  }

  render() {
    const block = BEM.block('time-input')
    const native = block.element('native')
    const labelId = this.inputId + '-lbl'
    const MAX_LENGTH_TIME_INPUT = 5

    const value = this.getValue()

    return (
      <Host
        onClick={this.handleClick}
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          ...block.class(),
          ...block.modifier('disabled').class(this.disabled || this.readonly),
        }}
      >
        <input type="string" class={{ ...native.class() }} name={this.name} value={this.value} tabindex={-1} />
        <bal-input-group disabled={this.disabled || this.readonly} invalid={this.invalid}>
          <input
            type="text"
            class={{
              'input': true,
              'data-test-input': true,
              'is-clickable': !this.disabled && !this.readonly,
              'is-inverted': this.inverted,
              'is-disabled': this.disabled || this.readonly,
              'is-danger': this.invalid,
              'bal-focusable': !this.disabled,
            }}
            ref={inputEl => (this.nativeInput = inputEl)}
            id={this.inputId}
            aria-labelledby={labelId}
            disabled={this.disabled}
            maxLength={MAX_LENGTH_TIME_INPUT}
            // name={this.name}
            placeholder={this.placeholder || ''}
            readonly={this.readonly}
            required={this.required}
            value={value}
            onFocus={this.onFocus}
            onInput={ev => this.onInput(ev as InputEvent)}
            onKeyDown={e => this.onKeydown(e)}
            onBlur={this.onBlur}
            onClick={this.onClick}
            onKeyPress={e => this.balKeyPress.emit(e)}
            {...this.inheritedAttributes}
          />
          <bal-icon
            is-right
            color={this.disabled || this.readonly ? 'grey' : this.invalid ? 'danger' : 'primary'}
            name="clock"
          />
        </bal-input-group>
      </Host>
    )
  }
}

let TimeInputIds = 0
