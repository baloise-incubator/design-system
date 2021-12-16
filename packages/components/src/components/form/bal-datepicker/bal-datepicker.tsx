import { Component, Host, h, Element, State, Prop, Event, EventEmitter, Method, Watch, ComponentInterface, Listen } from '@stencil/core'
import { debounceEvent, findItemLabel } from '../../../helpers/helpers'
import { BalCalendarCell, BalDateCallback, BalPointerDate } from './bal-datepicker.type'
import {
  day,
  format,
  month,
  now,
  year,
  decreaseYear,
  increaseYear,
  getFirstDayOfTheWeek,
  isSameDay,
  isInRange,
  isSameWeek,
  isSameMonth,
  isoString,
  toDate,
  isValidDateString,
  isEnterKey,
  ceilTime,
} from '@baloise/web-app-utils'
import isNil from 'lodash.isnil'
import { ACTION_KEYS, isCtrlOrCommandKey, NUMBER_KEYS } from '../../../constants/keys.constant'
import { i18nDate } from './bal-datepicker.i18n'

@Component({
  tag: 'bal-datepicker',
})
export class Datepicker implements ComponentInterface {
  private inputElement!: HTMLInputElement
  private dropdownElement!: HTMLBalDropdownElement
  private inputId = `bal-dp-${datepickerIds++}`

  @Element() el!: HTMLElement

  @State() isDropdownOpen: boolean = false
  @State() selectedDate?: string | null = ''
  @State() pointerDate: BalPointerDate = {
    year: year(now()),
    month: month(now()),
    day: day(now()),
  }

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId

  /**
   * Define the locale of month and day names.
   */
  @Prop() locale: 'en' | 'de' | 'fr' | 'it' = 'en'

  /**
   * The tabindex of the control.
   */
  @Prop() balTabindex: number = 0

  /**
   * If `true` the component uses the whole width.
   */
  @Prop() expanded = false

  /**
   * Set this to `true` when the component is placed on a dark background.
   */
  @Prop() inverted = false

  /**
   * If `true` the attribute required is added to the native input.
   */
  @Prop() required = false

  /**
   * If `true` the use can only select a date.
   */
  @Prop() readonly = false

  /**
   * If `true` the component is diabled.
   */
  @Prop() disabled = false

  /**
   * The text to display when the select is empty.
   */
  @Prop() placeholder: string | undefined

  /**
   * The minimum datetime allowed. Value must be a date string
   * following the
   * [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
   * such as `1996-12-19`. The format does not have to be specific to an exact
   * datetime. For example, the minimum could just be the year, such as `1994`.
   * Defaults to the beginning of the year, 100 years ago from today.
   */
  @Prop({ mutable: true }) min?: string

  /**
   * The maximum datetime allowed. Value must be a date string
   * following the
   * [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
   * `1996-12-19`. The format does not have to be specific to an exact
   * datetime. For example, the maximum could just be the year, such as `1994`.
   * Defaults to the end of this year.
   */
  @Prop({ mutable: true }) max?: string

  /**
   * Closes the datepicker dropdown after selection
   */
  @Prop() closeOnSelect: boolean = true

  /**
   * If `true` the datepicker only open on click of the icon
   */
  @Prop() triggerIcon: boolean = false

  /**
   * Earliest year available for selection
   */
  @Prop({ attribute: 'min-year' }) minYearProp: number | undefined = undefined

  /**
   * Latest year available for selection
   */
  @Prop({ attribute: 'max-year' }) maxYearProp: number | undefined = undefined

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 0

  @Watch('debounce')
  protected debounceChanged() {
    this.balChange = debounceEvent(this.balChange, this.debounce)
  }

  /**
   * The date to defines where the datepicker popup starts. The prop accepts ISO 8601 date strings (YYYY-MM-DD).
   */
  @Prop() defaultDate?: string | null

