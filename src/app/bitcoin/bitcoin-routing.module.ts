import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BitcoinComponent} from './bitcoin/bitcoin.component';

const routes: Routes = [
  {
    path: "bitcoin",
    component: BitcoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BitcoinRoutingModule { }
