import { Component, h, ComponentInterface, Host, Element, Prop, Listen } from '@stencil/core'
import { BEM } from '../../utils/bem'
import { isPlatform } from '../../utils/platform'

@Component({
  tag: 'bal-main-navigation',
})
export class MainNavigation implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * Link of the logo
   */
  @Prop() logoPath = '/'

  private previousY = 0
  private scrolling = false

  @Listen('scroll', { target: 'window', passive: true })
  handleScroll() {
    if (!isPlatform('touch')) {
      this.scrolling = true
    }
  }

  connectedCallback() {
    if (!isPlatform('touch')) {
      setInterval(() => {
        if (this.scrolling) {
          this.scrolling = false
          this.translateMainNav()
        }
      }, 300)
    }
  }

  translateMainNav() {
    const scrollingDown = window.scrollY > this.previousY
    scrollingDown
      ? this.el.classList.add('bal-mainnav--translated')
      : this.el.classList.remove('bal-mainnav--translated')

    this.previousY = window.scrollY
  }

  render() {
    const mainNavigationEl = BEM.block('mainnav')

    return (
      <Host
        class={{
          ...mainNavigationEl.class(),
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
