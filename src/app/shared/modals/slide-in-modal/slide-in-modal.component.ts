import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-in-modal',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './slide-in-modal.component.html',
  styleUrl: './slide-in-modal.component.scss',
})
export class SlideInModalComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.closed.emit();
  }
}
