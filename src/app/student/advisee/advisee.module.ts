import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdviseePageRoutingModule } from './advisee-routing.module';

import { AdviseePage } from './advisee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviseePageRoutingModule
  ],
  declarations: [AdviseePage]
})
export class AdviseePageModule {}
