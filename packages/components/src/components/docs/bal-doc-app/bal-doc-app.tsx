import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core'
import { BalMode, initStyleMode } from '../../../config'
import globalScript from '../../../global'

@Component({
  tag: 'bal-doc-app',
  scoped: false,
  shadow: false,
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
        <main class="bal-app">
          <slot></slot>
        </main>
      </Host>
    )
  }
}
