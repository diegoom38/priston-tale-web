import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./master-page.component'),
  }
] as Routes