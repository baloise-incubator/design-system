import { Component, h, ComponentInterface, Host } from '@stencil/core'

@Component({
  tag: 'bal-form-grid',
  styleUrls: {
    css: 'bal-form-grid.sass',
  },
})
export class FormGrid implements ComponentInterface {
  render() {
    return (
      <Host class="bal-form-grid columns is-multiline my-0 py-0">
        <slot></slot>
      </Host>
    )
  }
}
