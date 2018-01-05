import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
