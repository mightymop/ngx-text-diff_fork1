import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LoaderSpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "div");
    i0.ɵɵelement(2, "div");
    i0.ɵɵelement(3, "div");
    i0.ɵɵelement(4, "div");
    i0.ɵɵelement(5, "div");
    i0.ɵɵelement(6, "div");
    i0.ɵɵelement(7, "div");
    i0.ɵɵelement(8, "div");
    i0.ɵɵelementEnd();
} }
export class LoaderSpinnerComponent {
    constructor() {
        this.active = false;
    }
    ngOnInit() { }
}
LoaderSpinnerComponent.ɵfac = function LoaderSpinnerComponent_Factory(t) { return new (t || LoaderSpinnerComponent)(); };
LoaderSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoaderSpinnerComponent, selectors: [["td-loader-spinner"]], inputs: { active: "active" }, decls: 1, vars: 1, consts: [["class", "td-loading-roller", 4, "ngIf"], [1, "td-loading-roller"]], template: function LoaderSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LoaderSpinnerComponent_div_0_Template, 9, 0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.active);
    } }, directives: [i1.NgIf], styles: [".td-loading-roller[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:32px 32px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:\" \";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#000;margin:-3px 0 0 -3px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-36ms;animation-delay:-36ms}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after{top:50px;left:50px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after{top:54px;left:45px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.108s;animation-delay:-.108s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after{top:57px;left:39px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.144s;animation-delay:-.144s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after{top:58px;left:32px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after{top:57px;left:25px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.216s;animation-delay:-.216s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after{top:54px;left:19px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.252s;animation-delay:-.252s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after{top:50px;left:14px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.288s;animation-delay:-.288s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderSpinnerComponent, [{
        type: Component,
        args: [{ selector: 'td-loader-spinner', template: "<div class=\"td-loading-roller\" *ngIf=\"active\">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n", styles: [".td-loading-roller{display:inline-block;position:relative;width:64px;height:64px}.td-loading-roller div{-webkit-animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:32px 32px}.td-loading-roller div:after{content:\" \";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#000;margin:-3px 0 0 -3px}.td-loading-roller div:nth-child(1){-webkit-animation-delay:-36ms;animation-delay:-36ms}.td-loading-roller div:nth-child(1):after{top:50px;left:50px}.td-loading-roller div:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.td-loading-roller div:nth-child(2):after{top:54px;left:45px}.td-loading-roller div:nth-child(3){-webkit-animation-delay:-.108s;animation-delay:-.108s}.td-loading-roller div:nth-child(3):after{top:57px;left:39px}.td-loading-roller div:nth-child(4){-webkit-animation-delay:-.144s;animation-delay:-.144s}.td-loading-roller div:nth-child(4):after{top:58px;left:32px}.td-loading-roller div:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.td-loading-roller div:nth-child(5):after{top:57px;left:25px}.td-loading-roller div:nth-child(6){-webkit-animation-delay:-.216s;animation-delay:-.216s}.td-loading-roller div:nth-child(6):after{top:54px;left:19px}.td-loading-roller div:nth-child(7){-webkit-animation-delay:-.252s;animation-delay:-.252s}.td-loading-roller div:nth-child(7):after{top:50px;left:14px}.td-loading-roller div:nth-child(8){-webkit-animation-delay:-.288s;animation-delay:-.288s}.td-loading-roller div:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
    }], function () { return []; }, { active: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRleHQtZGlmZi9zcmMvbGliL2xvYWRlci1zcGlubmVyL2xvYWRlci1zcGlubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZXh0LWRpZmYvc3JjL2xpYi9sb2FkZXItc3Bpbm5lci9sb2FkZXItc3Bpbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztJQ0F6RCw4QkFBOEM7SUFDNUMsc0JBQVc7SUFDWCxzQkFBVztJQUNYLHNCQUFXO0lBQ1gsc0JBQVc7SUFDWCxzQkFBVztJQUNYLHNCQUFXO0lBQ1gsc0JBQVc7SUFDWCxzQkFBVztJQUNiLGlCQUFNOztBREZOLE1BQU0sT0FBTyxzQkFBc0I7SUFHakM7UUFGUyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRVQsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQzs7NEZBTEYsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUNQbkMsdUVBU007O1FBVDBCLGlDQUFZOzt1RkRPL0Isc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsbUJBQW1CO3NDQUtwQixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbG9hZGVyLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGVyLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkZXItc3Bpbm5lci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVyU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCI8ZGl2IGNsYXNzPVwidGQtbG9hZGluZy1yb2xsZXJcIiAqbmdJZj1cImFjdGl2ZVwiPlxuICA8ZGl2PjwvZGl2PlxuICA8ZGl2PjwvZGl2PlxuICA8ZGl2PjwvZGl2PlxuICA8ZGl2PjwvZGl2PlxuICA8ZGl2PjwvZGl2PlxuICA8ZGl2PjwvZGl2PlxuICA8ZGl2PjwvZGl2PlxuICA8ZGl2PjwvZGl2PlxuPC9kaXY+XG4iXX0=