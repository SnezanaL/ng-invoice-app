import { Routes } from '@angular/router';
import { ListComponent } from './components/invoices/list/list.component';
export const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  {
    path: 'invoices',
    component: ListComponent,
    data: { title: 'Invoices' },
  },
];
