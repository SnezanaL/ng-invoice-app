import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../../services/invoice.service';
import { CommonModule, NgIf, Location } from '@angular/common';
import { Invoice } from '../../../models/invoice.model';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../../button/button.component';
import { IconArrowLeftComponent } from '../../../shared/icons/icon-arrow-left';
import { SlideInModalComponent } from '../../../shared/modals/slide-in-modal/slide-in-modal.component';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    HttpClientModule,
    ButtonComponent,
    IconArrowLeftComponent,
    SlideInModalComponent,
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  providers: [InvoiceService],
})
export class PreviewComponent {
  invoiceId: string | undefined;
  invoice: Invoice | undefined;
  invoices: Invoice[] = [];

  isModalOpen = false;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private location: Location
  ) {}

  ngOnInit() {
    this.invoiceId = this.route.snapshot.paramMap.get('id')!;
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe((response) => {
      this.invoice = response;
    });
  }
  goBack(): void {
    this.location.back();
  }

  deleteInvoice(id: string): void {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.deleteInvoice(id).subscribe({
        next: () => {
          this.invoices = this.invoices.filter((invoice) => invoice.id !== id);
          alert('Invoice deleted successfully.');
          this.goBack();
        },
        error: (err) => {
          console.error('Error deleting invoice:', err);
          alert('Failed to delete invoice.');
        },
      });
    }
  }

  markAsPaid(id: string) {
    if (confirm('Are you sure you want to mark this invoice as paid?')) {
      this.invoiceService.markAsPaid(id).subscribe(
        (invoice: Invoice) => {
          this.invoice = invoice;
          console.log(
            '🚀 ~ PreviewComponent ~ this.invoiceService.markAsPaid ~ this.invoice:',
            this.invoice
          );
          alert('Invoice marked as paid successfully.');
        },
        (error) => {
          console.error('Error marking invoice as paid:', error);
          alert('Failed to mark invoice as paid.');
        }
      );
    }
  }

  openModal() {
    this.isModalOpen = true;
    console.log(
      '🚀 ~ PreviewComponent ~ openModal ~ this.isModalOpen:',
      this.isModalOpen
    );
  }
}
