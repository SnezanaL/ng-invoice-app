import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as InvoiceActions from '../actions/invoice.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InvoiceService } from '../../services/invoice.service';

@Injectable()
export class InvoiceEffects {
  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InvoiceActions.loadInvoices),
      mergeMap(() =>
        this.invoiceService.getData().pipe(
          map((invoices) => InvoiceActions.loadInvoicesSuccess({ invoices })),
          catchError((error) =>
            of({ type: '[Invoice] Load Invoices Failure', error })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private invoiceService: InvoiceService
  ) {
    console.log(
      '🚀 ~ InvoiceEffects ~  loadInvoices$:',
      this.loadInvoices$.subscribe((data) => console.log(data))
    );
  }
}
