import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicComponentPageRoutingModule } from './ionic-component-routing.module';

import { IonicComponentPage } from './ionic-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicComponentPageRoutingModule
  ],
  declarations: [IonicComponentPage]
})
export class IonicComponentPageModule {}
