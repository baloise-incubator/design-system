import { Component, Host, h, Event, EventEmitter, Method } from '@stencil/core'
import globalScript from '../../global'
import { isBrowser } from '../../utils/browser'
import { rIC } from '../../utils/helpers'
import { Loggable, Logger, LogInstance } from '../../utils/log'

@Component({
  tag: 'bal-app',
})
export class App implements Loggable {
  private focusVisible?: any
  log!: LogInstance

  @Logger('bal-app')
  createLogger(log: LogInstance) {
    this.log = log
  }

  /**
   * @internal
   * Tells if the components are ready
   */
  @Event({ bubbles: true, composed: true }) balAppLoad!: EventEmitter<boolean>

  connectedCallback() {
    globalScript()
  }

  componentDidLoad() {
    this.balAppLoad.emit(true)
    rIC(async () => {
      import('../../utils/focus-visible').then(module => (this.focusVisible = module.startFocusVisible()))
    })
  }

  @Method()
  async setFocus(elements: HTMLElement[]) {
    if (this.focusVisible) {
      this.focusVisible.setFocus(elements)
    }
  }

  render() {
    return (
      <Host
        role="application"
        class={{
          'bal-app': true,
          'bal-app--safari': isBrowser('Safari'),
          'bal-app--touch': isBrowser('touch'),
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
