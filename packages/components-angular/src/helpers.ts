export const parseCustomEvent = <T>(event: CustomEvent<T> | Event): T => {
  if ('detail' in event) {
    return event.detail
  }
  throw Error('Event was not a Custom Event or did not had a detail prop!')
}

interface WebComponent<T> {
  el: T
}

export const element = <T>(elementReference: any): T => {
  const component: WebComponent<T> = elementReference
  return component.el
}
