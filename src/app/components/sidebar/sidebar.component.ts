import { Component } from '@angular/core';
import { IconMoonComponent } from '../../shared/icons/icon-moon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [IconMoonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
