import { createAction, props } from '@ngrx/store';
import { Invoice } from '../../components/invoices/invoice.model';

export const loadInvoices = createAction('[Invoice] Load Invoices');
export const loadInvoicesSuccess = createAction(
  '[Invoice] Load Invoices Success',
  props<{ invoices: Invoice[] }>()
);
export const addInvoice = createAction(
  '[Invoice] Add Invoice',
  props<{ invoice: Invoice }>()
);

export const setFilter = createAction(
  '[Items] Set Filter',
  props<{ filter: string }>()
);

export const setSort = createAction(
  '[Items] Set Sort',
  props<{ sort: 'asc' | 'desc' }>()
);

// TODO: Add an action to update an invoice by ID (updateInvoice) with a payload of type Invoice and an ID of type string.
// TODO:  Add an action to delete an invoice by ID (deleteInvoice) with a payload of type string.
