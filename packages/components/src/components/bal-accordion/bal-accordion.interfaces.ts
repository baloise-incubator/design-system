/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../interfaces.d.ts" />

namespace BalProps {
  export type BalAccordionColor = 'primary' | 'info'
}

namespace BalEvents {
  export type BalAccordionChangeDetail = boolean
  export type BalAccordionChange = CustomEvent<BalAccordionChangeDetail>

  export interface BalAccordionChangeCustomEvent extends CustomEvent {
    detail: BalAccordionChangeDetail
    target: HTMLBalAccordionElement
  }
}
