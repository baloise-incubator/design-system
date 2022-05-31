import { Component, h, ComponentInterface, Host, Element, Prop, State, Listen } from '@stencil/core'
import { Props } from '../../props'
import { isPlatform } from '../../'

@Component({
  tag: 'bal-stage',
})
export class Stage implements ComponentInterface {
  @Element() el!: HTMLElement

  @State() viewPort = 'mobile'
  /**
   * Defines the background color of the stage section
   */
  @Prop() color: Props.BalStageColor = 'white'

  /**
   * If true the Baloise Shape is set
   */
  @Prop() hasShape = false

  /**
   * sets text color to white for images and dark backgrounds (optional)
   */
  @Prop() inverted: undefined | boolean = undefined

  /**
   * source set for the css background-image
   */
  @Prop() srcSet: any

  getImageSrc() {
    if (isPlatform('mobile') && this.srcSet.mobile) {
      this.viewPort = 'mobile'
    } else if (isPlatform('tablet') && this.srcSet.tablet) {
      this.viewPort = 'tablet'
    } else if (isPlatform('desktop') && this.srcSet.desktop) {
      this.viewPort = 'desktop'
    } else {
      this.viewPort = Object.keys(this.srcSet)[0]
    }
  }

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.getImageSrc()
  }

  componentDidLoad() {
    this.getImageSrc()
  }

  render() {
    return (
      <Host
        class={{
          'bal-stage': true,
          'has-background-image': this.srcSet != undefined,
          'has-shape': this.hasShape,
        }}
        style={this.srcSet ? { '--bal-background-image': `url('${this.srcSet[this.viewPort]}')` } : {}}
      >
        <section
          class={{
            'bal-stage-content': true,
            [`bal-stage-content--is-${this.color}`]: this.color && !this.srcSet,
            'bal-stage-content--is-inverted': this.inverted === true || this.color === 'blue',
          }}
        >
          <slot></slot>
        </section>
        {this.hasShape && (
          <div class="bal-stage-shape container">
            <div>Shape Placeholder</div>
          </div>
        )}
      </Host>
    )
  }
}
