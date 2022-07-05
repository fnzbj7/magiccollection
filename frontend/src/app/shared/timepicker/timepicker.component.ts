import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-timepicker-old',
    templateUrl: './timepicker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimepickerComponent),
            multi: true,
        },
    ],
})
export class TimepickerComponent implements ControlValueAccessor {
    @Input() _counterValue = 0;

    get counterValue() {
        return this._counterValue;
    }

    set counterValue(val) {
        this._counterValue = val;
        this.propagateChange(this._counterValue);
    }

    propagateChange = (_: unknown) => {};
    propagateTouch = () => {};

    increment() {
        this.counterValue++;
        this.propagateTouch();
    }

    decrement() {
        this.counterValue--;
        this.propagateTouch();
    }

    writeValue(value: number): void {
        if (value !== undefined) {
            this.counterValue = value;
        }
    }
    registerOnChange(fn: (_: unknown) => void): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.propagateTouch = fn;
    }
}
