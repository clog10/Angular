import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/counter/counter').then(c => c.Counter)
  },
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero/hero').then(h => h.Hero)
  },
  {
    path: 'dragonball',
    loadComponent: () => import('./pages/dragonball/dragonball').then(d => d.Dragonball)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
