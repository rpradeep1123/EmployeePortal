
import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';

@Directive({
    selector: '[dynamicHeight]'
})
export class DynamicHeightDirective implements AfterViewChecked {

    el: ElementRef;
    @Input() type: string;

    constructor(el: ElementRef) {
        this.el = el;
    }
    ngAfterViewChecked() {
        this.generateDynamicHeight(this.el.nativeElement);
    }
    generateDynamicHeight(element: HTMLElement) {
        var height = 0;
        var body = window.document.body;
        if (window.innerHeight) {
            height = window.innerHeight;
        } else if (body.parentElement.clientHeight) {
            height = body.parentElement.clientHeight;
        } else if (body && body.clientHeight) {
            height = body.clientHeight;
        }
        element.style.height = ((height - element.offsetTop) + "px");        
    }
}