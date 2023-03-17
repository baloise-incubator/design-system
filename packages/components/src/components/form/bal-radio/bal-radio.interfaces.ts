/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../interfaces.d.ts" />

namespace BalProps {
  export type BalRadioGroupInterface = 'radio' | 'select-button'
  export type BalRadioInterface = BalRadioGroupInterface
}

namespace BalEvents {
  export type BalRadioChangeDetail = boolean
  export interface BalRadioChange extends CustomEvent {
    detail: BalRadioChangeDetail
    target: HTMLBalRadioElement
  }

  export type BalRadioGroupChangeDetail = number | string | boolean
  export interface BalRadioGroupChange extends CustomEvent {
    detail: BalRadioGroupChangeDetail
    target: HTMLBalRadioElement
  }
}
