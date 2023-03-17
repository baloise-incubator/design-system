/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../interfaces.d.ts" />

namespace BalEvents {
  export type BalInputNumberChangeDetail = number | undefined
  export interface BalInputNumberChange extends CustomEvent {
    detail: BalInputNumberChangeDetail
    target: HTMLBalNumberInputElement
  }

  export type BalInputNumberInputDetail = number | undefined
  export interface BalInputNumberInput extends CustomEvent {
    detail: BalInputNumberInputDetail
    target: HTMLBalNumberInputElement
  }
}
