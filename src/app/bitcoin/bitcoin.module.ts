import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [BitcoinComponent],
  imports: [
    CommonModule,
    BitcoinRoutingModule,
    SharedModule
  ]
})
export class BitcoinModule { }
