import { Directive, ElementRef, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appButtonDisabledIfInvalid]',
  standalone: true
})
export class ButtonDisabledIfInvalidDirective implements OnInit, OnDestroy {
  @Input('appButtonDisabledIfInvalid') form!: FormGroup;
  private statusSub!: Subscription;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.form) {
      console.error('FormGroup is required for appButtonDisabledIfInvalid directive');
      return;
    }

    // Set initial state
    this.updateButtonState(this.form.invalid);

    // Subscribe to status changes
    this.statusSub = this.form.statusChanges.subscribe(status => {
      this.updateButtonState(this.form.invalid);
    });
  }

  private updateButtonState(disabled: boolean) {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', disabled);
  }

  ngOnDestroy(): void {
    if (this.statusSub) {
      this.statusSub.unsubscribe();
    }
  }
}
