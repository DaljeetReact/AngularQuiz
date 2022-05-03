import { Directive,Input,ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective {
  @Input() isCorrect:boolean = false; 
  constructor(private _elementRef: ElementRef,private renderer:Renderer2 ) { }
  @HostListener('click') Answer(){
     this.renderer.setStyle(this._elementRef.nativeElement, 'color', 'white');
     if(this.isCorrect){
      this.renderer.setStyle(this._elementRef.nativeElement, 'background', 'green');
     }else{
      this.renderer.setStyle(this._elementRef.nativeElement, 'background', 'red');
     }
  }
}
