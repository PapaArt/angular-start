import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeymarjrComponent } from './neymarjr/neymarjr.component';
import { MessiComponent } from './messi/messi.component';
import { MbappeComponent } from './mbappe/mbappe.component';
import { RonaldoComponent } from './ronaldo/ronaldo.component';

@NgModule({
  declarations: [
    AppComponent,
    NeymarjrComponent,
    MessiComponent,
    MbappeComponent,
    RonaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
