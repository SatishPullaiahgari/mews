import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
    data: { renderMode: 'server' }   // 👈 ADD THIS
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
    data: { renderMode: 'server' }   // 👈 ADD THIS TOO
  }
];
