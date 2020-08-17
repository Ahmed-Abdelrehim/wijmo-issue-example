import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';
import { UnitsTableComponent } from './units-table/units-table.component';


const routes: Routes = [
  {
    path:'',
    component: UsersTableComponent
  },
  {
    path:'units',
    component: UnitsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
