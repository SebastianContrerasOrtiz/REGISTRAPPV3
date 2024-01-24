import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicComponentPage } from './ionic-component.page';

const routes: Routes = [
  {
    path: '',
    component: IonicComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicComponentPageRoutingModule {}
