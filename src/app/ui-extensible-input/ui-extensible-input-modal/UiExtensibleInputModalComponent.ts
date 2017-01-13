import {Component, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
@Component({
  selector: 'vmr-ui-extensible-input-modal', // tslint:disable-line
  templateUrl: './ui-extensible-input-modal.html', // templateUrl: require('./ui-extensible-input.html'),
  styles: ['div { border: 1px solid #000 }']
})
export class UiExtensibleInputModalComponent {
  @Input() test: any;
}
