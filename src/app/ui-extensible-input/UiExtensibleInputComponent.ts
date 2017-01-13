import {
  Component, Input, ComponentFactoryResolver,
  ViewContainerRef, ViewChild, ReflectiveInjector
} from '@angular/core';
import {UiExtensibleInputModalComponent} from './ui-extensible-input-modal/UiExtensibleInputModalComponent';

@Component({
    selector: 'vmr-ui-extensible-input', // tslint:disable-line
    templateUrl: './ui-extensible-input.html',
    entryComponents: [UiExtensibleInputModalComponent]
})
export class UiExtensibleInputComponent {
  private extensibleModalContainer: any;
  @Input() disabled: any;
  @ViewChild('vmrUiExtensibleModal', { read: ViewContainerRef })
  vmrUiExtensibleModalContainer: ViewContainerRef;

  private componentParams: any;
  private modalComponent: any = null;
  constructor(private resolver: ComponentFactoryResolver) {

  }

  private createExtensibleInputModalComponent() {
    let inputs = ReflectiveInjector.resolve([this.disabled]);
    let injector = ReflectiveInjector.fromResolvedProviders(inputs, this.extensibleModalContainer.parentInjector);
  }
}
