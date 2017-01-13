import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UiExtensibleInputComponent} from './ui-extensible-input/UiExtensibleInputComponent';
import { UiExtensibleInputModalComponent } from './ui-extensible-input/ui-extensible-input-modal/UiExtensibleInputModalComponent';

@NgModule({
  declarations: [
    AppComponent,
    UiExtensibleInputComponent,
    UiExtensibleInputModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
