import { Component, h, ComponentInterface, Host, Prop, Element } from '@stencil/core'
import { attachComponent } from '../../../utils/framework-delegate'
// import { attachComponent } from '../../../utils/framework-delegate'
import { Action, LevelInfo } from '../bal-navigation.types'

@Component({
  tag: 'bal-navigation-touch',
})
export class NavigationTouch implements ComponentInterface {
  private usersElement?: HTMLElement
  private containerElement?: HTMLElement

  @Element() el!: HTMLElement

  @Prop() levels: LevelInfo[] = []
  @Prop() actions: Action[] = []

  componentDidRender() {
    this.present()
  }

  async present(): Promise<void> {
    console.warn('-> PRESENT TOUCH')
    if (this.containerElement) {
      this.containerElement.innerHTML = ''
      const action = this.actions[0]
      console.log(action.component)

      const clone = (action.component as any).cloneNode(true)

      this.usersElement = await attachComponent(undefined, this.containerElement, clone, [], action.componentProps)
    }
  }

  render() {
    console.log('NavigationTouch render')
    return (
      <Host>
        <p>NavigationTouch</p>
        <div ref={div => (this.containerElement = div)}></div>
      </Host>
    )
  }
}
