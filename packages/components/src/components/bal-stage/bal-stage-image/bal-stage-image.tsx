import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core'
import { BEM } from '../../../utils/bem'

@Component({
  tag: 'bal-stage-image',
})
export class StageImage implements ComponentInterface {
  @Element() el!: HTMLElement

  @Prop() srcSet!: string
  @Prop() fallback?: string

  render() {
    const block = BEM.block('stage-image')

    return (
      <Host class={{ ...block.class() }}>
        <img src={this.fallback ? this.fallback : this.srcSet.split(',')[0]} srcset={this.srcSet} sizes="100vw" />
      </Host>
    )
  }
}
