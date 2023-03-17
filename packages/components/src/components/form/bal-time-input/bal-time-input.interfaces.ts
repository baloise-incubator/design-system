/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../interfaces.d.ts" />

namespace BalEvents {
  export type BalInputTimeChangeDetail = string | undefined
  export interface BalInputTimeChange extends CustomEvent {
    detail: BalInputTimeChangeDetail
    target: HTMLBalTimeInputElement
  }
  export type BalInputTimeInputDetail = string | undefined
  export interface BalInputTimeInput extends CustomEvent {
    detail: BalInputTimeInputDetail
    target: HTMLBalTimeInputElement
  }
}
