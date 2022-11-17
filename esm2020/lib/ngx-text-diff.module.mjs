import { NgModule } from '@angular/core';
import { NgxTextDiffComponent } from './ngx-text-diff.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import { FormatLinePipe } from './format-line.pipe';
import { ContainerDirective } from './ngx-text-diff-container.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
export class NgxTextDiffModule {
}
NgxTextDiffModule.ɵfac = function NgxTextDiffModule_Factory(t) { return new (t || NgxTextDiffModule)(); };
NgxTextDiffModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxTextDiffModule });
NgxTextDiffModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule, ScrollingModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTextDiffModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, ScrollingModule],
                declarations: [NgxTextDiffComponent, LoaderSpinnerComponent, FormatLinePipe, ContainerDirective],
                exports: [NgxTextDiffComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxTextDiffModule, { declarations: [NgxTextDiffComponent, LoaderSpinnerComponent, FormatLinePipe, ContainerDirective], imports: [CommonModule, FormsModule, ScrollingModule], exports: [NgxTextDiffComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRleHQtZGlmZi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGV4dC1kaWZmL3NyYy9saWIvbmd4LXRleHQtZGlmZi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBT3pELE1BQU0sT0FBTyxpQkFBaUI7O2tGQUFqQixpQkFBaUI7bUVBQWpCLGlCQUFpQjt1RUFKbkIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQzt1RkFJMUMsaUJBQWlCO2NBTDdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQztnQkFDckQsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2dCQUNoRyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7d0ZBQ1ksaUJBQWlCLG1CQUhiLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsYUFEckYsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLGFBRTFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hUZXh0RGlmZkNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXRleHQtZGlmZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTG9hZGVyU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGVyLXNwaW5uZXIvbG9hZGVyLXNwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdExpbmVQaXBlIH0gZnJvbSAnLi9mb3JtYXQtbGluZS5waXBlJztcbmltcG9ydCB7IENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LXRleHQtZGlmZi1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgU2Nyb2xsaW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmd4VGV4dERpZmZDb21wb25lbnQsIExvYWRlclNwaW5uZXJDb21wb25lbnQsIEZvcm1hdExpbmVQaXBlLCBDb250YWluZXJEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmd4VGV4dERpZmZDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUZXh0RGlmZk1vZHVsZSB7fVxuIl19