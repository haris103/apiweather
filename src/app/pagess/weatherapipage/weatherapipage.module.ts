import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherapipagePageRoutingModule } from './weatherapipage-routing.module';

import { WeatherapipagePage } from './weatherapipage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherapipagePageRoutingModule
  ],
  declarations: [WeatherapipagePage]
})
export class WeatherapipagePageModule {}
