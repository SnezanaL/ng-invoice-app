// state/invoice.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { InvoiceState } from './reducers/invoice.reducer';

export const selectInvoiceState =
  createFeatureSelector<InvoiceState>('invoices');

export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoices
);

export const selectInvoiceById = (id: string) =>
  createSelector(selectInvoiceState, (state: InvoiceState) =>
    state.invoices.find((invoice) => invoice.id === id)
  );
