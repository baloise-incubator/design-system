import { Component, Host, h, State, Method, Listen, Prop, Event, EventEmitter, Element, writeTask } from '@stencil/core'
import { dismiss, eventMethod, prepareOverlay } from '../../../utils/overlays/overlays'
import { attachComponent, detachComponent } from '../../../utils/framework-delegate'
import { OverlayEventDetail, OverlayInterface } from './bal-modal.type'
import { deepReady, wait } from '../../../utils/helpers'
import { ScrollHandler } from '../../../utils/scroll'
import { getClassMap } from '../../../utils/css-classes'
import { Props } from '../../../types'

@Component({
  tag: 'bal-modal',
  styleUrls: {
    css: 'bal-modal.sass',
  },
})
export class Modal implements OverlayInterface {
  private usersElement?: HTMLElement
  private modalContentElement?: HTMLElement
  private modalContainerElement?: HTMLElement
  private modalBackgroundElement?: HTMLElement
  private isClickedOutsideOnMouseDown = false
  private isClickedOutsideOnMouseUp = false

  private scrollHandler = ScrollHandler()

  @State() presented = false

  @Element() el!: HTMLBalModalElement

  /** @internal */
  @Prop({ mutable: true }) overlayIndex!: number

  /** @internal */
  @Prop() delegate?: Props.FrameworkDelegate

  /** @internal */
  @Prop() dataTestId?: string

  /**
   * Defines the width of the modal body
   */
  @Prop() modalWidth = 640

  /**
   * Defines the space/padding of the modal
   */
  @Prop() space: Props.BalModalSpace = ''

  /**
   * If `true`, a backdrop will be displayed behind the modal.
   */
  @Prop() hasBackdrop = true

  /**
   * If `true`, the modal can be closed with the escape key or the little close button.
   */
  @Prop() isClosable = true

  /**
   * The component to display inside of the modal.
   */
  @Prop() component!: Props.ComponentRef

  /**
   * The data to pass to the modal component.
   */
  @Prop() componentProps?: Props.ComponentProps

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   */
  @Prop() cssClass?: string | string[]

  /**
   * If `true`, the modal can be closed with the click outside of the modal
   */
  @Prop() backdropDismiss = true

  /**
   * Emitted after the modal has presented.
   */
  @Event({ eventName: 'balModalDidPresent' }) didPresent!: EventEmitter<void>

  /**
   * Emitted before the modal has presented.
   */
  @Event({ eventName: 'balModalWillPresent' }) willPresent!: EventEmitter<void>

  /**
   * Emitted before the modal has dismissed.
   */
  @Event({ eventName: 'balModalWillDismiss' })
  willDismiss!: EventEmitter<OverlayEventDetail>

  /**
   * Emitted after the modal has dismissed.
   */
  @Event({ eventName: 'balModalDidDismiss' })
  didDismiss!: EventEmitter<OverlayEventDetail>

  connectedCallback() {
    prepareOverlay(this)
    this.scrollHandler.connect()
  }

  disconnectedCallback() {
    this.scrollHandler.disconnect()
  }

  /**
   * @internal Opens the modal.
   */
  @Method()
  async open(): Promise<void> {
    await deepReady(this.usersElement)
    this.setModalActiveOnBody()

    writeTask(() => {
      if (this.modalBackgroundElement) {
        this.modalBackgroundElement.classList.add('fadeIn')
      }
      if (this.modalContentElement) {
        this.modalContentElement.classList.add('fadeInDown')
      }
    })

    if (this.presented) {
      return
    }
    this.willPresent.emit()
    this.presented = true
    await wait(150)
    writeTask(() => {
      if (this.modalBackgroundElement) {
        this.modalBackgroundElement.classList.remove('fadeIn')
      }
      if (this.modalContentElement) {
        this.modalContentElement.classList.remove('fadeInDown')
      }
    })
    this.didPresent.emit()
  }

  /**
   * @internal Closes the modal.
   */
  @Method()
  async close(): Promise<void> {
    this.willDismiss.emit()
    this.unsetModalActiveOnBody()
    this.presented = false
    this.didDismiss.emit()
  }

  /**
   * Presents the modal through the modal controller
   */
  @Method()
  async present(): Promise<void> {
    this.setModalActiveOnBody()

    if (this.presented) {
      return
    }

    const container = this.el.querySelector(`.bal-modal__content`)
    if (!container) {
      throw new Error('container is undefined')
    }
    const componentProps = {
      ...this.componentProps,
      modal: this.el,
    }
    this.usersElement = await attachComponent(this.delegate, container, this.component, [], componentProps)
    await this.open()
  }

