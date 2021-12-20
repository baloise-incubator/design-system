import { ValueAccessorConfig, angularOutputTarget } from '@baloise/angular-output-target'

export const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['bal-radio-group', 'bal-select', 'bal-datepicker', 'bal-timeinput'],
    event: 'balChange',
    targetAttr: 'value',
    type: 'select',
  },
  {
    elementSelectors: ['bal-checkbox'],
    event: 'balChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: ['bal-input', 'bal-textarea', 'bal-slider'],
    event: 'balInput',
    targetAttr: 'value',
    type: 'text',
  },
]

export const AngularGenerator = () =>
  angularOutputTarget({
    componentCorePackage: '@baloise/design-system-next-components',
    directivesProxyFile: '../components-angular/src/directives/proxies.ts',
    directivesArrayFile: '../components-angular/src/directives/proxies-list.ts',
    valueAccessorConfigs: angularValueAccessorBindings,
  })
