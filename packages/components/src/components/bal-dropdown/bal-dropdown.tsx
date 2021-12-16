import { Component, h, Host, Listen, Method, Prop, Element, Event, EventEmitter, State } from '@stencil/core'

@Component({
  tag: 'bal-dropdown',
})
export class Dropdown {
  private dropdownId = `bal-dd-${DropdownIds++}`

  @Element() element!: HTMLElement

  @State() isDropDownContentUp = false

  /**
   * If `true` the field spans over the whole width.
   */
  @Prop() expanded: boolean = false

  /**
   * If `true` the dropdown content has a fixed width
   */
  @Prop() fixedContentWidth: boolean = false

  /**
   * If `true` the dropdown content is open.
   */
  @Prop({ mutable: true, reflect: true }) isActive = false

  /**
   * Listen when the dropdown opens or closes. Returns the current `isActive` value.
   */
  @Event({ eventName: 'balCollapse' }) balCollapse!: EventEmitter<boolean>

  /**
   * @internal - Use this to close unuesed dropdowns.
   */
  @Event({ eventName: 'balDropdownPrepare' }) balDropdownPrepare!: EventEmitter<string>

  @Listen('balDropdownPrepare', { target: 'body' })
  handleDropdownPrepare(dropdownId: string) {
    if (this.dropdownId !== dropdownId) {
      this.close()
    }
  }

  @Listen('keydown', { target: 'window' })
  handleKeyUp(event: KeyboardEvent) {
    if (this.isActive && (event.key === 'Escape' || event.key === 'Esc')) {
      event.preventDefault()
      this.close()
    }
  }

  /**
   * Open the dropdown menu.
   */
  @Method()
  async open() {
    if (!this.isActive) {
      this.balDropdownPrepare.emit(this.dropdownId)
      this.isActive = true
      this.balCollapse.emit(this.isActive)
    }
  }

  /**
   * Closes the dropdown menu.
   */
  @Method()
  async close() {
    if (this.isActive) {
      this.isActive = false
      this.balCollapse.emit(this.isActive)
    }
  }

  /**
   * Open or closes the dropdown.
   */
  @Method()
  async toggle() {
    if (this.isActive) {
      await this.close()
    } else {
      await this.open()
    }
    this.balCollapse.emit(this.isActive)
  }

  /**
   * Returns the `HTMLDivElement` of the menu element
   */
  async getMenuElement(): Promise<HTMLElement | null> {
    return this.menuElement
  }

  /**
   * Returns the `HTMLDivElement` of the content element
   */
  @Method()
  async getContentElement(): Promise<HTMLElement | null> {
    return this.contentElement
  }

  @Listen('keyup', { target: 'document' })
  async tabOutside(event: KeyboardEvent) {
    if (event.key === 'Tab' && !this.element.contains(document.activeElement) && this.isActive) {
      await this.toggle()
    }
  }

  @Listen('click', { target: 'document' })
  async clickOnOutside(event: UIEvent) {
    if (!this.element.contains(event.target as any) && this.isActive) {
      await this.toggle()
      this.calcIsDropDownContentUp()
    }
  }

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.calcIsDropDownContentUp()
  }

  @Listen('scroll', { target: 'window' })
  async scrollHandler() {
    this.calcIsDropDownContentUp()
  }

  get menuElement(): HTMLElement | null {
    return this.element.querySelector('bal-dropdown-menu')
  }

  get contentElement(): HTMLElement | null {
    return this.element.querySelector('bal-dropdown-content')
  }

  private calcIsDropDownContentUp() {
    const box = this.element.getBoundingClientRect()
    const clientHeight = this.contentElement?.clientHeight || 250
    const offsetTop = this.element?.offsetTop || 0
    if (offsetTop < clientHeight) {
      this.isDropDownContentUp = false
    } else {
      this.isDropDownContentUp = window.innerHeight < box.bottom + clientHeight + 50
    }
  }

  componentWillRender() {
    this.calcIsDropDownContentUp()
  }

  render() {
    return (
      <Host
        data-id={this.dropdownId}
        class={{
          'bal-dropdown': true,
          'is-expanded': this.expanded,
          'has-fixed-content-width': this.fixedContentWidth,
        }}
      >
        <div
          class={{
            'dropdown': true,
            'is-active': this.isActive,
            'is-expanded': this.expanded,
            'is-up': this.isDropDownContentUp,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    )
  }
}

let DropdownIds = 0
