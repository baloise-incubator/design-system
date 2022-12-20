import { Component, h, ComponentInterface, Host, Element } from '@stencil/core'

@Component({
  tag: 'bal-doc-lead',
})
export class DocLead implements ComponentInterface {
  @Element() el!: HTMLElement

  render() {
    return (
      <Host>
        <bal-doc-app>
          <p class="is-lead has-text-blue mt-medium mb-medium">
            <slot></slot>
          </p>
        </bal-doc-app>
      </Host>
    )
  }
}
