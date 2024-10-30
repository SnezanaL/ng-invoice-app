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
  isClosing = false;

  closeModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.isOpen = false;
      this.isClosing = false;
      this.closed.emit();
    }, 500);
  }
}
