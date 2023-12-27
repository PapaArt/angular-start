import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeymarjrComponent } from './neymarjr/neymarjr.component';
import { MessiComponent } from './messi/messi.component';

@NgModule({
  declarations: [
    AppComponent,
    NeymarjrComponent,
    MessiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
