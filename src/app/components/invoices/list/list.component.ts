import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from '@bhplugin/ng-datatable';
import { InvoiceService } from '../../../services/invoice.service';
import { IconArrowRightComponent } from '../../../shared/icons/icon-arrow-right';
import { ButtonComponent } from '../../button/button.component';
import { filter, map, Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Invoice } from '../../../models/invoice.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { InvoiceState } from '../../../state/reducers/invoice.reducer';
import {
  loadInvoices,
  setFilter,
} from '../../../state/actions/invoice.actions';
import { selectFilteredSortedInvoices } from '../../../state/invoice.selector';

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
  invoices$: Observable<Invoice[]>;

  constructor(
    private invoiceService: InvoiceService,
    private store: Store<AppState>
  ) {
    this.invoices$ = this.store.select(selectFilteredSortedInvoices);
  }

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe((response) => {
      this.invoices = response;
      this.data = response;
      console.log(this.data);
    });
    // this.store.select(selectFilteredSortedInvoices).subscribe((response) => {
    //   this.invoices = [...response];
    //   this.data = [...response];
    //   console.log(
    //     '🚀 ~ ListComponent ~ this.store.select ~ this.data:',
    //     this.data
    //   );
    //   console.log(response);
    // });
  }
  search = '';
  cols = [
    { field: 'id', title: 'Invoice' },
    { field: 'createdAt', title: 'Date' },
    { field: 'clientName', title: 'Name' },
    { field: 'total', title: 'Amount' },
    {
      field: 'status',
      title: 'Status',
      filter: true,
    },
    {
      field: 'actions',
      title: 'Actions',
      headerClass: 'justify-center',
      width: '30px',
    },
  ];

  getAll() {
    this.invoiceService.getInvoices().subscribe((response) => {
      this.invoices = response;
      this.data = response;
      console.log(this.data);
    });
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

    // if (this.selectedStatus) {
    //   this?.store?.dispatch(setFilter({ filter: this.selectedStatus }));
    // } else {
    //   this?.store?.dispatch(setFilter({ filter: '' }));
    // }
  }
}
