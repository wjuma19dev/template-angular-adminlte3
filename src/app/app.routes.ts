import { Routes } from '@angular/router';
import { Tablero } from './pages/tablero/tablero';

export const routes: Routes = [
  {
    path: '',
    component: Tablero,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
