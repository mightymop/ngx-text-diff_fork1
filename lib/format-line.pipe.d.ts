import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FormatLinePipe implements PipeTransform {
    transform(line: string, diffs?: string[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatLinePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FormatLinePipe, "formatLine">;
}
