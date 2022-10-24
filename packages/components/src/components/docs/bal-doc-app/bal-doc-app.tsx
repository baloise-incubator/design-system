import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core'
import { BalMode, initStyleMode } from '../../../config'
import globalScript from '../../../global'
import { isBrowser } from '../../../utils/browser'

@Component({
  tag: 'bal-doc-app',
  styleUrl: '../../../styles/global.sass',
})
export class DocApp {
  /**
   * Mode defines how the styles are loaded. With `css` each component loads his own styles
   * and with `sass` the component styles needs to be imported with the file `global.components.sass`.
   */
  @Prop() mode: BalMode = 'css'

  /**
   * Event fires when the Design System has loaded.
   */
  @Event({ bubbles: true, composed: true }) balAppLoad!: EventEmitter<boolean>

  connectedCallback() {
    globalScript()
    initStyleMode(this.mode)
  }

  componentDidLoad() {
    this.balAppLoad.emit(true)
  }

  render() {
    return (
      <Host role="application">
        <main
          class={{
            'bal-app': true,
            'bal-app--safari': isBrowser('Safari'),
            'bal-app--touch': isBrowser('touch'),
          }}
        >
          <slot></slot>
        </main>
      </Host>
    )
  }
}
