import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private baseUrl = 'http://localhost:3000/invoices';

  private invoices: Invoice[] = [];

  ngOnInit() {}

  constructor(private http: HttpClient) {}

  getInvoices(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getInvoiceById(id: string): Observable<Invoice | undefined> {
    return this.http
      .get<Invoice[]>(this.baseUrl)
      .pipe(
        map((invoices: Invoice[]) =>
          invoices.find((invoice) => invoice.id === id)
        )
      );
  }

  deleteInvoice(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  markAsPaid(id: string): Observable<Invoice> {
    return this.http.patch<Invoice>(`${this.baseUrl}/${id}`, {
      status: 'paid',
    });
  }
}
