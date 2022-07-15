import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ChangeCusor]',
})
export class ChangeCusorDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseover') mouse() {
    this.eleRef.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') mouseout() {}
}
