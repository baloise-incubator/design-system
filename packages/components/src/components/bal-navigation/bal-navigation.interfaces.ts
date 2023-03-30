/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../interfaces.d.ts" />

namespace BalProps {
  export type BalNavigationLevelBlockColor = 'white' | 'grey' | 'yellow' | 'red' | 'purple' | 'green'
  export type BalNavigationContainer = '' | 'fluid' | 'detail-page' | 'compact' | 'wide'
}

namespace BalEvents {
  export type BalNavigationLevelClickDetail = MouseEvent
  export type BalNavigationLEvelCloseClick = CustomEvent<BalNavigationLevelClickDetail>
}
