import { Directive, ElementRef, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'

import { ValueAccessor } from './value-accessor'

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'bal-checkbox',
  host: {
    '(balChange)': 'handleChangeEvent($event.detail)',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxValueAccessor),
      multi: true,
    },
  ],
})
export class CheckboxValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el)
  }

  writeValue(value: any) {
    this.el.nativeElement.checked = this.lastValue = value == null ? false : value
  }
}
