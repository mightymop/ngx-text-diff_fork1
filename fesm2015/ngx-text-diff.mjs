import * as i0 from '@angular/core';
import { Injectable, Directive, Input, Component, Pipe, EventEmitter, ViewChildren, Output, NgModule } from '@angular/core';
import { diff_match_patch, DIFF_INSERT, DIFF_DELETE, DIFF_EQUAL } from 'diff-match-patch';
import { __awaiter } from 'tslib';
import * as i1 from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/forms';
import { FormsModule } from '@angular/forms';

const isNil = val => val === undefined || val === null;
const isEmpty = val => val == null || !(Object.keys(val) || val).length || (Object.keys(val) || val).length === 0;

class NgxTextDiffService {
    constructor() {
        this.initParser();
    }
    initParser() {
        this.diffParser = new diff_match_patch();
    }
    getDiffsByLines(left, right) {
        return new Promise((resolve, reject) => {
            const a = this.diffParser.diff_linesToChars_(left, right);
            const lineText1 = a.chars1;
            const lineText2 = a.chars2;
            const linesArray = a.lineArray;
            const diffs = this.diffParser.diff_main(lineText1, lineText2, true);
            this.diffParser.diff_charsToLines_(diffs, linesArray);
            const rows = this.formatOutput(diffs);
            if (!rows) {
                reject('Error');
            }
            resolve(rows);
        });
    }
    formatOutput(diffs) {
        let lineLeft = 1;
        let lineRight = 1;
        return diffs.reduce((rows, diff) => {
            if (!rows) {
                rows = [];
            }
            const diffType = diff[0];
            const diffValue = diff[1];
            let leftDiffRow = null;
            let rightDiffRow = null;
            let leftContent = null;
            let rightContent = null;
            let rowTemp = null;
            switch (diffType) {
                case DIFF_EQUAL: // 0
                    diffValue
                        .split('\n')
                        .filter((value, index, array) => {
                        if (index === array.length - 1) {
                            return !isEmpty(value);
                        }
                        return true;
                    })
                        .forEach(line => {
                        leftContent = {
                            lineNumber: lineLeft,
                            lineContent: line,
                            lineDiffs: [],
                            prefix: ''
                        };
                        rightContent = {
                            lineNumber: lineRight,
                            lineContent: line,
                            lineDiffs: [],
                            prefix: ''
                        };
                        rowTemp = {
                            leftContent,
                            rightContent,
                            belongTo: 'both',
                            hasDiffs: false,
                            numDiffs: 0,
                        };
                        rows.push(rowTemp);
                        lineRight = lineRight + 1;
                        lineLeft = lineLeft + 1;
                    });
                    break;
                case DIFF_DELETE: // -1
                    diffValue
                        .split('\n')
                        .filter((value, index, array) => {
                        if (index === array.length - 1) {
                            return !isEmpty(value);
                        }
                        return true;
                    })
                        .forEach(line => {
                        rightDiffRow = rows.find(row => !row.leftContent && row.rightContent && row.rightContent.lineNumber === lineLeft && row.rightContent.prefix !== '');
                        leftContent = {
                            lineNumber: lineLeft,
                            lineContent: line,
                            lineDiffs: [{ content: line, isDiff: true }],
                            prefix: '-'
                        };
                        if (rightDiffRow) {
                            rightDiffRow.leftContent = leftContent;
                            rightDiffRow.leftContent.lineDiffs = this.getDiffParts(rightDiffRow.leftContent.lineContent, rightDiffRow.rightContent.lineContent);
                            rightDiffRow.rightContent.lineDiffs = this.getDiffParts(rightDiffRow.rightContent.lineContent, rightDiffRow.leftContent.lineContent);
                            rightDiffRow.belongTo = 'both';
                            rightDiffRow.numDiffs = this.countDiffs(rightDiffRow);
                        }
                        else {
                            rows.push({
                                leftContent,
                                rightContent: null,
                                hasDiffs: true,
                                belongTo: 'left',
                                numDiffs: 1,
                            });
                        }
                        lineLeft = lineLeft + 1;
                    });
                    break;
                case DIFF_INSERT: // 1
                    diffValue
                        .split('\n')
                        .filter((value, index, array) => {
                        if (index === array.length - 1) {
                            return !isEmpty(value);
                        }
                        return true;
                    })
                        .forEach(line => {
                        leftDiffRow = rows.find(row => row.leftContent && !row.rightContent && row.leftContent.lineNumber === lineRight && row.leftContent.prefix !== '');
                        rightContent = {
                            lineNumber: lineRight,
                            lineContent: line,
                            lineDiffs: [{ content: line, isDiff: true }],
                            prefix: '+'
                        };
                        if (leftDiffRow) {
                            leftDiffRow.rightContent = rightContent;
                            leftDiffRow.leftContent.lineDiffs = this.getDiffParts(leftDiffRow.leftContent.lineContent, leftDiffRow.rightContent.lineContent);
                            leftDiffRow.rightContent.lineDiffs = this.getDiffParts(leftDiffRow.rightContent.lineContent, leftDiffRow.leftContent.lineContent);
                            leftDiffRow.belongTo = 'both';
                            leftDiffRow.numDiffs = this.countDiffs(leftDiffRow);
                        }
                        else {
                            rows.push({
                                leftContent: null,
                                rightContent,
                                hasDiffs: true,
                                belongTo: 'right',
                                numDiffs: 1,
                            });
                        }
                        lineRight = lineRight + 1;
                    });
                    break;
            }
            return rows;
        }, []);
    }
    countDiffs(result) {
        let diffCount = 0;
        if (result.leftContent) {
            diffCount += result.leftContent.lineDiffs.filter(diff => diff.isDiff).length;
        }
        if (result.leftContent) {
            diffCount += result.rightContent.lineDiffs.filter(diff => diff.isDiff).length;
        }
        return diffCount;
    }
    getDiffParts(value, compareValue) {
        const diffParts = [];
        let i = 0;
        let j = 0;
        let shared = '';
        let diff = '';
        while (i < value.length) {
            if (value[i] === compareValue[j] && j < compareValue.length) {
                if (diff !== '') {
                    diffParts.push({ content: diff, isDiff: true });
                    diff = '';
                }
                shared += value[i];
            }
            else {
                if (shared !== '') {
                    diffParts.push({ content: shared, isDiff: false });
                    shared = '';
                }
                diff += value[i];
            }
            i++;
            j++;
        }
        if (diff !== '') {
            diffParts.push({ content: diff, isDiff: true });
        }
        else if (shared !== '') {
            diffParts.push({ content: shared, isDiff: false });
        }
        return diffParts;
    }
}
NgxTextDiffService.ɵfac = function NgxTextDiffService_Factory(t) { return new (t || NgxTextDiffService)(); };
NgxTextDiffService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgxTextDiffService, factory: NgxTextDiffService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTextDiffService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

