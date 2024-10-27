import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { InvoiceService } from '../../../services/invoice.service';
import { IconArrowRightComponent } from '../../../shared/icons/icon-arrow-right';
import { ButtonComponent } from '../../button/button.component';
import { filter } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Invoice } from '../invoice.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    DataTableModule,
    CommonModule,
    HttpClientModule,
    IconArrowRightComponent,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [InvoiceService],
})
export class ListComponent implements OnInit {
  data: any = [];
  invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoiceService.getData().subscribe((response) => {
      this.invoices = response;
      this.data = response;
      console.log(this.data);
    });
  }
  search = '';
  cols = [
    { field: 'id', title: 'Invoice' },
    { field: 'createdAt', title: 'Date' },
    { field: 'clientName', title: 'Name' },
    { field: 'total', title: 'Amount' },
    { field: 'status', title: 'Status', filter: true },
    {
      field: 'actions',
      title: 'Actions',
      headerClass: 'justify-center',
      width: '30px',
    },
  ];

  viewInvoice(e: any) {
    alert(e);
  }

  selectedStatus = '';

  filterByStatus() {
    this.data = this.invoices;
    if (this.selectedStatus) {
      this.data = this.invoices.filter(
        (invoice: Invoice) => invoice.status === this.selectedStatus
      );
    } else {
      this.data = this.invoices; // Reset filter
    }
  }
}