  /**
   * The value of the form field, which accepts ISO 8601 date strings (YYYY-MM-DD).
   */
  @Prop({ mutable: true }) value?: string | null

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    this.selectedDate = this.value
    this.updatePointerDates()
    this.balChange.emit(this.value)
  }

  /**
   * Callback to determine which date in the datepicker should be selectable.
   */
  @Prop({ attribute: 'allowed-dates' }) allowedDates: BalDateCallback | undefined = undefined

  /**
   * Emitted when a option got selected.
   */
  @Event() balChange!: EventEmitter<string | undefined | null>

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() balInput!: EventEmitter<string>

  /**
   * Emitted when the input loses focus.
   */
  @Event() balBlur!: EventEmitter<FocusEvent>

  /**
   * Emitted when the input has focus.
   */
  @Event() balFocus!: EventEmitter<FocusEvent>

  @Listen('click', { capture: true, target: 'document' })
  listenOnClick(ev: UIEvent) {
    if (this.disabled && ev.target && ev.target === this.el) {
      ev.preventDefault()
      ev.stopPropagation()
    }
  }

  componentWillLoad() {
    this.selectedDate = this.value
    this.updatePointerDates()
    this.updateValue(this.value)
  }

  connectedCallback() {
    this.debounceChanged()
  }

  /**
   * Opens the dropdown
   */
  @Method()
  async open(): Promise<void> {
    if (this.disabled) {
      return
    }
    if (this.dropdownElement) {
      this.dropdownElement.open()
    }
  }

  /**
   * Closes the dropdown
   */
  @Method()
  async close(): Promise<void> {
    if (this.disabled) {
      return undefined
    }
    if (this.dropdownElement) {
      this.dropdownElement.close()
    }
  }

  /**
   * Selects an option
   */
  @Method()
  async select(datestring: string) {
    this.inputElement.value = format(datestring)
    this.updateValue(datestring)
    this.updatePointerDates()

    if (this.closeOnSelect) {
      await this.dropdownElement?.toggle()
    }
  }

  /**
   * Sets the focus on the input element
   */
  @Method()
  async setFocus() {
    if (this.inputElement) {
      this.inputElement.focus()
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.inputElement)
  }

  private updatePointerDates() {
    let date = toDate(this.selectedDate)
    if (date === undefined) {
      if (isNil(this.defaultDate)) {
        date = now()
      } else {
        date = toDate(this.defaultDate)
      }
    }
    this.pointerDate = {
      year: year(date),
      month: month(date),
      day: day(date),
    }
  }

  private updateValue(datestring: string | undefined | null) {
    if (!isValidDateString(datestring)) {
      this.selectedDate = undefined
      this.value = undefined
      if (this.inputElement) {
        this.inputElement.value = ''
      }
      return
    }

    this.value = datestring
  }

  get minYear() {
    if (this.min) {
      return parseInt(this.min.substring(0, 4), 10)
    }
    return this.minYearProp ? this.minYearProp : decreaseYear(now(), 100)
  }

  get maxYear() {
    if (this.max) {
      return parseInt(this.max.substring(0, 4), 10)
    }
    return this.maxYearProp ? this.maxYearProp : increaseYear(now(), 100)
  }

  get years(): number[] {
    return Array.from({ length: this.maxYear - this.minYear + 1 }, (_, index: number) => this.minYear + index)
  }

  get months(): { name: string; index: number }[] {
    const monthNames = i18nDate[this.locale].months
    let months = monthNames.map((name, index) => ({ name, index }))

    if (this.min) {
      const minMonth = parseInt(this.min.substring(5, 7), 10) - 1
      months = months.filter(month => month.index >= minMonth)
    }

    if (this.max) {
      const maxMonth = parseInt(this.max.substring(5, 7), 10) - 1
      months = months.filter(month => month.index <= maxMonth)
    }

    return months
  }

  get weekDays(): string[] {
    const translations = [...i18nDate[this.locale].weekdaysMin]
    translations.push(translations.shift() || '')
    return translations
  }

  get firstDateOfBox(): Date {
    const date = new Date(this.pointerDate.year, this.pointerDate.month, 1)
    return getFirstDayOfTheWeek(date)
  }

  get calendarGrid(): BalCalendarCell[][] {
    let weekDatePointer = this.firstDateOfBox
    let dayDatePointer = this.firstDateOfBox
    let calendar: any[] = []
    do {
      let row: any[] = []
      do {
        row = [
          ...row,
          {
            date: new Date(dayDatePointer),
            display: format(isoString(dayDatePointer)),
            dateString: isoString(dayDatePointer),
            label: day(dayDatePointer).toString(),
            isToday: isSameDay(dayDatePointer, now()),
            isSelected: toDate(this.selectedDate) && isSameDay(dayDatePointer, toDate(this.selectedDate) as Date),
            isDisabled: !this.getAllowedDates(dayDatePointer) || !isInRange(ceilTime(dayDatePointer), toDate(this.min), toDate(this.max)),
            isOutdated: this.pointerDate.month !== dayDatePointer.getMonth() || !isInRange(ceilTime(dayDatePointer), toDate(this.min), toDate(this.max)),
          } as BalCalendarCell,
        ]
        dayDatePointer.setDate(dayDatePointer.getDate() + 1)
      } while (isSameWeek(dayDatePointer, weekDatePointer))
      calendar = [...calendar, row]
      weekDatePointer.setDate(weekDatePointer.getDate() + 7)
    } while (isSameMonth(new Date(this.pointerDate.year, this.pointerDate.month, this.pointerDate.day), dayDatePointer))
    return calendar
  }

  private getAllowedDates(dayDatePointer: Date): boolean {
    if (isNil(this.allowedDates)) {
      return true
    }

    return (this.allowedDates as BalDateCallback)(isoString(dayDatePointer))
  }

  private onIconClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.dropdownElement.toggle()
    }
    event.stopPropagation()
  }

  private onInputClick = (event: MouseEvent) => {
    if (!this.triggerIcon && !this.disabled) {
      this.dropdownElement.toggle()
    }
    event.stopPropagation()
  }

  private onDropdownChange = (event: CustomEvent<boolean>) => {
    this.isDropdownOpen = event.detail
    event.stopPropagation()
  }

  private onInput = (event: Event) => {
    let inputValue = (event.target as HTMLInputElement).value
    this.balInput.emit(inputValue)
    event.stopPropagation()

    if (inputValue && inputValue.length >= 6) {
      const date = toDate(inputValue)
      const datestring = isoString(date)
      if (isValidDateString(datestring)) {
        this.selectedDate = datestring
        this.updatePointerDates()
      }
    }
  }

  private onInputChange = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value
    const date = toDate(inputValue)
    const datestring = isoString(date)
    const formattedValue = format(datestring)

    this.inputElement.value = formattedValue
    this.updateValue(datestring)
    this.updatePointerDates()
  }

  private onClickDateCell = (cell: BalCalendarCell): void => {
    if (!cell.isDisabled) {
      this.select(cell.dateString)
    }
  }

  private onInputKeyUp = (event: KeyboardEvent) => {
    if (isEnterKey(event) && !this.triggerIcon) {
      const date = toDate(this.inputElement.value)
      const datestring = isoString(date)

      if (this.isDropdownOpen) {
        if (this.value === datestring) {
          this.close()
        }
      } else {
        if (this.value !== datestring) {
          this.open()
        }
      }
    }
  }

  private onInputKeyDown = (event: KeyboardEvent) => {
    const allowedKeys = [...NUMBER_KEYS, '.', ...ACTION_KEYS]
    if (!isCtrlOrCommandKey(event) && allowedKeys.indexOf(event.key) < 0) {
      event.preventDefault()
      event.stopPropagation()
    }
    if (event.key === 'Tab') {
      this.close()
    }
  }

  private onInputFocus = (event: FocusEvent) => {
    this.balFocus.emit(event)
  }

  private onInputBlur = (event: FocusEvent) => {
    this.balBlur.emit(event)
  }

  private onMonthSelect = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value
    this.pointerDate = {
      ...this.pointerDate,
      month: parseInt(inputValue, 10),
    }
  }

  private onYearSelect = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value
    this.pointerDate = {
      ...this.pointerDate,
      year: parseInt(inputValue, 10),
    }
  }

  private handleClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  render() {
    return (
      <Host
        role="datepicker"
        onClick={this.handleClick}
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          'is-disabled': this.disabled,
          'is-fullwidth': this.expanded,
        }}
      >
        <bal-dropdown expanded={this.expanded} fixedContentWidth={true} onBalCollapse={this.onDropdownChange} ref={el => (this.dropdownElement = el as HTMLBalDropdownElement)}>
          <bal-dropdown-trigger>{this.renderInput()}</bal-dropdown-trigger>
          <bal-dropdown-menu>
            <div class="datepicker-popup">
              {this.renderHeader()}
              {this.renderBody()}
              <div class="datepicker-footer">
                <slot></slot>
              </div>
            </div>
          </bal-dropdown-menu>
        </bal-dropdown>
      </Host>
    )
  }

  renderInput() {
    const labelId = this.inputId + '-lbl'
    const label = findItemLabel(this.el)
    if (label) {
      label.id = labelId
      label.htmlFor = this.inputId
    }

    return (
      <div class="control has-icons-right">
        <input
          class={{
            'input': true,
            'data-test-input': true,
            'clickable': !this.disabled && !this.triggerIcon,
            'is-inverted': this.inverted,
            'is-disabled': this.disabled,
          }}
          ref={el => (this.inputElement = el as HTMLInputElement)}
          id={this.inputId}
          aria-labelledby={labelId}
          type="text"
          maxlength="10"
          autoComplete="off"
          value={format(this.value)}
          required={this.required}
          disabled={this.disabled}
          readonly={this.readonly}
          placeholder={this.placeholder}
          tabindex={this.balTabindex}
          onKeyDown={e => this.onInputKeyDown(e)}
          onKeyUp={e => this.onInputKeyUp(e)}
          onInput={this.onInput}
          onClick={this.onInputClick}
          onChange={this.onInputChange}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
        />
        <bal-icon class="datepicker-trigger-icon clickable" is-right color="info" inverted={this.inverted} name="date" onClick={this.onIconClick} />
      </div>
    )
  }

  renderBody() {
    return (
      <section class="datepicker-table">
        {this.renderWeekDayHeader()}
        <div class="datepicker-body">
          {this.calendarGrid.map(row => (
            <div class="datepicker-row">
              {row.map(cell => (
                <div
                  data-date={cell.dateString}
                  onClick={() => this.onClickDateCell(cell)}
                  class={{
                    'datepicker-cell': true,
                    'is-today': cell.isToday,
                    'is-selected': cell.isSelected,
                    'is-outdated': cell.isOutdated,
                    'is-disabled': cell.isDisabled,
                    'is-selectable': !cell.isDisabled,
                  }}
                >
                  {cell.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }

  renderWeekDayHeader() {
    return (
      <header class="datepicker-header">
        {this.weekDays.map(weekday => (
          <div class="datepicker-cell">{weekday}</div>
        ))}
      </header>
    )
  }

  renderHeader() {
    return (
      <header class="datepicker-header">
        <div class="pagination field is-centered">
          <a role="button" onClick={() => this.previousMonth()} class="pagination-previous">
            <bal-icon name="nav-go-left" size="small" />
          </a>
          <a role="button" onClick={() => this.nextMonth()} class="pagination-next">
            <bal-icon name="nav-go-right" size="small" />
          </a>
          <div class="pagination-list">
            <div class="field has-addons">
              <div class="control month-select">
                <span class="select">
                  <select onInput={this.onMonthSelect}>
                    {this.months.map(month => (
                      <option value={month.index} selected={this.pointerDate.month === month.index}>
                        {month.name}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
              <div class="control year-select">
                <span class="select">
                  <select onInput={this.onYearSelect}>
                    {this.years.map(year => (
                      <option value={year} selected={this.pointerDate.year === year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  private previousMonth() {
    if (this.pointerDate.year === this.minYear && this.pointerDate.month === 0) {
      return
    }
    if (this.pointerDate.month === 0) {
      this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year - 1, month: 11 }
    } else {
      this.pointerDate = { ...this.pointerDate, month: this.pointerDate.month - 1 }
    }
  }

  private nextMonth() {
    if (this.pointerDate.year === this.maxYear && this.pointerDate.month === 11) {
      return
    }
    if (this.pointerDate.month === 11) {
      this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year + 1, month: 0 }
    } else {
      this.pointerDate = { ...this.pointerDate, month: this.pointerDate.month + 1 }
    }
  }
}

let datepickerIds = 0
