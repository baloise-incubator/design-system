import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'bal-sheet',
})
export class Sheet {
  render() {
    return (
      <Host>
        <div class="container is-compact">
          <div class="inner">
            <slot />
          </div>
        </div>
      </Host>
    )
  }
}
