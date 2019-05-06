import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinecoinsComponent } from './minecoins/minecoins.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';
import { SellcoinsComponent } from './sellcoins/sellcoins.component';

const routes: Routes = [
  { path: 'mine', component: MinecoinsComponent },
  { path: 'buy', component: BuycoinsComponent },
  { path: 'sell', component: SellcoinsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
