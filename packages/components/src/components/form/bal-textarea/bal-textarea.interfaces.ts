/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../interfaces.d.ts" />

namespace BalProps {
  export type BalTextareaWrap = 'hard' | 'soft' | 'off'
  export type BalTextareaInputMode = BalInputInputMode
}

namespace BalEvents {
  export type BalTextareaChangeDetail = string | undefined
  export interface BalTextareaChange extends CustomEvent {
    detail: BalTextareaChangeDetail
    target: HTMLBalTextareaElement
  }

  export type BalTextareaInputDetail = string | undefined
  export interface BalTextareaInput extends CustomEvent {
    detail: BalTextareaInputDetail
    target: HTMLBalTextareaElement
  }
}
