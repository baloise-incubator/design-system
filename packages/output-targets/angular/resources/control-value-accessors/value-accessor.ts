import { Directive, ElementRef, HostListener } from '@angular/core'
import { ControlValueAccessor } from '@angular/forms'

@Directive({})
export class ValueAccessor implements ControlValueAccessor {
  private onChange: (value: any) => void = () => {
    /**/
  }

  @HostListener('focusout', ['$event'])
  private onTouched: () => void = () => {
    /**/
  }
  protected lastValue: any

  constructor(protected el: ElementRef) {}

  writeValue(value: any) {
    this.el.nativeElement.value = this.lastValue = value == null ? '' : value
  }

  handleChangeEvent(event: CustomEvent<any>) {
    if (this.el.nativeElement === event.target) {
      const value = event.detail
      if (value !== this.lastValue) {
        this.lastValue = value
        this.onChange(value)
      }
    }
  }

  @HostListener('balBlur', ['$event.target'])
  _handleBlurEvent(el: any) {
    if (el === this.el.nativeElement) {
      this.onTouched()
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled
  }
}
