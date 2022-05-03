import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'bal-card-content',
})
export class CardContent {
  render() {
    return (
      <Host class="bal-card-content mx-5">
        <slot></slot>
      </Host>
    )
  }
}
