import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../../services/invoice.service';
import { CommonModule, NgIf } from '@angular/common';
import { Invoice } from '../invoice.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [NgIf, CommonModule, HttpClientModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  providers: [InvoiceService],
})
export class PreviewComponent {
  invoiceId: string | undefined;
  invoice: Invoice | undefined;
  invoices: Invoice[] = [];

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit() {
    this.invoiceId = this.route.snapshot.paramMap.get('id')!;
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe((response) => {
      this.invoice = response;
    });
  }
}
