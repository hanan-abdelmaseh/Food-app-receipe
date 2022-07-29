import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private elRef:ElementRef) { }
  
  @HostListener('click') PrevFun(){
    console.log(this.elRef.nativeElement);
    let element = this.elRef.nativeElement.parentElement.parentElement.children[0];
    let item = element.getElementsByClassName("col-lg-2");
    console.log(element);
    console.log(item.length);
      element.append(item[0] );
    
  }
}
