import { Component, Host, h, Prop, State, Watch, Method, Event, EventEmitter } from '@stencil/core'
import { BEM } from '../../utils/bem'
import { Props } from '../../types'

@Component({
  tag: 'bal-pagination',
})
export class Pagination {
  @State() _value = 1

  /**
   * Defines the layout of the pagination
   */
  @Prop() interface: Props.BalPaginationInterface = ''

  /**
   * Disables component
   */
  @Prop() disabled = false

  /**
   * Current selected page
   */
  @Prop() value = 1

  @Watch('value')
  valueChanged(newValue: number) {
    this._value = newValue
  }

  /**
   * The total amount of pages
   */
  @Prop() totalPages = 1

  /**
   * Specify the max visible pages before and after the selected page
   */
  @Prop() pageRange = 2

  /**
   * Triggers when a page change happens
   */
  @Event({ eventName: 'balChange' })
  balChangeEventEmitter!: EventEmitter<number>

  componentWillLoad() {
    this._value = this.value
  }

  /**
   * Go to the next page
   */
  @Method()
  async next() {
    if (this._value < this.totalPages) {
      this._value = this._value + 1
      this.balChangeEventEmitter.emit(this._value)
    }
  }

  /**
   * Go to the previous page
   */
  @Method()
  async previous() {
    if (this._value !== 1) {
      this._value = this._value - 1
      this.balChangeEventEmitter.emit(this._value)
    }
  }

  selectPage(pageNumber: number) {
    this._value = pageNumber
    this.balChangeEventEmitter.emit(this._value)
  }

  renderEllipsisElement() {
    return (
      <li>
        <div class="pagination-more">
          <bal-text bold heading inline space="none">
            &hellip;
          </bal-text>
        </div>
      </li>
    )
  }

  renderPageElement(pageNumber: number) {
    const isActive = this._value === pageNumber
    const dot = BEM.block('pagination').element('nav').element('pagination-list').element('dot')
    return this.interface === 'small' ? (
      <li>
        <span
          class={{
            ...dot.class(),
            ...dot.modifier('active').class(isActive),
            ...dot.modifier('inactive').class(!isActive),
          }}
          onClick={() => this.selectPage(pageNumber)}
        />
      </li>
    ) : (
      <li>
        <bal-button square color={isActive ? 'primary' : 'text'} onClick={() => this.selectPage(pageNumber)}>
          {pageNumber}
        </bal-button>
      </li>
    )
  }

  private getItems(pageRange = 1) {
    const items = []
    let rangeStart = this._value - pageRange
    let rangeEnd = this._value + pageRange

    if (rangeEnd > this.totalPages) {
      rangeEnd = this.totalPages
      rangeStart = this.totalPages - pageRange * 2
      rangeStart = rangeStart < 1 ? 1 : rangeStart
    }

    if (rangeStart <= 1) {
      rangeStart = 1
      rangeEnd = Math.min(pageRange * 2 + 1, this.totalPages)
    }

    if (rangeStart > 1) {
      items.push(this.renderPageElement(1))
      items.push(this.renderEllipsisElement())
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      items.push(this.renderPageElement(i))
    }

    if (rangeEnd < this.totalPages) {
      items.push(this.renderEllipsisElement())
      items.push(this.renderPageElement(this.totalPages))
    }

    return items
  }

  render() {
    const mobileItems = this.getItems()
    const tabletItems = this.getItems(this.pageRange)

    const block = BEM.block('pagination')
    const elNav = block.element('nav')
    const elPrevious = elNav.element('pagination-previous')
    const elNext = elNav.element('pagination-next')
    const elList = elNav.element('pagination-list')
    const isSmall = this.interface === 'small'
    const buttonColor = isSmall ? 'link' : 'text'
    const buttonSize = isSmall ? 'small' : ''
    const flat = isSmall

    return (
      <Host
        class={{
          ...block.class(),
        }}
      >
        <nav
          class={{
            ...elNav.class(),
            ...elNav.modifier(`context-${this.interface}`).class(),
          }}
          role="navigation"
          aria-label="pagination"
        >
          <bal-button
            square
            color={buttonColor}
            size={buttonSize}
            flat={flat}
            class={{
              ...elPrevious.class(),
              ...elPrevious.modifier(`context-${this.interface}`).class(),
            }}
            disabled={this._value < 2}
            onClick={() => this.previous()}
          >
            <bal-icon name="nav-go-left" size="small" />
          </bal-button>
          <bal-button
            square
            color={buttonColor}
            size={buttonSize}
            flat={flat}
            class={{
              ...elNext.class(),
              ...elNext.modifier(`context-${this.interface}`).class(),
            }}
            disabled={this._value === this.totalPages}
            onClick={() => this.next()}
          >
            <bal-icon name="nav-go-right" size="small" />
          </bal-button>
          {this.interface === '' || (isSmall && this.totalPages <= 5) ? (
            [
              <ul
                class={{
                  ...elList.class(),
                  ...elList.modifier(`context-${this.interface}`).class(),
                  'is-hidden-mobile': true,
                }}
              >
                {tabletItems}
              </ul>,
              <ul
                class={{
                  ...elList.class(),
                  ...elList.modifier(`context-${this.interface}`).class(),
                  'is-hidden-tablet': true,
                }}
              >
                {mobileItems}
              </ul>,
            ]
          ) : (
            <bal-text
              space="none"
              class={{
                ...elList.class(),
                ...elList.modifier(`context-${this.interface}`).class(),
                'is-size-5': true,
              }}
              color="blue"
            >
              <span class="has-text-weight-bold">{this._value}</span>
              {' / ' + this.totalPages}
            </bal-text>
          )}
        </nav>
      </Host>
    )
  }
}
