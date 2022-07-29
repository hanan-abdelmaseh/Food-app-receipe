import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private elRef:ElementRef) { }

  @HostListener('click') NextFun(){
    //console.log(this.elRef.nativeElement);
    let element = this.elRef.nativeElement.parentElement.parentElement.children[0];
    let item = element.getElementsByClassName("col-lg-2");
    
    //console.log(element);
    
    element.append(item[(item.lenght) -1]);


   // element.append(item[0] );
  }

}
