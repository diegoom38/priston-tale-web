import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MasterPageComponent from './components/master-page/master-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/master-page/master-page.routes'),
    component: MasterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
