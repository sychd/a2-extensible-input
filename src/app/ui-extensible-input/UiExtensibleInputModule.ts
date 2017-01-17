import {NgModule} from '@angular/core';
import {UiExtensibleInputModalComponent} from './ui-extensible-input-modal/UiExtensibleInputModalComponent';
import {UiExtensibleInputComponent} from './UiExtensibleInputComponent';
const declarations = [UiExtensibleInputComponent, UiExtensibleInputModalComponent];

@NgModule({
  declarations,
  exports: [UiExtensibleInputComponent],
  entryComponents: [UiExtensibleInputModalComponent]
})
export class UiExtensibleInputModule {}
