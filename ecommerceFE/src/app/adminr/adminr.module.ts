import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminrRoutingModule } from './adminr-routing.module';
import { AdminrComponent } from './adminr.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminrComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminrRoutingModule
  ]
})
export class AdminrModule { }
