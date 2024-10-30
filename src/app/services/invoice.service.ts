import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  getInvoiceById(id: string): Observable<Invoice | undefined> {
    return this.http
      .get<Invoice[]>(this.jsonUrl)
      .pipe(
        map((invoices: Invoice[]) =>
          invoices.find((invoice) => invoice.id === id)
        )
      );
  }
}
