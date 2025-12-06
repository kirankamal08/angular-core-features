import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor:string = '';

  @HostListener('mouseenter') onMouseEnter() {
   // this.bgColor = 'yellow';
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','');
   // this.bgColor = '';
  }

  constructor(private el:ElementRef, private renderer:Renderer2) {
    //this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','yellow');

    // using Hostlisten and Hostbinding to set the directive state to the elements
 
   
   }

}
