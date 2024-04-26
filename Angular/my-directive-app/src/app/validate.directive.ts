import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validate]',
  standalone: true
})
export class ValidateDirective {

  constructor(
    private el: ElementRef<HTMLInputElement>,
  ) { }

  @HostListener("keyup") keyup() {
    const id = this.el.nativeElement.id;

    const divEl: HTMLDivElement | null = document.querySelector(`#${id} + div`);

    if(!this.el.nativeElement.validity.valid) {
      this.el.nativeElement.style.borderColor = "red";
      divEl!.style.display = "block";
      divEl!.innerHTML = this.el.nativeElement.validationMessage;
      
    }else {
      this.el.nativeElement.style.borderColor = "black";
      divEl!.style.display = "none";

    }
  }
}
