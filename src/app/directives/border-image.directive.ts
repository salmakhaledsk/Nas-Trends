import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBorderImage]'
})
export class BorderImageDirective {

  @Input() defaultColor:string='teal';
  
  constructor(public refEle:ElementRef) {
    // this.refEle.nativeElement.style.border= 'none';
    this.refEle.nativeElement.style.borderRadius= '20px';
    this.refEle.nativeElement.style.border = `2px solid ${this.defaultColor}`;


   }


   @HostListener('mouseover') onMouseEnter() {
    this.refEle.nativeElement.style.transform = 'scale(0.97)';
    this.refEle.nativeElement.style.transition = 'transform 0.5s ease-in-out';

}
@HostListener('mouseout') onMouseOut() {
  this.refEle.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  this.refEle.nativeElement.style.transform = 'scale(1.0001)';
  this.refEle.nativeElement.style.transition = 'transform 0.5s ease-in-out';

}
// ngOnChanges(){
//   this.refEle.nativeElement.style.borderRadius= '20px';
// }

}