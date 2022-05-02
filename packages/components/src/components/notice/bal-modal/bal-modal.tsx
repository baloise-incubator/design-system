import { Component, Host, h, State, Method, Listen, Prop, Event, EventEmitter, Element, writeTask } from '@stencil/core'
import { dismiss, eventMethod, prepareOverlay } from '../../../helpers/overlays'
import { attachComponent, detachComponent } from '../../../helpers/framework-delegate'
import { OverlayEventDetail, OverlayInterface } from './bal-modal.type'
import { deepReady, wait } from '../../../helpers/helpers'
import { getClassMap } from '../../../helpers/theme'
import { Props } from '../../../props'

@Component({
  tag: 'bal-modal',
  scoped: true,
  shadow: false,
})
export class Modal implements OverlayInterface {
  private usersElement?: HTMLElement
  private modalContentElement?: HTMLElement
  private modalBackgroundElement?: HTMLElement

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
  @Prop() space: Props.BalModalSpace = 'small'

  /**
   * If `true`, a backdrop will be displayed behind the modal.
   */
  @Prop() hasBackdrop = true

  /**
   * If `true`, the modal can be closed with the escape key or the little close button.
   */
  @Prop() isClosable = true

  /**
   * Defines the look of the modal. The card interface should be used for scrollable content in the modal.
   */
  @Prop() interface: Props.BalModalInterface = 'light'

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
    this.unsetModalActiveOnBody()
    this.presented = false
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

    const container = this.el.querySelector(`.modal-wrapper`)
    if (!container) {
      throw new Error('container is undefined')
    }
    const componentProps = {
      ...this.componentProps,
      modal: this.el,
    }
    this.usersElement = await attachComponent(this.delegate, container, this.component, [], componentProps)
    this.usersElement.classList.add('modal-card')
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

    this.willDismiss.emit({ data, role })
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
    }
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
          event.preventDefault()
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
    if (document && document.body && !document.body.classList.contains('bal-modal-active')) {
      document.body.classList.add('bal-modal-active')
    }
  }

  private unsetModalActiveOnBody() {
    if (document && document.body) {
      document.body.classList.remove('bal-modal-active')
    }
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
        ></div>
        <div
          class={{
            'bal-modal__container': true,
          }}
        >
          <div
            class={{
              'bal-modal__content': true,
              [`bal-modal__content--has-spacing-${this.space}`]: true,
            }}
          >
            <slot></slot>
          </div>
        </div>

        {/* <div
          ref={el => (this.modalBackgroundElement = el)}
          class={{
            'bal-modal__inner': true,
            'bal-modal__inner--is-clipped': true,
            'bal-modal__inner--is-active': this.presented,
          }}
        >
          <div
            class={{
              'bal-modal__background': true,
              'is-hidden': !this.hasBackdrop,
            }}
          ></div>
          <div class="bal-modal__container">
            <div class="bal-modal__content">
              <div
                ref={el => (this.modalContentElement = el)}
                class={{
                  'has-background-white has-shadow has-radius-large no-border modal-card modal-wrapper': true,
                  [`has-space-${this.space}`]: true,
                }}
              >
                <slot></slot>
              </div>
            </div>
          </div>
        </div> */}
      </Host>
    )
  }
}