  /**
   * Closes the presented modal with the modal controller
   */
  @Method()
  async dismiss(data?: any, role?: string): Promise<boolean> {
    this.unsetModalActiveOnBody()

    if (this.delegate === undefined) {
      await this.close()
      return true
    }
    const dismissed = await dismiss(this, data, role, async () => {
      writeTask(() => {
        if (this.modalBackgroundElement) {
          this.modalBackgroundElement.classList.add('fadeOut')
        }
        if (this.modalContentElement) {
          this.modalContentElement.classList.add('fadeOutUp')
        }
      })
      await wait(140)
    })

    if (dismissed) {
      await detachComponent(this.delegate, this.usersElement)
    }
    return dismissed
  }

  /**
   * Returns a promise that resolves when the modal did dismiss.
   */
  @Method()
  onDidDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'balModalDidDismiss')
  }

  /**
   * Returns a promise that resolves when the modal will dismiss.
   */
  @Method()
  onWillDismiss<T = any>(): Promise<OverlayEventDetail<T>> {
    return eventMethod(this.el, 'balModalWillDismiss')
  }

  @Listen('click')
  async onClickCloseButton(event: MouseEvent) {
    if (this.isClosable && this.presented && event && event.target) {
      const element = event.target as HTMLElement
      const closestBalButton = element.closest('bal-button')
      if (closestBalButton && closestBalButton.hasAttribute('modal-close')) {
        await this.dismiss(undefined, 'model-close')
      }
      if (this.backdropDismiss && this.isClickedOutsideOnMouseUp && this.isClickedOutsideOnMouseDown) {
        await this.dismiss(undefined, 'model-close')
      }
    }
  }

  @Listen('mousedown')
  async onMouseDown(event: MouseEvent) {
    this.isClickedOutsideOnMouseDown = this.isClickedOutside(event)
  }

  @Listen('mouseup')
  async onMouseUp(event: MouseEvent) {
    this.isClickedOutsideOnMouseUp = this.isClickedOutside(event)
  }

  @Listen('keyup', { target: 'body' })
  async handleKeyUp(event: KeyboardEvent) {
    const modals = Array.from(document.querySelectorAll('bal-modal')).filter(el => el.hasAttribute('aria-presented'))
    const numbers = modals
      .map(el => el.overlayIndex)
      .map(num => parseInt(num as any))
      .filter(num => !Number.isNaN(num))
    const max = Math.max(...numbers)

    if (this.overlayIndex === max) {
      event.preventDefault()
      event.stopPropagation()
      if (this.presented && this.isClosable) {
        if (event.key === 'Escape' || event.key === 'Esc') {
          if (this.delegate) {
            await this.dismiss(undefined, 'model-escape')
          } else {
            await this.close()
          }
        }
      }
    }
  }

  private setModalActiveOnBody() {
    this.scrollHandler.disable()
  }

  private unsetModalActiveOnBody() {
    this.scrollHandler.enable()
  }

  private isClickedOutside(event: MouseEvent) {
    if (this.isClosable && this.presented && event && event.target && this.backdropDismiss) {
      const element = event.target as HTMLElement
      return element.classList.contains('bal-modal__container')
    }

    return false
  }

  render() {
    return (
      <Host
        aria-modal="true"
        aria-presented={this.presented ? 'true' : null}
        data-testid={this.dataTestId}
        tabindex="-1"
        class={{
          'bal-modal': true,
          'bal-modal--is-closable': this.isClosable,
          'bal-modal--is-active': this.presented,
          ...getClassMap(this.cssClass),
        }}
        style={{
          '--bal-width': `${this.modalWidth}px`,
        }}
      >
        <div
          class={{
            'bal-modal__background': true,
            'is-hidden': !this.hasBackdrop,
          }}
          ref={div => (this.modalBackgroundElement = div)}
        ></div>
        <div
          class={{
            'bal-modal__container': true,
          }}
          ref={div => (this.modalContainerElement = div)}
        >
          <div
            class={{
              'bal-modal__content': true,
              [`bal-modal__content--has-spacing-${this.space}`]: true,
            }}
            ref={div => (this.modalContentElement = div)}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    )
  }
}
