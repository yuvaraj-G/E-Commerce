import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminrRoutingModule } from './adminr-routing.module';
import { AdminrComponent } from './adminr.component';


@NgModule({
  declarations: [
    AdminrComponent
  ],
  imports: [
    CommonModule,
    AdminrRoutingModule
  ]
})
export class AdminrModule { }
