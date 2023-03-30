import { Component, h, ComponentInterface, Host, Prop } from '@stencil/core'
import { ComponentProps, ComponentRef } from '../../../types'

@Component({
  tag: 'bal-navigation-action',
})
export class NavigationAction implements ComponentInterface {
  /**
   * The component to display inside of the modal.
   * @internal
   */
  @Prop() component?: ComponentRef

  /**
   * The data to pass to the modal component.
   * @internal
   */
  @Prop() componentProps?: ComponentProps

  /**
   * Additional classes to apply for custom CSS. If multiple classes are
   * provided they should be separated by spaces.
   * @internal
   */
  @Prop() cssClass?: string | string[]

  render() {
    // console.warn('NavigationAction render')
    return (
      <Host>
        NavigationAction
        <slot></slot>
      </Host>
    )
  }
}
