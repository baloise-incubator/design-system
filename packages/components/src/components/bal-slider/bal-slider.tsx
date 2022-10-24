import { Component, h, ComponentInterface, Host, Element, State, Listen } from '@stencil/core'
import { BEM } from '../../utils/bem'
import { observeItems } from '../../utils/observer'
import { ResizeHandler } from '../../utils/resize'
// import { SwipeHandler } from '../../utils/swipe'

@Component({
  tag: 'bal-slider',
})
export class Slider implements ComponentInterface {
  @Element() el!: HTMLBalSliderElement

  private mutationO?: MutationObserver

  @State() slideIndex = 1
  @State() slides!: HTMLBalSliderItemElement[]
  @State() slidesLabels: string[] = []

  // private swipeHandler = SwipeHandler()
  private resizeWidthHandler = ResizeHandler()

  @Listen('resize', { target: 'window' })
  async resizeListener() {
    this.resizeWidthHandler(() => {
      this.setSlide(this.slideIndex)
    })
  }

  connectedCallback() {
    this.mutationO = observeItems(this.el, 'bal-slider-item', () => this.updateSlides())
    this.updateSlides()
  }

  componentDidLoad(): void {
    // this.swipeHandler.connect(this.el)
    // this.swipeHandler.onSwipeLeft(() => this.nextPage())
    // this.swipeHandler.onSwipeRight(() => this.previousPage())
  }

  disconnectedCallback() {
    // this.swipeHandler.disconnect()

    if (this.mutationO) {
      this.mutationO.disconnect()
      this.mutationO = undefined
    }
  }

  // private nextPage() {
  //   this.setSlide(this.slideIndex + 1)
  // }

  // private previousPage() {
  //   if (this.slideIndex > 0) {
  //     this.setSlide(this.slideIndex - 1)
  //   }
  // }

  private getChildItems() {
    return Array.from(this.el.querySelectorAll<HTMLBalSliderItemElement>('bal-slider-item'))
  }

  private getSlideContainer() {
    return this.el.querySelector<HTMLDivElement>('.bal-slider__container__slides')
  }

  private updateSlides() {
    this.slides = this.getChildItems()
    this.slidesLabels = this.slides.map(slide => slide.label)
  }

  /**
   * Set the slide to switch to
   * @param {number} slide :Set to switch to.
   */
  private setSlide = (slide: number) => {
    const slideContainer = this.getSlideContainer()
    const slideWidth = this.slides[0].clientWidth
    if (slideContainer && slide >= 0 && slide <= this.slides.length) {
      this.slideIndex = slide
      slideContainer.style.transitionDuration = '1.2s'
      slideContainer.style.transitionTimingFunction = 'cubic-bezier(0.23, 0.93, 0.13, 1)'
      slideContainer.style.transform = `translate(-${(this.slideIndex - 1) * slideWidth}px)`
    }
  }

  render() {
    const block = BEM.block('slider')
    const container = block.element('container')
    const containerSlides = container.element('slides')

    return (
      <Host class={{ ...block.class() }}>
        <bal-pagination
          sticky
          interface="tabs"
          totalPages={this.slides.length}
          value={this.slideIndex}
          tabsNames={this.slidesLabels}
          onBalChange={ev => {
            this.setSlide(ev.detail)
          }}
        />
        <div
          class={{
            ...container.class(),
          }}
        >
          <div class={{ ...containerSlides.class() }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    )
  }
}
