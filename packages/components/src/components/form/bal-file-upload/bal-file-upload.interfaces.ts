/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../interfaces.d.ts" />

namespace BalEvents {
  export type BalFileUploadChangeDetail = any[]
  export interface BalFileUploadChange extends CustomEvent {
    detail: BalFileUploadChangeDetail
    target: HTMLBalFileUploadElement
  }
}
