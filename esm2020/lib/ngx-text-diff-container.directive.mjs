import { Directive, Input, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ContainerDirective {
    constructor(_el) {
        this._el = _el;
        this.element = _el.nativeElement;
    }
}
ContainerDirective.ɵfac = function ContainerDirective_Factory(t) { return new (t || ContainerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ContainerDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContainerDirective, selectors: [["", "tdContainer", ""]], inputs: { id: "id" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerDirective, [{
        type: Directive,
        args: [{
                selector: '[tdContainer]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { id: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRleHQtZGlmZi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRleHQtZGlmZi9zcmMvbGliL25neC10ZXh0LWRpZmYtY29udGFpbmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzdELE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7O29GQVBVLGtCQUFrQjtxRUFBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzZEQUVVLEVBQUU7a0JBQVYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkQ29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG5cbiAgZWxlbWVudDogSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19