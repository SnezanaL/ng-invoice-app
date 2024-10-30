import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../../services/invoice.service';
import { CommonModule, NgIf } from '@angular/common';
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
    private invoiceService: InvoiceService
  ) {}

  ngOnInit() {
    this.invoiceId = this.route.snapshot.paramMap.get('id')!;
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe((response) => {
      this.invoice = response;
    });
  }

  openModal() {
    this.isModalOpen = true;
    console.log(
      '🚀 ~ PreviewComponent ~ openModal ~ this.isModalOpen:',
      this.isModalOpen
    );
  }
}
