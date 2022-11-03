// import { Component, Host, h, Event, EventEmitter } from '@stencil/core'
import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core'
import * as balIcons from '@baloise/design-system-icons'
import { updateBalIcons } from '../../../utils/config'
import { isWindowDefined } from '../../../utils/browser'
import { BalLogger } from '../../../utils/log'

@Component({
  tag: 'bal-doc-app',
  styleUrl: '../../../styles/global.sass',
})
export class DocApp implements ComponentInterface {
  @Prop() logComponents = ''
  @Prop() logLifecycle = false
  @Prop() logEvents = false
  @Prop() logRender = false
  @Prop() logCustom = false

  connectedCallback() {
    updateBalIcons(balIcons)
  }

  componentDidRender() {
    const logConfig: BalLogger = {
      components: this.logComponents
        .split(',')
        .map(c => c.trim())
        .filter(c => c !== ''),
      lifecycle: this.logLifecycle,
      event: this.logEvents,
      render: this.logRender,
      custom: this.logCustom,
    }
    if (isWindowDefined()) {
      ;(window as any).BaloiseDesignSystem.config.logger = logConfig
    }
  }

  render() {
    return (
      <Host>
        <bal-app>
          <slot></slot>
        </bal-app>
      </Host>
    )
  }
}
