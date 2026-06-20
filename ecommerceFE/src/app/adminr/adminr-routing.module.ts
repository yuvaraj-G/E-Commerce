import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminrComponent } from './adminr.component';

const routes: Routes = [{ path: '', component: AdminrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminrRoutingModule { }
