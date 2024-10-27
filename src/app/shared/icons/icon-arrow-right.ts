import { NgClass } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'icon-arrow-right',
  standalone: true,
  imports: [NgClass],
  viewProviders: [],
  template: `
    <ng-template #template>
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </ng-template>
  `,
})
export class IconArrowRightComponent {
  @Input() fill: boolean = false;
  @Input() class: any = '';
  @Input() colorClass: string = 'text-glaucous';
  @ViewChild('template', { static: true }) template: any;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove();
  }
}
