import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { InvoiceService } from '../../../services/invoice.service';
import { IconArrowRightComponent } from '../../../shared/icons/icon-arrow-right';
import { ButtonComponent } from '../../button/button.component';
import { filter } from 'rxjs';

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
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [InvoiceService],
})
export class ListComponent implements OnInit {
  data: any = [];
  invoices: any = [];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoiceService.getData().subscribe(
      (response) => {
        this.invoices = response;
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
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
      sort: false,
      headerClass: 'justify-center',
      width: '30px',
    },
  ];

  selectedStatus = '';

  filterByStatus() {
    this.data = this.invoices;
    if (this.selectedStatus) {
      this.data = this.invoices.filter(
        (invoice: any) => invoice.status === this.selectedStatus
      );
    } else {
      this.data = this.invoices; // Reset filter
    }
  }
}
