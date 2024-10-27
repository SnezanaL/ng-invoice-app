import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { invoiceReducer } from './state/reducers/invoice.reducer';
import { InvoiceEffects } from './state/effects/invoice.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ invoices: invoiceReducer }),
    provideEffects(InvoiceEffects),
    provideHttpClient(),
  ],
};
