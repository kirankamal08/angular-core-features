import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutofocusDirective {

  constructor(private el:ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.focus();
  }

}
