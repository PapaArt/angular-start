import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeymarjrComponent } from './neymarjr/neymarjr.component';
import { MessiComponent } from './messi/messi.component';
import { MbappeComponent } from './mbappe/mbappe.component';
import { RonaldoComponent } from './ronaldo/ronaldo.component';


const routes: Routes = [
  { path: 'neymarjr', component: NeymarjrComponent },
  { path: 'messi', component: MessiComponent },
  { path: 'mbappe', component: MbappeComponent },
  { path: 'ronaldo', component: RonaldoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
