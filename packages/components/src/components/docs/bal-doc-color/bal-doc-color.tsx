import { Component, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'bal-doc-color',
  styleUrl: 'bal-doc-color.sass',
  shadow: false,
  scoped: true,
})
export class BalDocColor {
  @Prop() inverted = false
  @Prop() background = false
  @Prop() color = ''
  @Prop() subject = ''
  @Prop() description = ''

  render() {
    const subject = this.subject !== '' ? this.subject : this.color
    return (
      <Host class="bal-app">
        <div class="has-radius-large has-shadow-normal">
          <div
            class={`has-background-${this.color} has-radius-top-large is-flex is-justify-content-center is-align-items-center`}
          >
            <strong
              class={`${this.inverted ? 'has-text-white' : 'has-text-blue'} has-font-title is-size-x-large py-normal`}
              style={{ minHeight: '80px' }}
            >
              {this.background ? 'A-a' : ''}
            </strong>
          </div>
          <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-x-small">
            <h5 class="title is-size-normal m-none">{subject}</h5>
            <bal-text size="small" style={{ textAlign: 'center' }}>
              {this.description}
            </bal-text>
          </div>
        </div>
      </Host>
    )
  }
}
