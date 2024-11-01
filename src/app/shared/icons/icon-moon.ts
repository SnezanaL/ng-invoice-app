import { NgClass } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'icon-moon',
  standalone: true,
  imports: [NgClass],
  viewProviders: [],
  template: `
    <ng-template #template>
      <svg
        [ngClass]="colorClass"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z"
          fill="currentColor"
          fill-rule="nonzero"
        />
      </svg>
    </ng-template>
  `,
})
export class IconMoonComponent {
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
