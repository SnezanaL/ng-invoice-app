import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { InvoiceService } from '../../../services/invoice.service';
import { IconArrowRightComponent } from '../../../shared/icons/icon-arrow-right';

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
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [InvoiceService],
})
export class ListComponent implements OnInit {
  data: any;
  items: any;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.getData().subscribe((response) => {
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
    { field: 'status', title: 'Status' },
    {
      field: 'actions',
      title: 'Actions',
      sort: false,
      headerClass: 'justify-center',
      width: '30px',
    },
  ];
}
