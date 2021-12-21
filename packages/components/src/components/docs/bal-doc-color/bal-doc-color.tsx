import { Component, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'bal-doc-color',
  styleUrl: 'bal-doc-color.scss',
  shadow: false,
  scoped: true,
})
export class BalDocColor {
  @Prop() inverted = false
  @Prop() background = false
  @Prop() color = ''
  @Prop() subject = ''
  @Prop() description = ''
  @Prop() scssVars = ''
  @Prop() hexVars = ''

  render() {
    const subject = this.subject !== '' ? this.subject : this.color.charAt(0).toUpperCase() + this.color.slice(1)
    const scssVars = this.scssVars !== '' ? this.scssVars : `$${this.color}`
    return (
      <Host class="bal-app">
        <div class="box">
          <div class={`has-background-${this.color} has-border-radius-large-top is-flex is-justify-content-center is-align-items-center`}>
            <strong class={`${this.inverted ? 'has-text-white' : 'has-text-blue'} is-size-2 py-4`} style={{ minHeight: '80px' }}>
              {this.background ? 'A-a' : ''}
            </strong>
          </div>
          <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-2">
            <h5 class="title is-size-5 m-0">{subject}</h5>
            <small class="my-1 has-text-center" style={{ minHeight: '17px' }}>
              {this.description}
            </small>
            <p class="has-text-grey-5">{this.hexVars}</p>
            <p class="has-text-grey-6">{scssVars}</p>
          </div>
        </div>
      </Host>
    )
  }
}
