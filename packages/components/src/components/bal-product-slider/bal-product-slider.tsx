import { Component, h, ComponentInterface, Host, Element, State, Listen } from '@stencil/core'
import { stopEventBubbling } from '../../utils/form-input'
import { BEM } from '../../utils/bem'
import { observeHasClassActive, observeItems } from '../../utils/observer'
import { isPlatform } from '../../utils/platform'
import { ResizeHandler } from '../../utils/resize'
import { SwipeHandler } from '../../utils/swipe'

@Component({
  tag: 'bal-product-slider',
})
export class ProductSlider implements ComponentInterface {
  @Element() el!: HTMLBalProductSliderElement

  private mutationO?: MutationObserver
  private mutationTabO?: MutationObserver
  private productWidth = 176
  private steps = 2

  @State() items!: HTMLBalProductSliderItemElement[]
  @State() slideIndex = 0
  @State() lastSlide = 0
  @State() sliderLength = 0

  private swipeHandler = SwipeHandler()
  private resizeWidthHandler = ResizeHandler()

  @Listen('touchmove', { target: 'window', passive: false })
  async blockVerticalScrolling(event: any) {
    if (this.el?.contains(event.target)) {
      stopEventBubbling(event)
    }
  }

  @Listen('resize', { target: 'window' })
  async resizeListener() {
    this.resizeWidthHandler(() => {
      this.calculateLastSlide()
      this.setSlide(0)
    })
  }

  connectedCallback() {
    this.mutationO = observeItems(this.el, 'bal-product-slider-item', () => this.updateItems())
    const parentTabItem = this.el.closest('bal-tab-item')
    if (parentTabItem) {
      this.mutationTabO = observeHasClassActive(parentTabItem, () => this.calculateLastSlide())
    }
    this.updateItems()
  }

  componentDidLoad(): void {
    this.swipeHandler.connect(this.el)
    this.swipeHandler.onSwipeLeft(() => this.nextPage())
    this.swipeHandler.onSwipeRight(() => this.previousPage())
  }

  disconnectedCallback() {
    this.swipeHandler.disconnect()

    if (this.mutationO) {
      this.mutationO.disconnect()
      this.mutationO = undefined
    }
    if (this.mutationTabO) {
      this.mutationTabO.disconnect()
      this.mutationTabO = undefined
    }
  }

  private getChildItems() {
    return Array.from(this.el.querySelectorAll<HTMLBalProductSliderItemElement>('bal-product-slider-item'))
  }

  private getProductContainer() {
    return this.el.querySelector<HTMLDivElement>('.bal-product-slider__container__products')
  }

  private updateItems() {
    this.items = this.getChildItems()
  }

  private nextPage() {
    this.setSlide(this.slideIndex + this.steps)
  }

  private previousPage() {
    const nextSlide = this.slideIndex - this.steps
    this.setSlide(nextSlide < 0 ? 0 : nextSlide)
  }

  /**
   * Set the slide to switch to
   * @param {number} slide :Set to switch to.
   */
  private setSlide = (slide: number) => {
    const productContainer = this.getProductContainer()
    if (productContainer && slide >= 0 && slide <= this.lastSlide + 1) {
      this.slideIndex = slide > this.lastSlide ? this.lastSlide : slide
      productContainer.style.transitionDuration = '1.2s'
      productContainer.style.transitionTimingFunction = 'cubic-bezier(0.23, 0.93, 0.13, 1)'
      productContainer.style.transform = `translate(-${this.slideIndex * this.productWidth}px)`
    }
  }

  private getParentWidth(element: any): number {
    const parentWidth = (element.parentNode as any).offsetWidth
    if (parentWidth === 0) {
      return this.getParentWidth(element.parentNode.parentNode)
    }
    return parentWidth
  }

  private getOffsetWidth() {
    const elementOffsetWidth = this.el.offsetWidth
    if (elementOffsetWidth === 0) {
      return this.getParentWidth(this.el.parentNode)
    }
    return elementOffsetWidth
  }

  private calculateLastSlide() {
    this.lastSlide = Math.ceil(this.sliderLength || this.items.length - this.getOffsetWidth() / this.productWidth)
  }

  render() {
    const block = BEM.block('product-slider')
    const container = block.element('container')
    const containerProducts = container.element('products')
    const controls = block.element('controls')
    const controlButton = controls.element('button')

    this.steps = isPlatform('mobile') ? 1 : 2
    this.calculateLastSlide()

    const leftControlIsDisabled = this.slideIndex <= 0
    const rightControlIsDisabled = this.slideIndex >= this.lastSlide

    return (
      <Host class={{ ...block.class() }}>
        <div class={{ ...container.class() }}>
          <div class={{ ...containerProducts.class() }}>
            <slot></slot>
          </div>
        </div>
        <div class={{ ...controls.class(), 'is-hidden': leftControlIsDisabled && rightControlIsDisabled }}>
          <div class={{ ...controlButton.class(), ...controlButton.modifier('left').class() }}>
            <bal-button
              disabled={leftControlIsDisabled}
              onClick={() => this.previousPage()}
              color="primary"
              square
              rounded
              icon="caret-left"
            />
          </div>
          <div class={{ ...controlButton.class(), ...controlButton.modifier('right').class() }}>
            <bal-button
              disabled={rightControlIsDisabled}
              onClick={() => this.nextPage()}
              color="primary"
              square
              rounded
              icon="caret-right"
            />
          </div>
        </div>
      </Host>
    )
  }
}
