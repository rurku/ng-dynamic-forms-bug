import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    DynamicFormsBasicUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
