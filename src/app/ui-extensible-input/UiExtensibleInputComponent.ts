import {Component, Input, forwardRef, ChangeDetectorRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UiExtensibleInputModalComponent} from './ui-extensible-input-modal/UiExtensibleInputModalComponent';
//mocks due to 3d party code
interface DialogService { open?: Function };
interface ModalReference<T> { instance?: any; modal?: any };
interface DialogOptions {};


const noop = () => {
}; // tslint:disable-line
const UiExtensibleInputAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiExtensibleInputComponent),
  multi: true
};

@Component({
  selector: 'ui-extensible-input',
  templateUrl: require('./ui-extensible-input.html'),
  providers: [UiExtensibleInputAccessor],
  styles: [require('./ui-extensible-input.less')]
})
export class UiExtensibleInputComponent implements ControlValueAccessor {
  @Input()
  public name: string;
  @Input()
  public disabled: boolean = false;
  @Input()
  public placeholder: string = '';
  @Input()
  public tabindex: string = '';

  public value: string = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (value: string) => void = noop;

  constructor(private dialogService: DialogService, private cd: ChangeDetectorRef) {
  }

  public onChange = (value: any) => {
    if (value !== this.value) {
      this.value = value;
      this.onChangeCallback(value);
    }
  };

  public writeValue(value: any) {
    if (value !== this.value) {
      this.value = value;
    }
  }

  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public showExtensible() {
    let dialogOpts: DialogOptions = {
      style: {
        dialogClass: 'dialog-body'
      }
    };

    let dialog = this.dialogService.open(UiExtensibleInputModalComponent, {
      value: this.value,
      placeholder: this.placeholder
    }, dialogOpts) as ModalReference<UiExtensibleInputModalComponent>;

    dialog.instance.onSave.subscribe((value: string) => {
      dialog.modal.close();
      this.onChange(value);
      this.cd.detectChanges();
    });

    dialog.instance.onClose.subscribe(() => {
      dialog.modal.close();
    });
  };
}
