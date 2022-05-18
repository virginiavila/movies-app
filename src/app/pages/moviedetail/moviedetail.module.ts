import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPageRoutingModule } from './moviedetail-routing.module';

import { MovieDetailPage } from './moviedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailPageRoutingModule
  ],
  declarations: [MovieDetailPage]
})
export class MovieDetailPageModule {}
