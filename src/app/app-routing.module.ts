import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>import("./landing/landing.module").then(m=>m.LandingModule)
  },
  {
    path: "",
    loadChildren: ()=>import("./bitcoin/bitcoin.module").then(m=>m.BitcoinModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
