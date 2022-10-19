import { EventEmitter } from '@stencil/core'

declare const __zone_symbol__requestAnimationFrame: any
declare const requestAnimationFrame: any

export const wait = (ms = 0): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
  const original = (event as any)._original || event
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  } as EventEmitter
}

export const debounce = (func: (...args: any[]) => void, wait = 0) => {
  let timer: any
  return (...args: any[]): any => {
    clearTimeout(timer)
    timer = setTimeout(func, wait, ...args)
  }
}

export const findItemLabel = (componentEl: HTMLElement): HTMLLabelElement | null => {
  const fieldLabelEl = componentEl.closest('bal-field')
  if (fieldLabelEl) {
    return fieldLabelEl.querySelector('label')
  }
  return null
}

export const isDescendant = (parent: HTMLElement, child: HTMLElement) => {
  let node = child.parentNode
  while (node != null) {
    if (node == parent) {
      return true
    }
    node = node.parentNode
  }
  return false
}

export const getAppRoot = (doc: Document) => {
  return doc.querySelector('bal-app') || doc.body
}

/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */
export const componentOnReady = (el: any, callback: any) => {
  if (el.componentOnReady) {
    el.componentOnReady().then((resolvedEl: any) => callback(resolvedEl))
  } else {
    raf(() => callback(el))
  }
}

/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
const raf = (h: any) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h)
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h)
  }
  return setTimeout(h)
}

export const shallowReady = (el: any | undefined): Promise<any> => {
  if (el) {
    return new Promise(resolve => componentOnReady(el, resolve))
  }
  return Promise.resolve()
}

export const deepReady = async (el: any | undefined): Promise<void> => {
  const element = el as any
  if (element) {
    if (element.componentOnReady != null) {
      const stencilEl = await element.componentOnReady()
      if (stencilEl != null) {
        return
      }
    }
    await Promise.all(Array.from(element.children).map(deepReady))
  }
}

export const addEventListener = (el: any, eventName: string, callback: any, opts?: any) => {
  return el.addEventListener(eventName, callback, opts)
}

export const removeEventListener = (el: any, eventName: string, callback: any, opts?: any) => {
  return el.removeEventListener(eventName, callback, opts)
}

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `bal-input` should inherit
 * the `title` attribute that developers set directly on `bal-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (el: HTMLElement, attributes: string[] = []) => {
  const attributeObject: { [k: string]: any } = {}

  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr)
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr)
      }
      el.removeAttribute(attr)
    }
  })

  return attributeObject
}
