import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-invoice-app';

  constructor() {
    console.log('🚀 ~ AppComponent ~ add:');
  }
  createInvoice() {
    console.log('New Invoice Created');
  }

  markAsPaid() {
    console.log('Invoice Marked as Paid');
  }

  deleteInvoice() {
    console.log('Invoice Deleted');
  }
}
