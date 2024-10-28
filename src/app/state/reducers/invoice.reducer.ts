import { createReducer, on } from '@ngrx/store';
import * as InvoiceActions from '../actions/invoice.actions';
import { Invoice } from '../../components/invoices/invoice.model';

export interface InvoiceState {
  invoices: Invoice[];
  loading: boolean;
  filter: string;
  sort: 'asc' | 'desc';
}

export const initialState: InvoiceState = {
  invoices: [],
  loading: false,
  filter: '',
  sort: 'asc',
};

const _invoiceReducer = createReducer(
  initialState,
  on(InvoiceActions.loadInvoices, (state) => ({ ...state })),
  on(InvoiceActions.loadInvoicesSuccess, (state, { invoices }) => ({
    ...state,
    invoices,
  })),
  on(InvoiceActions.setFilter, (state, { filter }) => ({ ...state, filter })),
  on(InvoiceActions.setSort, (state, { sort }) => ({ ...state, sort }))

  // TODO: Add a reducer for the addInvoice action that adds the new invoice to the state.
  // TODO:  Add a reducer for the updateInvoice action that updates the invoice in the state by ID.
  // TODO:    Add a reducer for the deleteInvoice action that removes the invoice from the state by ID.
);

export function invoiceReducer(state: InvoiceState | undefined, action: any) {
  return _invoiceReducer(state, action);
}
