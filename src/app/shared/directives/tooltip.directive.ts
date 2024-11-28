import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  private TooltipElement: HTMLElement | null = null

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.TooltipElement = this.renderer.createElement('span');
    this.renderer.addClass(this.TooltipElement, 'tooltip');
    const text = this.renderer.createText('Dica: clique para mais detalhes');
    this.renderer.appendChild(this.TooltipElement, text);
    this.renderer.appendChild(this.el.nativeElement, this.TooltipElement);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.TooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.TooltipElement);
      this.TooltipElement = null;
    }
  }

}
