import { Directive, ElementRef, Host, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[myColor]',
  standalone: true
})
export class MyColorDirective {

  // ng generate directive (name)
  
  @Input("color") color :string = "";

  constructor(
    private el: ElementRef<HTMLSpanElement>
  ) { }
  
  @HostListener("mouseenter") mouseenter() {
    this.el.nativeElement.style.color = this.color;
    // const h1El = document.querySelector("h1");
    // h1El!.style.color = "red";
  }

  @HostListener("mouseleave") mouseleave(){
    this.el.nativeElement.style.color = this.color;
    // const h1El = document.querySelector("h1");
    // h1El!.style.color = "brown";
  }
}