class ContainerDirective {
    constructor(_el) {
        this._el = _el;
        this.element = _el.nativeElement;
    }
}
ContainerDirective.ɵfac = function ContainerDirective_Factory(t) { return new (t || ContainerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ContainerDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContainerDirective, selectors: [["", "tdContainer", ""]], inputs: { id: "id" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerDirective, [{
            type: Directive,
            args: [{
                    selector: '[tdContainer]',
                }]
        }], function () { return [{ type: i0.ElementRef }]; }, { id: [{
                type: Input
            }] });
})();

function LoaderSpinnerComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
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
    }
}
class LoaderSpinnerComponent {
    constructor() {
        this.active = false;
    }
    ngOnInit() { }
}
LoaderSpinnerComponent.ɵfac = function LoaderSpinnerComponent_Factory(t) { return new (t || LoaderSpinnerComponent)(); };
LoaderSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoaderSpinnerComponent, selectors: [["td-loader-spinner"]], inputs: { active: "active" }, decls: 1, vars: 1, consts: [["class", "td-loading-roller", 4, "ngIf"], [1, "td-loading-roller"]], template: function LoaderSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, LoaderSpinnerComponent_div_0_Template, 9, 0, "div", 0);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.active);
        }
    }, directives: [i4.NgIf], styles: [".td-loading-roller[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:32px 32px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:\" \";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#000;margin:-3px 0 0 -3px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-36ms;animation-delay:-36ms}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after{top:50px;left:50px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after{top:54px;left:45px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.108s;animation-delay:-.108s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after{top:57px;left:39px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.144s;animation-delay:-.144s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after{top:58px;left:32px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after{top:57px;left:25px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.216s;animation-delay:-.216s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after{top:54px;left:19px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.252s;animation-delay:-.252s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after{top:50px;left:14px}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.288s;animation-delay:-.288s}.td-loading-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoaderSpinnerComponent, [{
            type: Component,
            args: [{ selector: 'td-loader-spinner', template: "<div class=\"td-loading-roller\" *ngIf=\"active\">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n", styles: [".td-loading-roller{display:inline-block;position:relative;width:64px;height:64px}.td-loading-roller div{-webkit-animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:32px 32px}.td-loading-roller div:after{content:\" \";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#000;margin:-3px 0 0 -3px}.td-loading-roller div:nth-child(1){-webkit-animation-delay:-36ms;animation-delay:-36ms}.td-loading-roller div:nth-child(1):after{top:50px;left:50px}.td-loading-roller div:nth-child(2){-webkit-animation-delay:-72ms;animation-delay:-72ms}.td-loading-roller div:nth-child(2):after{top:54px;left:45px}.td-loading-roller div:nth-child(3){-webkit-animation-delay:-.108s;animation-delay:-.108s}.td-loading-roller div:nth-child(3):after{top:57px;left:39px}.td-loading-roller div:nth-child(4){-webkit-animation-delay:-.144s;animation-delay:-.144s}.td-loading-roller div:nth-child(4):after{top:58px;left:32px}.td-loading-roller div:nth-child(5){-webkit-animation-delay:-.18s;animation-delay:-.18s}.td-loading-roller div:nth-child(5):after{top:57px;left:25px}.td-loading-roller div:nth-child(6){-webkit-animation-delay:-.216s;animation-delay:-.216s}.td-loading-roller div:nth-child(6):after{top:54px;left:19px}.td-loading-roller div:nth-child(7){-webkit-animation-delay:-.252s;animation-delay:-.252s}.td-loading-roller div:nth-child(7):after{top:50px;left:14px}.td-loading-roller div:nth-child(8){-webkit-animation-delay:-.288s;animation-delay:-.288s}.td-loading-roller div:nth-child(8):after{top:45px;left:10px}@-webkit-keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes lds-roller{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], function () { return []; }, { active: [{
                type: Input
            }] });
})();

class FormatLinePipe {
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
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatLinePipe, [{
            type: Pipe,
            args: [{
                    name: 'formatLine'
                }]
        }], null, null);
})();

