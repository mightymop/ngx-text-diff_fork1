import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FormatLinePipe {
    transform(line, diffs) {
        if (!line) {
            return ' ';
        }
        if (!!diffs && diffs.length > 0) {
            /*diffs.forEach(diff => {
              line = line.replace(diff, `<span class="highli">${diff}</span>`);
            });*/
        }
        return line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/ /g, '&nbsp;');
    }
}
FormatLinePipe.ɵfac = function FormatLinePipe_Factory(t) { return new (t || FormatLinePipe)(); };
FormatLinePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "formatLine", type: FormatLinePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatLinePipe, [{
        type: Pipe,
        args: [{
                name: 'formatLine'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWxpbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZXh0LWRpZmYvc3JjL2xpYi9mb3JtYXQtbGluZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sY0FBYztJQUN6QixTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWdCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9COztpQkFFSztTQUNOO1FBQ0QsT0FBTyxJQUFJO2FBQ1IsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7YUFDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7YUFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7YUFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7YUFDdkIsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDOzs0RUFoQlUsY0FBYztpRkFBZCxjQUFjO3VGQUFkLGNBQWM7Y0FIMUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmb3JtYXRMaW5lJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRMaW5lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0obGluZTogc3RyaW5nLCBkaWZmcz86IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBpZiAoIWxpbmUpIHtcbiAgICAgIHJldHVybiAnICc7XG4gICAgfVxuICAgIGlmICghIWRpZmZzICYmIGRpZmZzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8qZGlmZnMuZm9yRWFjaChkaWZmID0+IHtcbiAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZShkaWZmLCBgPHNwYW4gY2xhc3M9XCJoaWdobGlcIj4ke2RpZmZ9PC9zcGFuPmApO1xuICAgICAgfSk7Ki9cbiAgICB9XG4gICAgcmV0dXJuIGxpbmVcbiAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgICAucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gIH1cbn1cbiJdfQ==