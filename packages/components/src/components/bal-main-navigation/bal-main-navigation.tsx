import { Component, h, ComponentInterface, Host, Element, Prop, Listen } from '@stencil/core'
import { BEM } from '../../utils/bem'

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

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    this.scrolling = true
  }

  connectedCallback() {
    const metaNav = this.el.querySelector('bal-main-navigation-meta-bar') as HTMLBalMainNavigationMetaBarElement
    const mainNav = this.el.querySelector('bal-main-navigation-second-bar') as HTMLBalMainNavigationSecondBarElement
    if (!!metaNav && !!mainNav) {
      setInterval(() => {
        if (this.scrolling) {
          this.scrolling = false
          this.toggleNavPosition(metaNav, mainNav)
        }
      }, 300)
    }
  }

  toggleNavPosition(metaNav: HTMLBalMainNavigationMetaBarElement, mainNav: HTMLBalMainNavigationSecondBarElement) {
    const bottomOfMetaNav = metaNav.clientHeight
    const leftOfMainNav = mainNav.offsetLeft
    const isAtTop = window.scrollY < bottomOfMetaNav
    const scrollingDown = window.scrollY > this.previousY
    scrollingDown && this.scrollDown(metaNav, mainNav, isAtTop, leftOfMainNav)
    !scrollingDown && this.scrollUp(metaNav, mainNav, bottomOfMetaNav)
    this.previousY = window.scrollY
  }

  scrollDown(
    metaNav: HTMLBalMainNavigationMetaBarElement,
    mainNav: HTMLBalMainNavigationSecondBarElement,
    onTop: boolean,
    leftOfMainNav: number,
  ) {
    metaNav.classList.add('bal-mainnav__metabar--translated')
    if (onTop) {
      setTimeout(() => {
        this.addScrollDownStyles(mainNav, leftOfMainNav)
      }, 600)
    } else {
      this.addScrollDownStyles(mainNav, leftOfMainNav)
    }
  }

  addScrollDownStyles(mainNav: HTMLBalMainNavigationSecondBarElement, leftOfMainNav: number) {
    mainNav.classList.add('bal-mainnav__mainbar--fixed')
    mainNav.style.left = `${leftOfMainNav}px`
    mainNav.style.top = '0px'
  }

  scrollUp(
    metaNav: HTMLBalMainNavigationMetaBarElement,
    mainNav: HTMLBalMainNavigationSecondBarElement,
    bottomOfMetaNav: number,
  ) {
    metaNav.classList.remove('bal-mainnav__metabar--translated')
    metaNav.classList.add('bal-mainnav__metabar--fixed')
    mainNav.style.top = `${bottomOfMetaNav}px`
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
