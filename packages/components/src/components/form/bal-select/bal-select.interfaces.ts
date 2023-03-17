/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../interfaces.d.ts" />

namespace BalProps {
  export type BalSelectFilter = 'includes' | 'starts-with'
}

namespace BalEvents {
  export type BalSelectChangeDetail = string | string[] | undefined
  export interface BalSelectChange extends CustomEvent {
    detail: BalSelectChangeDetail
    target: HTMLBalSelectElement
  }
}
