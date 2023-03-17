/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../interfaces.d.ts" />

namespace BalProps {
  export type BalModalInterface = 'light' | 'card'
  export type BalModalSpace = 'small' | '' | 'medium'

  export type ComponentProps = { [key: string]: any }
  // eslint-disable-next-line
  export type ComponentRef = Function | HTMLElement | string | null
  export interface FrameworkDelegate {
    attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>
    removeViewFromDom(container: any, component: any): Promise<void>
  }
}
namespace BalEvents {
  export type BalModalDidPresentDetail = void | null
  export interface BalModalDidPresent extends CustomEvent {
    detail: BalModalDidPresentDetail
    target: HTMLBalModalElement
  }

  export type BalModalWillPresentDetail = void | null
  export interface BalModalWillPresent extends CustomEvent {
    detail: BalModalWillPresentDetail
    target: HTMLBalModalElement
  }

  export type BalModalDidDismissDetail = void | null
  export interface BalModalDidDismiss extends CustomEvent {
    detail: BalModalDidDismissDetail
    target: HTMLBalModalElement
  }

  export type BalModalWillDismissDetail = void | null
  export interface BalModalWillDismiss extends CustomEvent {
    detail: BalModalWillDismissDetail
    target: HTMLBalModalElement
  }
}
