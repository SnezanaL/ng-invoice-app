// state/invoice.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { InvoiceState } from './reducers/invoice.reducer';
import { Invoice } from '../models/invoice.model';

export const selectInvoiceState =
  createFeatureSelector<InvoiceState>('invoices');

// export const selectInvoicesState = (state: any) => state.invoices;
console.log('🚀 ~ selectInvoicesState:', selectInvoiceState);

// export const selectAllInvoices = createSelector(
//   selectInvoiceState,
//   (state: InvoiceState) => [...state.invoices]
// );

export const selectFilteredSortedInvoices = createSelector(
  selectInvoiceState,
  (state) => {
    let filteredInvoices = state.invoices;
    console.log('🚀 ~ filteredInvoices:', filteredInvoices);
    if (state.filter) {
      filteredInvoices = filteredInvoices.filter(
        (invoice: Invoice) => invoice.status.includes(state.filter) // Filter by name
      );
    }

    return filteredInvoices;
    // return state.sort === 'asc'
    //   ? filteredInvoices.sort((a: Invoice, b: Invoice) =>
    //       a.clientName.localeCompare(b.clientName)
    //     )
    //   : filteredInvoices.sort((a: Invoice, b: Invoice) =>
    //       b.clientName.localeCompare(a.clientName)
    //     );
  }
);

// export const selectInvoiceById = (id: string) =>
//   createSelector(selectInvoiceState, (state: InvoiceState) =>
//     state.invoices.find((invoice) => invoice.id === id)
//   );
