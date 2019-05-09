import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'quotes/:author_id', component: ViewQuotesComponent },
  { path: 'write/:author_id', component: NewQuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
