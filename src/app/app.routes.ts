import { Routes } from '@angular/router';
import { ListComponent } from './components/invoices/list/list.component';
import { PreviewComponent } from './components/invoices/preview/preview.component';
export const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  {
    path: 'invoices',
    component: ListComponent,
    data: { title: 'Invoices' },
  },
  {
    path: 'invoices/:id',
    component: PreviewComponent,
    data: { title: 'Invoice' },
  },
  { path: '', redirectTo: '/invoices', pathMatch: 'full' },
];
