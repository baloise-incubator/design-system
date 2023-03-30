import { componentOnReady, deepReady } from './helpers'

// eslint-disable-next-line
export type ComponentRef = Function | HTMLElement | string | null

export interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>
  removeViewFromDom(container: any, component: any): Promise<void>
}

export const attachComponent = async (
  delegate: FrameworkDelegate | undefined,
  container: Element,
  component: ComponentRef,
  cssClasses?: string[],
  componentProps?: { [key: string]: any },
): Promise<HTMLElement> => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses)
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing')
  }

  const el: any =
    typeof component === 'string'
      ? container.ownerDocument && container.ownerDocument.createElement(component)
      : component

  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c))
  }
  if (componentProps) {
    Object.assign(el, componentProps)
  }

  container.appendChild(el)
  // await new Promise(resolve => componentOnReady(el, resolve))
  await deepReady(el, true)
  return el
}

export const detachComponent = (delegate: FrameworkDelegate | undefined, element: HTMLElement | undefined) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement
      return delegate.removeViewFromDom(container, element)
    }
    element.remove()
  }
  return Promise.resolve()
}
