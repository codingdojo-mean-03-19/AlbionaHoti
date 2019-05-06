import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { DcComponent } from './dc/dc.component';
import { BurbankComponent } from './burbank/burbank.component';

import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'dc', component: DcComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'dallas', component: DallasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
