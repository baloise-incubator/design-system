import { attachComponent } from '../../../utils/framework-delegate'
import { Action } from '../bal-navigation.types'

export type ActionElement = HTMLElement | undefined

export const attachActions = async (el: HTMLElement | undefined, actions: Action[]): Promise<ActionElement[]> => {
  const actionElements: ActionElement[] = []
  if (el) {
    el.innerHTML = ''
    for (let index = 0; index < actions.length; index++) {
      const action = actions[index]
      const actionElement = await attachAction(el, action)
      actionElements.push(actionElement)
    }
  }
  return actionElements
}

export const attachAction = async (el: HTMLElement | null, action: Action): Promise<ActionElement> => {
  if (el && action) {
    action = cloneActionComponent(action)
    return await attachComponent(undefined, el, action.component, [], action.componentProps)
  }
  return
}

/**
 * We need to reset the HTML template to have not yet rendered
 * components in it.
 */
const cloneActionComponent = (action: Action): Action => {
  const clone = (action.component as any).cloneNode(true)
  ;(action.component as any).innerHTML = clone.innerHTML
  return action
}
