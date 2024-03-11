import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdviseePage } from './advisee.page';

const routes: Routes = [
  {
    path: '',
    component: AdviseePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviseePageRoutingModule {}
