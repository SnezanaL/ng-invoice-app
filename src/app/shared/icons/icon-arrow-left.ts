import { NgClass } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'icon-arrow-left',
  standalone: true,
  imports: [NgClass],
  viewProviders: [],
  template: `
    <ng-template #template>
      <svg
        [class]="class"
        width="7"
        height="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.342.886L2.114 5.114l4.228 4.228"
          stroke="#9277FF"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </ng-template>
  `,
})
export class IconArrowLeftComponent {
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
