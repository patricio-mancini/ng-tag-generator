import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAnimate]',
  exportAs: 'appAnimate'
})
export class AnimateDirective {
  @HostBinding('class.animate-in') private animateIn = true;
  @HostBinding('class.animate-out') private animateOut = false;
  @Input() set appAnimate(state: any) { this.animateOut = !state; }
}
