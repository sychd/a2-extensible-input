import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ui-extensible-input-modal',
  templateUrl: require('./ui-extensible-input-modal.html')
})
export class UiExtensibleInputModalComponent {
  @Output()
  public onSave: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public onClose: EventEmitter<void> = new EventEmitter<void>();

  public save(value: string) {
    this.onSave.emit(value);
  }

  public close() {
    this.onClose.emit();
  }
}
