import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/student/tabs/all',
    pathMatch:'full'
  },
  {
    path:'tabs',
    component: StudentPage,
    children:[
      {
        path: 'all',
        loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
      },
      {
        path: 'advisee',
        loadChildren: () => import('./advisee/advisee.module').then( m => m.AdviseePageModule)
      },
    ]
  },
  //untuk path yang menggunakan unique parameter harus berada di paling bawah 
  {
    path: ':nim',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
