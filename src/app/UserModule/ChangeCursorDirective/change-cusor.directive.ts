import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ChangeCursor]',
  
})
export class ChangeCusorDirective {
  constructor(public eleRef: ElementRef) {}

  @HostListener('mouseover') mouse() {
    this.eleRef.nativeElement.style.cursor = 'pointer';
  }
}
