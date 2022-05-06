import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'

@Component({
  tag: 'bal-stage-body',
})
export class StageBody implements ComponentInterface {
  @Element() el!: HTMLElement

  /**
   * If `true` the inner container uses the compact layout.
   */
  @Prop() compact = false

  render() {
    return (
      <Host
        class={{
          'bal-stage-body': true,
        }}
      >
        <div class="container">
          <slot></slot>
        </div>
      </Host>
    )
  }
}