function NgxTextDiffComponent_div_1_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 9);
        i0.ɵɵelementStart(1, "div", 10);
        i0.ɵɵelementStart(2, "label", 11);
        i0.ɵɵtext(3);
        i0.ɵɵelementStart(4, "input", 12);
        i0.ɵɵlistener("ngModelChange", function NgxTextDiffComponent_div_1_div_1_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.hideMatchingLinesChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "span", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngClass", ctx_r1.toolbarClass)("ngStyle", ctx_r1.toolbarStyle);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" Only Show Lines with Differences (", ctx_r1.diffsCount, ") ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r1.hideMatchingLines);
    }
}
const _c0 = function (a0, a1) { return { active: a0, disabled: a1 }; };
function NgxTextDiffComponent_div_1_div_2_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 17);
        i0.ɵɵlistener("click", function NgxTextDiffComponent_div_1_div_2_button_2_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const option_r9 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(3); return ctx_r10.setDiffTableFormat(option_r9.value); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r9 = ctx.$implicit;
        const ctx_r8 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx_r8.format === option_r9.value, !!option_r9.disabled))("name", option_r9.name)("id", option_r9.id)("disabled", !!option_r9.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", option_r9.label, " ");
    }
}
function NgxTextDiffComponent_div_1_div_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 14);
        i0.ɵɵelementStart(1, "div", 15);
        i0.ɵɵtemplate(2, NgxTextDiffComponent_div_1_div_2_button_2_Template, 2, 8, "button", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r2.formatOptions);
    }
}
const _c1 = function (a0, a1) { return { "delete-row": a0, "empty-row": a1 }; };
function NgxTextDiffComponent_div_1_div_4_tr_3_td_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 24);
        i0.ɵɵelement(1, "span", 25);
        i0.ɵɵpipe(2, "formatLine");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r13 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c1, (row_r13.leftContent == null ? null : row_r13.leftContent.prefix) === "-", !(row_r13.leftContent == null ? null : row_r13.leftContent.lineContent)));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, row_r13.leftContent == null ? null : row_r13.leftContent.lineContent), i0.ɵɵsanitizeHtml);
    }
}
const _c2 = function (a0) { return { highlight: a0 }; };
function NgxTextDiffComponent_div_1_div_4_tr_3_td_7_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 27);
        i0.ɵɵpipe(1, "formatLine");
    }
    if (rf & 2) {
        const diff_r18 = ctx.$implicit;
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r18.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r18.isDiff));
    }
}
function NgxTextDiffComponent_div_1_div_4_tr_3_td_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 24);
        i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_4_tr_3_td_7_span_1_Template, 2, 6, "span", 26);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r13 = i0.ɵɵnextContext().$implicit;
        const ctx_r15 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c1, (row_r13.leftContent == null ? null : row_r13.leftContent.prefix) === "-", !(row_r13.leftContent == null ? null : row_r13.leftContent.lineContent)));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", row_r13.leftContent == null ? null : row_r13.leftContent.lineDiffs)("ngForTrackBy", ctx_r15.trackDiffs);
    }
}
function NgxTextDiffComponent_div_1_div_4_tr_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "tr");
        i0.ɵɵelementStart(1, "td", 21);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "td", 22);
        i0.ɵɵelementStart(4, "span");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, NgxTextDiffComponent_div_1_div_4_tr_3_td_6_Template, 3, 7, "td", 23);
        i0.ɵɵtemplate(7, NgxTextDiffComponent_div_1_div_4_tr_3_td_7_Template, 2, 6, "td", 23);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r13 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c1, (row_r13.leftContent == null ? null : row_r13.leftContent.prefix) === "-", !(row_r13.leftContent == null ? null : row_r13.leftContent.lineContent)));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", (row_r13.leftContent == null ? null : row_r13.leftContent.lineNumber) !== -1 ? row_r13.leftContent == null ? null : row_r13.leftContent.lineNumber : " ", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c1, (row_r13.leftContent == null ? null : row_r13.leftContent.prefix) === "-", !(row_r13.leftContent == null ? null : row_r13.leftContent.lineContent)));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate((row_r13.leftContent == null ? null : row_r13.leftContent.prefix) || " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !row_r13.hasDiffs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", row_r13.hasDiffs);
    }
}
function NgxTextDiffComponent_div_1_div_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 18);
        i0.ɵɵelementStart(1, "table", 19);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, NgxTextDiffComponent_div_1_div_4_tr_3_Template, 8, 12, "tr", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r3.filteredTableRows)("ngForTrackBy", ctx_r3.trackTableRows);
    }
}
const _c3 = function (a0, a1) { return { "insert-row": a0, "empty-row": a1 }; };
function NgxTextDiffComponent_div_1_div_5_tr_3_td_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 24);
        i0.ɵɵelement(1, "span", 25);
        i0.ɵɵpipe(2, "formatLine");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r21 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c3, (row_r21.rightContent == null ? null : row_r21.rightContent.prefix) === "+", !(row_r21.rightContent == null ? null : row_r21.rightContent.lineContent)));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, row_r21.rightContent == null ? null : row_r21.rightContent.lineContent), i0.ɵɵsanitizeHtml);
    }
}
function NgxTextDiffComponent_div_1_div_5_tr_3_td_7_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 27);
        i0.ɵɵpipe(1, "formatLine");
    }
    if (rf & 2) {
        const diff_r26 = ctx.$implicit;
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r26.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r26.isDiff));
    }
}
function NgxTextDiffComponent_div_1_div_5_tr_3_td_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 24);
        i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_5_tr_3_td_7_span_1_Template, 2, 6, "span", 26);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r21 = i0.ɵɵnextContext().$implicit;
        const ctx_r23 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c3, (row_r21.rightContent == null ? null : row_r21.rightContent.prefix) === "+", !(row_r21.rightContent == null ? null : row_r21.rightContent.lineContent)));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", row_r21.rightContent == null ? null : row_r21.rightContent.lineDiffs)("ngForTrackBy", ctx_r23.trackDiffs);
    }
}
function NgxTextDiffComponent_div_1_div_5_tr_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "tr");
        i0.ɵɵelementStart(1, "td", 21);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "td", 22);
        i0.ɵɵelementStart(4, "span");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, NgxTextDiffComponent_div_1_div_5_tr_3_td_6_Template, 3, 7, "td", 23);
        i0.ɵɵtemplate(7, NgxTextDiffComponent_div_1_div_5_tr_3_td_7_Template, 2, 6, "td", 23);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r21 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c3, (row_r21.rightContent == null ? null : row_r21.rightContent.prefix) === "+", !(row_r21.rightContent == null ? null : row_r21.rightContent.lineContent)));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", (row_r21.rightContent == null ? null : row_r21.rightContent.lineNumber) !== -1 ? row_r21.rightContent == null ? null : row_r21.rightContent.lineNumber : " ", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c3, (row_r21.rightContent == null ? null : row_r21.rightContent.prefix) === "+", !(row_r21.rightContent == null ? null : row_r21.rightContent.lineContent)));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate((row_r21.rightContent == null ? null : row_r21.rightContent.prefix) || " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !row_r21.hasDiffs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", row_r21.hasDiffs);
    }
}
function NgxTextDiffComponent_div_1_div_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 28);
        i0.ɵɵelementStart(1, "table", 19);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, NgxTextDiffComponent_div_1_div_5_tr_3_Template, 8, 12, "tr", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r4.filteredTableRows)("ngForTrackBy", ctx_r4.trackTableRows);
    }
}
const _c4 = function (a0, a1) { return { "delete-row": a0, "insert-row": a1 }; };
function NgxTextDiffComponent_div_1_div_6_tr_3_td_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 24);
        i0.ɵɵelement(1, "span", 25);
        i0.ɵɵpipe(2, "formatLine");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r29 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c4, (row_r29.leftContent == null ? null : row_r29.leftContent.prefix) === "-", (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) === "+"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, row_r29.leftContent == null ? null : row_r29.leftContent.lineContent), i0.ɵɵsanitizeHtml);
    }
}
function NgxTextDiffComponent_div_1_div_6_tr_3_td_9_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 27);
        i0.ɵɵpipe(1, "formatLine");
    }
    if (rf & 2) {
        const diff_r35 = ctx.$implicit;
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r35.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r35.isDiff));
    }
}
function NgxTextDiffComponent_div_1_div_6_tr_3_td_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 24);
        i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_6_tr_3_td_9_span_1_Template, 2, 6, "span", 26);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r29 = i0.ɵɵnextContext().$implicit;
        const ctx_r31 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c4, (row_r29.leftContent == null ? null : row_r29.leftContent.prefix) === "-", (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) === "+"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", row_r29.leftContent == null ? null : row_r29.leftContent.lineDiffs)("ngForTrackBy", ctx_r31.trackDiffs);
    }
}
function NgxTextDiffComponent_div_1_div_6_tr_3_td_10_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 27);
        i0.ɵɵpipe(1, "formatLine");
    }
    if (rf & 2) {
        const diff_r38 = ctx.$implicit;
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r38.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r38.isDiff));
    }
}
function NgxTextDiffComponent_div_1_div_6_tr_3_td_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 24);
        i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_6_tr_3_td_10_span_1_Template, 2, 6, "span", 26);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r29 = i0.ɵɵnextContext().$implicit;
        const ctx_r32 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c4, (row_r29.leftContent == null ? null : row_r29.leftContent.prefix) === "-", (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) === "+"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", row_r29.rightContent == null ? null : row_r29.rightContent.lineDiffs)("ngForTrackBy", ctx_r32.trackDiffs);
    }
}
function NgxTextDiffComponent_div_1_div_6_tr_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "tr");
        i0.ɵɵelementStart(1, "td", 30);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "td", 31);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "td", 22);
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, NgxTextDiffComponent_div_1_div_6_tr_3_td_8_Template, 3, 7, "td", 23);
        i0.ɵɵtemplate(9, NgxTextDiffComponent_div_1_div_6_tr_3_td_9_Template, 2, 6, "td", 23);
        i0.ɵɵtemplate(10, NgxTextDiffComponent_div_1_div_6_tr_3_td_10_Template, 2, 6, "td", 23);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r29 = ctx.$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(row_r29.leftContent == null ? null : row_r29.leftContent.lineNumber);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(row_r29.rightContent == null ? null : row_r29.rightContent.lineNumber);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(7, _c4, (row_r29.leftContent == null ? null : row_r29.leftContent.prefix) === "-", (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) === "+"));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate((row_r29.leftContent == null ? null : row_r29.leftContent.prefix) || (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) || " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !row_r29.hasDiffs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", row_r29.hasDiffs && row_r29.leftContent && (row_r29.leftContent == null ? null : row_r29.leftContent.lineDiffs.length) !== 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", row_r29.hasDiffs && row_r29.rightContent && (row_r29.rightContent == null ? null : row_r29.rightContent.lineDiffs.length) !== 0);
    }
}
function NgxTextDiffComponent_div_1_div_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 29);
        i0.ɵɵelementStart(1, "table", 19);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, NgxTextDiffComponent_div_1_div_6_tr_3_Template, 11, 10, "tr", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r5 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r5.filteredTableRowsLineByLine)("ngForTrackBy", ctx_r5.trackTableRows);
    }
}
function NgxTextDiffComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2);
        i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_1_Template, 6, 4, "div", 3);
        i0.ɵɵtemplate(2, NgxTextDiffComponent_div_1_div_2_Template, 3, 1, "div", 4);
        i0.ɵɵelementStart(3, "div", 5);
        i0.ɵɵtemplate(4, NgxTextDiffComponent_div_1_div_4_Template, 4, 2, "div", 6);
        i0.ɵɵtemplate(5, NgxTextDiffComponent_div_1_div_5_Template, 4, 2, "div", 7);
        i0.ɵɵtemplate(6, NgxTextDiffComponent_div_1_div_6_Template, 4, 2, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r0.outerContainerClass)("ngStyle", ctx_r0.outerContainerStyle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.showToolbar);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.showToolbar && ctx_r0.showBtnToolbar);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx_r0.compareRowsClass)("ngStyle", ctx_r0.compareRowsStyle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.format === "SideBySide");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.format === "SideBySide");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.format === "LineByLine");
    }
}
class NgxTextDiffComponent {
    constructor(scrollService, diff, cd) {
        this.scrollService = scrollService;
        this.diff = diff;
        this.cd = cd;
        this._hideMatchingLines = false;
        this.format = 'SideBySide';
        this.left = '';
        this.right = '';
        this.loading = false;
        this.showToolbar = true;
        this.showBtnToolbar = true;
        this.synchronizeScrolling = true;
        this.compareResults = new EventEmitter();
        this.subscriptions = [];
        this.tableRows = [];
        this.filteredTableRows = [];
        this.tableRowsLineByLine = [];
        this.filteredTableRowsLineByLine = [];
        this.diffsCount = 0;
        this.formatOptions = [
            {
                id: 'side-by-side',
                name: 'side-by-side',
                label: 'Side by Side',
                value: 'SideBySide',
                icon: 'la-code',
            },
            {
                id: 'line-by-line',
                name: 'line-by-line',
                label: 'Line by Line',
                value: 'LineByLine',
                icon: 'la-file-text',
            },
        ];
    }
    get hideMatchingLines() {
        return this._hideMatchingLines;
    }
    set hideMatchingLines(hide) {
        this.hideMatchingLinesChanged(hide);
    }
    ngOnInit() {
        this.loading = true;
        if (this.diffContent) {
            this.subscriptions.push(this.diffContent.subscribe(content => {
                this.loading = true;
                this.left = content.leftContent;
                this.right = content.rightContent;
                this.renderDiffs()
                    .then(() => {
                    this.cd.detectChanges();
                    this.loading = false;
                })
                    .catch(() => (this.loading = false));
            }));
        }
        this.renderDiffs()
            .then(() => (this.loading = false))
            .catch(e => (this.loading = false));
    }
    ngAfterViewInit() {
        this.initScrollListener();
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.forEach(subscription => subscription.unsubscribe());
        }
    }
    hideMatchingLinesChanged(value) {
        this._hideMatchingLines = value;
        if (this.hideMatchingLines) {
            this.filteredTableRows = this.tableRows.filter(row => (row.leftContent && row.leftContent.prefix === '-') || (row.rightContent && row.rightContent.prefix === '+'));
            this.filteredTableRowsLineByLine = this.tableRowsLineByLine.filter(row => (row.leftContent && row.leftContent.prefix === '-') || (row.rightContent && row.rightContent.prefix === '+'));
        }
        else {
            this.filteredTableRows = this.tableRows;
            this.filteredTableRowsLineByLine = this.tableRowsLineByLine;
        }
    }
    setDiffTableFormat(format) {
        this.format = format;
    }
    renderDiffs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.diffsCount = 0;
                this.tableRows = yield this.diff.getDiffsByLines(this.left, this.right);
                this.tableRowsLineByLine = this.tableRows.reduce((tableLineByLine, row) => {
                    if (!tableLineByLine) {
                        tableLineByLine = [];
                    }
                    if (row.hasDiffs) {
                        if (row.leftContent) {
                            tableLineByLine.push({
                                leftContent: row.leftContent,
                                rightContent: null,
                                belongTo: row.belongTo,
                                hasDiffs: true,
                                numDiffs: row.numDiffs,
                            });
                        }
                        if (row.rightContent) {
                            tableLineByLine.push({
                                leftContent: null,
                                rightContent: row.rightContent,
                                belongTo: row.belongTo,
                                hasDiffs: true,
                                numDiffs: row.numDiffs,
                            });
                        }
                    }
                    else {
                        tableLineByLine.push(row);
                    }
                    return tableLineByLine;
                }, []);
                this.diffsCount = this.tableRows.filter(row => row.hasDiffs).length;
                this.filteredTableRows = this.tableRows;
                this.filteredTableRowsLineByLine = this.tableRowsLineByLine;
                this.emitCompareResultsEvent();
            }
            catch (e) {
                throw e;
            }
        });
    }
    emitCompareResultsEvent() {
        const diffResults = {
            hasDiff: this.diffsCount > 0,
            diffsCount: this.diffsCount,
            rowsWithDiff: this.tableRows
                .filter(row => row.hasDiffs)
                .map(row => ({
                leftLineNumber: row.leftContent ? row.leftContent.lineNumber : null,
                rightLineNumber: row.rightContent ? row.rightContent.lineNumber : null,
                numDiffs: row.numDiffs,
            })),
        };
        this.compareResults.next(diffResults);
    }
    trackTableRows(index, row) {
        return row && row.leftContent ? row.leftContent.lineContent : row && row.rightContent ? row.rightContent.lineContent : undefined;
    }
    trackDiffs(index, diff) {
        return diff && diff.content ? diff.content : undefined;
    }
    initScrollListener() {
        this.subscriptions.push(this.scrollService.scrolled().subscribe((scrollableEv) => {
            if (scrollableEv && this.synchronizeScrolling) {
                const scrollableId = scrollableEv.getElementRef().nativeElement.id;
                const nonScrolledContainer = this.containers.find(container => container.id !== scrollableId);
                if (nonScrolledContainer) {
                    nonScrolledContainer.element.scrollTo({
                        top: scrollableEv.measureScrollOffset('top'),
                        left: scrollableEv.measureScrollOffset('left'),
                    });
                }
            }
        }));
    }
}
NgxTextDiffComponent.ɵfac = function NgxTextDiffComponent_Factory(t) { return new (t || NgxTextDiffComponent)(i0.ɵɵdirectiveInject(i1.ScrollDispatcher), i0.ɵɵdirectiveInject(NgxTextDiffService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NgxTextDiffComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxTextDiffComponent, selectors: [["td-ngx-text-diff"]], viewQuery: function NgxTextDiffComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(ContainerDirective, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containers = _t);
        }
    }, inputs: { format: "format", left: "left", right: "right", diffContent: "diffContent", loading: "loading", showToolbar: "showToolbar", showBtnToolbar: "showBtnToolbar", hideMatchingLines: "hideMatchingLines", outerContainerClass: "outerContainerClass", outerContainerStyle: "outerContainerStyle", toolbarClass: "toolbarClass", toolbarStyle: "toolbarStyle", compareRowsClass: "compareRowsClass", compareRowsStyle: "compareRowsStyle", synchronizeScrolling: "synchronizeScrolling" }, outputs: { compareResults: "compareResults" }, decls: 2, vars: 2, consts: [[3, "active"], ["class", "td-wrapper", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "td-wrapper", 3, "ngClass", "ngStyle"], [3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "td-toolbar-select-format", 4, "ngIf"], [1, "td-table-wrapper", 3, "ngClass", "ngStyle"], ["class", "td-table-container side-by-side", "id", "td-left-compare-container", "tdContainer", "", "cdkScrollable", "", 4, "ngIf"], ["class", "td-table-container side-by-side", "id", "td-right-compare-container", "tdContainer", "", "cdkScrollable", "", 4, "ngIf"], ["class", "td-table-container line-by-line", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "td-toolbar-show-diff"], [1, "td-checkbox-container"], ["type", "checkbox", "id", "showDiffs", 3, "ngModel", "ngModelChange"], [1, "checkmark"], [1, "td-toolbar-select-format"], ["data-toggle", "buttons", 1, "td-btn-group", "td-btn-group-toggle"], [3, "ngClass", "name", "id", "disabled", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "name", "id", "disabled", "click"], ["id", "td-left-compare-container", "tdContainer", "", "cdkScrollable", "", 1, "td-table-container", "side-by-side"], [1, "td-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["scope", "row", 1, "fit-column", "line-number-col", 3, "ngClass"], [1, "fit-column", "prefix-col", 3, "ngClass"], ["class", "content-col", 3, "ngClass", 4, "ngIf"], [1, "content-col", 3, "ngClass"], [3, "innerHTML"], [3, "innerHTML", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "innerHTML", "ngClass"], ["id", "td-right-compare-container", "tdContainer", "", "cdkScrollable", "", 1, "td-table-container", "side-by-side"], [1, "td-table-container", "line-by-line"], ["scope", "row", 1, "fit-column", "line-number-col-left"], ["scope", "row", 1, "fit-column", "line-number-col"]], template: function NgxTextDiffComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "td-loader-spinner", 0);
            i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_Template, 7, 9, "div", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("active", ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.loading);
        }
    }, directives: [LoaderSpinnerComponent, i4.NgIf, i4.NgClass, i4.NgStyle, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgModel, i4.NgForOf, ContainerDirective, i1.CdkScrollable], pipes: [FormatLinePipe], styles: [".td-wrapper[_ngcontent-%COMP%]{display:grid;width:100%;grid-row-gap:10px;grid-template-columns:repeat(2,[col] 50%);grid-template-rows:repeat(2,[row] auto);background-color:#fff;color:#444}.td-toolbar-show-diff[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.td-toolbar-select-format[_ngcontent-%COMP%]{margin-left:auto;grid-column:2;grid-row:1}.td-table-container[_ngcontent-%COMP%]{grid-column:1 / 2;grid-row:2;width:100%;max-width:100%;overflow-x:auto}.td-table-wrapper[_ngcontent-%COMP%]{display:flex;width:200%}.td-table[_ngcontent-%COMP%]{border:1px solid darkgray;max-height:50vh;width:100%;max-width:100%}.fit-column[_ngcontent-%COMP%]{width:1px;white-space:nowrap}.line-number-col[_ngcontent-%COMP%]{position:relative;position:-webkit-sticky;position:sticky;left:0;top:auto;border-right:1px solid #ddd;color:#999;text-align:right;background-color:#f7f7f7;padding-left:10px;padding-right:10px;font-size:87.5%}.line-number-col-left[_ngcontent-%COMP%]{color:#999;padding-left:10px;padding-right:10px;text-align:right;background-color:#f7f7f7;font-size:87.5%}.insert-row[_ngcontent-%COMP%], .insert-row[_ngcontent-%COMP%] > .line-number-col[_ngcontent-%COMP%]{background-color:#dfd;border-color:#b4e2b4}.delete-row[_ngcontent-%COMP%], .delete-row[_ngcontent-%COMP%] > .line-number-col[_ngcontent-%COMP%]{background-color:#fee8e9;border-color:#e9aeae}.empty-row[_ngcontent-%COMP%]{background-color:#f7f7f7;height:24px}.td-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:0;padding-top:0;padding-bottom:0;white-space:nowrap;max-width:50%}pre[_ngcontent-%COMP%]{margin-bottom:0}td.content-col[_ngcontent-%COMP%]{padding:0;margin:0;line-height:24px}td.prefix-col[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;line-height:24px}.td-btn-group[_ngcontent-%COMP%]{border-radius:4px}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#17a2b8b3;border:1px solid #17a2b8;color:#fff;cursor:pointer;float:left}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){border-right:none}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{-webkit-border-top-left-radius:4px;-webkit-border-bottom-left-radius:4px;-moz-border-radius-topleft:4px;-moz-border-radius-bottomleft:4px;border-top-left-radius:4px;border-bottom-left-radius:4px}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{-webkit-border-top-right-radius:4px;-webkit-border-bottom-right-radius:4px;-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px;border-top-right-radius:4px;border-bottom-right-radius:4px}.td-btn-group[_ngcontent-%COMP%]:after{content:\"\";clear:both;display:table}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .td-btn-group[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#17a2b8}.td-checkbox-container[_ngcontent-%COMP%]{display:block;position:relative;padding-left:21px;margin-bottom:0;cursor:pointer;font-size:16px;line-height:28px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.td-checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[_ngcontent-%COMP%]{position:absolute;top:7px;left:0;height:16px;width:16px;background-color:#eee}.td-checkbox-container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ccc}.td-checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#17a2b8}.checkmark[_ngcontent-%COMP%]:after{content:\"\";position:absolute;display:none}.td-checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.td-checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{left:5px;top:3px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;transform:rotate(45deg)}.insert-row[_ngcontent-%COMP%] > .highlight[_ngcontent-%COMP%]{background-color:#acf2bd!important}.delete-row[_ngcontent-%COMP%] > .highlight[_ngcontent-%COMP%]{background-color:#fdb8c0!important}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTextDiffComponent, [{
            type: Component,
            args: [{ selector: 'td-ngx-text-diff', template: "<td-loader-spinner [active]=\"loading\"></td-loader-spinner>\n<div class=\"td-wrapper\" [ngClass]=\"outerContainerClass\" [ngStyle]=\"outerContainerStyle\" *ngIf=\"!loading\">\n\n  <div [ngClass]=\"toolbarClass\" [ngStyle]=\"toolbarStyle\" *ngIf=\"showToolbar\">\n    <div class=\"td-toolbar-show-diff\">\n      <label class=\"td-checkbox-container\">\n        Only Show Lines with Differences ({{ diffsCount }})\n        <input type=\"checkbox\" id=\"showDiffs\" [ngModel]=\"hideMatchingLines\" (ngModelChange)=\"hideMatchingLinesChanged($event)\" />\n        <span class=\"checkmark\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"td-toolbar-select-format\" *ngIf=\"showToolbar && showBtnToolbar\">\n    <div class=\"td-btn-group td-btn-group-toggle\" data-toggle=\"buttons\">\n      <button\n        *ngFor=\"let option of formatOptions\"\n        [ngClass]=\"{ active: format === option.value, disabled: !!option.disabled }\"\n        [name]=\"option.name\"\n        [id]=\"option.id\"\n        [disabled]=\"!!option.disabled\"\n        (click)=\"setDiffTableFormat(option.value)\"\n      >\n        {{ option.label }}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"td-table-wrapper\" [ngClass]=\"compareRowsClass\" [ngStyle]=\"compareRowsStyle\">\n    <!-- Right side-by-side -->\n    <div class=\"td-table-container side-by-side\" *ngIf=\"format === 'SideBySide'\" id=\"td-left-compare-container\" tdContainer cdkScrollable>\n      <table class=\"td-table\">\n        <tbody>\n          <tr *ngFor=\"let row of filteredTableRows; trackBy: trackTableRows\">\n            <td\n              scope=\"row\"\n              class=\"fit-column line-number-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n            >\n              {{ row.leftContent?.lineNumber !== -1 ? row.leftContent?.lineNumber : ' ' }}\n            </td>\n            <td\n              class=\"fit-column prefix-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n            >\n              <span>{{ row.leftContent?.prefix || ' ' }}</span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n              *ngIf=\"!row.hasDiffs\"\n            >\n              <span [innerHTML]=\"row.leftContent?.lineContent | formatLine\"></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n              *ngIf=\"row.hasDiffs\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.leftContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- Left side-by-side -->\n    <div class=\"td-table-container side-by-side\" *ngIf=\"format === 'SideBySide'\" id=\"td-right-compare-container\" tdContainer cdkScrollable>\n      <table class=\"td-table\">\n        <tbody>\n          <tr *ngFor=\"let row of filteredTableRows; trackBy: trackTableRows\">\n            <td\n              scope=\"row\"\n              class=\"fit-column line-number-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n            >\n              {{ row.rightContent?.lineNumber !== -1 ? row.rightContent?.lineNumber : ' ' }}\n            </td>\n            <td\n              class=\"fit-column prefix-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n            >\n              <span>{{ row.rightContent?.prefix || ' ' }}</span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n              *ngIf=\"!row.hasDiffs\"\n            >\n              <span [innerHTML]=\"row.rightContent?.lineContent | formatLine\"></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n              *ngIf=\"row.hasDiffs\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.rightContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- Line By Line - combined table -->\n    <div class=\"td-table-container line-by-line\" *ngIf=\"format === 'LineByLine'\">\n      <table class=\"td-table\">\n        <tbody>\n          <tr *ngFor=\"let row of filteredTableRowsLineByLine; trackBy: trackTableRows\">\n            <td scope=\"row\" class=\"fit-column line-number-col-left\">{{ row.leftContent?.lineNumber }}</td>\n            <td scope=\"row\" class=\"fit-column line-number-col\">{{ row.rightContent?.lineNumber }}</td>\n            <td\n              class=\"fit-column prefix-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n            >\n              <span>{{ row.leftContent?.prefix || row.rightContent?.prefix || ' ' }}</span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n              *ngIf=\"!row.hasDiffs\"\n            >\n              <span [innerHTML]=\"row.leftContent?.lineContent | formatLine\"></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n              *ngIf=\"row.hasDiffs && row.leftContent && row.leftContent?.lineDiffs.length !== 0\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.leftContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n              *ngIf=\"row.hasDiffs && row.rightContent && row.rightContent?.lineDiffs.length !== 0\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.rightContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n", styles: [".td-wrapper{display:grid;width:100%;grid-row-gap:10px;grid-template-columns:repeat(2,[col] 50%);grid-template-rows:repeat(2,[row] auto);background-color:#fff;color:#444}.td-toolbar-show-diff{grid-column:1;grid-row:1}.td-toolbar-select-format{margin-left:auto;grid-column:2;grid-row:1}.td-table-container{grid-column:1 / 2;grid-row:2;width:100%;max-width:100%;overflow-x:auto}.td-table-wrapper{display:flex;width:200%}.td-table{border:1px solid darkgray;max-height:50vh;width:100%;max-width:100%}.fit-column{width:1px;white-space:nowrap}.line-number-col{position:relative;position:-webkit-sticky;position:sticky;left:0;top:auto;border-right:1px solid #ddd;color:#999;text-align:right;background-color:#f7f7f7;padding-left:10px;padding-right:10px;font-size:87.5%}.line-number-col-left{color:#999;padding-left:10px;padding-right:10px;text-align:right;background-color:#f7f7f7;font-size:87.5%}.insert-row,.insert-row>.line-number-col{background-color:#dfd;border-color:#b4e2b4}.delete-row,.delete-row>.line-number-col{background-color:#fee8e9;border-color:#e9aeae}.empty-row{background-color:#f7f7f7;height:24px}.td-table td{border-top:0;padding-top:0;padding-bottom:0;white-space:nowrap;max-width:50%}pre{margin-bottom:0}td.content-col{padding:0;margin:0;line-height:24px}td.prefix-col{padding-left:10px;padding-right:10px;line-height:24px}.td-btn-group{border-radius:4px}.td-btn-group button{background-color:#17a2b8b3;border:1px solid #17a2b8;color:#fff;cursor:pointer;float:left}.td-btn-group button:not(:last-child){border-right:none}.td-btn-group button:first-child{-webkit-border-top-left-radius:4px;-webkit-border-bottom-left-radius:4px;-moz-border-radius-topleft:4px;-moz-border-radius-bottomleft:4px;border-top-left-radius:4px;border-bottom-left-radius:4px}.td-btn-group button:last-child{-webkit-border-top-right-radius:4px;-webkit-border-bottom-right-radius:4px;-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px;border-top-right-radius:4px;border-bottom-right-radius:4px}.td-btn-group:after{content:\"\";clear:both;display:table}.td-btn-group button:hover,.td-btn-group button.active{background-color:#17a2b8}.td-checkbox-container{display:block;position:relative;padding-left:21px;margin-bottom:0;cursor:pointer;font-size:16px;line-height:28px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.td-checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:7px;left:0;height:16px;width:16px;background-color:#eee}.td-checkbox-container:hover input~.checkmark{background-color:#ccc}.td-checkbox-container input:checked~.checkmark{background-color:#17a2b8}.checkmark:after{content:\"\";position:absolute;display:none}.td-checkbox-container input:checked~.checkmark:after{display:block}.td-checkbox-container .checkmark:after{left:5px;top:3px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;transform:rotate(45deg)}.insert-row>.highlight{background-color:#acf2bd!important}.delete-row>.highlight{background-color:#fdb8c0!important}\n"] }]
        }], function () { return [{ type: i1.ScrollDispatcher }, { type: NgxTextDiffService }, { type: i0.ChangeDetectorRef }]; }, { containers: [{
                type: ViewChildren,
                args: [ContainerDirective]
            }], format: [{
                type: Input
            }], left: [{
                type: Input
            }], right: [{
                type: Input
            }], diffContent: [{
                type: Input
            }], loading: [{
                type: Input
            }], showToolbar: [{
                type: Input
            }], showBtnToolbar: [{
                type: Input
            }], hideMatchingLines: [{
                type: Input
            }], outerContainerClass: [{
                type: Input
            }], outerContainerStyle: [{
                type: Input
            }], toolbarClass: [{
                type: Input
            }], toolbarStyle: [{
                type: Input
            }], compareRowsClass: [{
                type: Input
            }], compareRowsStyle: [{
                type: Input
            }], synchronizeScrolling: [{
                type: Input
            }], compareResults: [{
                type: Output
            }] });
})();

class NgxTextDiffModule {
}
NgxTextDiffModule.ɵfac = function NgxTextDiffModule_Factory(t) { return new (t || NgxTextDiffModule)(); };
NgxTextDiffModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxTextDiffModule });
NgxTextDiffModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule, ScrollingModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTextDiffModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, ScrollingModule],
                    declarations: [NgxTextDiffComponent, LoaderSpinnerComponent, FormatLinePipe, ContainerDirective],
                    exports: [NgxTextDiffComponent],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxTextDiffModule, { declarations: [NgxTextDiffComponent, LoaderSpinnerComponent, FormatLinePipe, ContainerDirective], imports: [CommonModule, FormsModule, ScrollingModule], exports: [NgxTextDiffComponent] }); })();

/*
 * Public API Surface of ngx-text-diff
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTextDiffComponent, NgxTextDiffModule, NgxTextDiffService };
//# sourceMappingURL=ngx-text-diff.mjs.map
