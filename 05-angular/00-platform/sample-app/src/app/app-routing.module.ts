import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';

import { AlphaComponent } from './alpha/alpha.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'alpha', component: AlphaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'career', component: CareerComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
