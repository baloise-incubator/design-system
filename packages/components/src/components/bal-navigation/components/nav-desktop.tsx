import { Component, h, ComponentInterface, Host, Prop, Element } from '@stencil/core'
import { attachComponent } from '../../../utils/framework-delegate'
import { NavigationBreakpoints, LevelInfo, Action } from '../bal-navigation.types'
import { mapToMetaLevels } from '../utils/level.utils'
// import { mapToMetaLevels } from '../utils/level.utils'
// import { NavDesktopMeta } from './nav-desktop-meta'

@Component({
  tag: 'bal-navigation-desktop',
})
export class NavigationDesktop implements ComponentInterface {
  // private usersElement?: HTMLElement
  // private containerElement?: HTMLElement

  // private counter = 0

  @Element() el!: HTMLElement

  @Prop() levels: LevelInfo[] = []
  @Prop() actions: Action[] = []
  @Prop() breakpoints: NavigationBreakpoints = 'widescreen'

  // componentDidRender() {
  //   if (this.counter === 0) {
  //     this.present()
  //   }
  //   this.counter++
  // }

  // async present(): Promise<void> {
  //   console.warn('-> PRESENT DESKTOP')
  //   if (this.containerElement) {
  //     this.containerElement.innerHTML = ''
  //     const action = this.actions[0]
  //     console.log(action.component)
  //     const clone = (action.component as any).cloneNode(true)
  //     ;(action.component as any).innerHTML = clone.innerHTML
  //     this.usersElement = await attachComponent(
  //       undefined,
  //       this.containerElement,
  //       action.component,
  //       [],
  //       action.componentProps,
  //     )
  //   }
  // }

  render() {
    const metaLevels = mapToMetaLevels(this.levels)

    console.log('NavigationDesktop render')
    return (
      <Host>
        <bal-navigation-meta levels={metaLevels} actions={this.actions}></bal-navigation-meta>
        {/* <p>NavigationDesktop</p> */}
        {/* <div ref={div => (this.containerElement = div)}></div> */}
        {/* <NavDesktopMeta levels={metaLevels}></NavDesktopMeta> */}
        {/* NavigationDesktop */}
        {/* <slot></slot> */}
      </Host>
    )
  }
}
