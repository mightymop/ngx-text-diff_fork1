import { ChangeDetectorRef, Component, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { NgxTextDiffService } from './ngx-text-diff.service';
import { Observable } from 'rxjs';
import { ContainerDirective } from './ngx-text-diff-container.directive';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
import * as i2 from "./ngx-text-diff.service";
import * as i3 from "./loader-spinner/loader-spinner.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "./ngx-text-diff-container.directive";
import * as i7 from "./format-line.pipe";
function NgxTextDiffComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.toolbarClass)("ngStyle", ctx_r1.toolbarStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Only Show Lines with Differences (", ctx_r1.diffsCount, ") ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.hideMatchingLines);
} }
const _c0 = function (a0, a1) { return { active: a0, disabled: a1 }; };
function NgxTextDiffComponent_div_1_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function NgxTextDiffComponent_div_1_div_2_button_2_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const option_r9 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(3); return ctx_r10.setDiffTableFormat(option_r9.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx_r8.format === option_r9.value, !!option_r9.disabled))("name", option_r9.name)("id", option_r9.id)("disabled", !!option_r9.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r9.label, " ");
} }
function NgxTextDiffComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵtemplate(2, NgxTextDiffComponent_div_1_div_2_button_2_Template, 2, 8, "button", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.formatOptions);
} }
const _c1 = function (a0, a1) { return { "delete-row": a0, "empty-row": a1 }; };
function NgxTextDiffComponent_div_1_div_4_tr_3_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵelement(1, "span", 25);
    i0.ɵɵpipe(2, "formatLine");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c1, (row_r13.leftContent == null ? null : row_r13.leftContent.prefix) === "-", !(row_r13.leftContent == null ? null : row_r13.leftContent.lineContent)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, row_r13.leftContent == null ? null : row_r13.leftContent.lineContent), i0.ɵɵsanitizeHtml);
} }
const _c2 = function (a0) { return { highlight: a0 }; };
function NgxTextDiffComponent_div_1_div_4_tr_3_td_7_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
    i0.ɵɵpipe(1, "formatLine");
} if (rf & 2) {
    const diff_r18 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r18.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r18.isDiff));
} }
function NgxTextDiffComponent_div_1_div_4_tr_3_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_4_tr_3_td_7_span_1_Template, 2, 6, "span", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c1, (row_r13.leftContent == null ? null : row_r13.leftContent.prefix) === "-", !(row_r13.leftContent == null ? null : row_r13.leftContent.lineContent)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r13.leftContent == null ? null : row_r13.leftContent.lineDiffs)("ngForTrackBy", ctx_r15.trackDiffs);
} }
function NgxTextDiffComponent_div_1_div_4_tr_3_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
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
} }
function NgxTextDiffComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "table", 19);
    i0.ɵɵelementStart(2, "tbody");
    i0.ɵɵtemplate(3, NgxTextDiffComponent_div_1_div_4_tr_3_Template, 8, 12, "tr", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r3.filteredTableRows)("ngForTrackBy", ctx_r3.trackTableRows);
} }
const _c3 = function (a0, a1) { return { "insert-row": a0, "empty-row": a1 }; };
function NgxTextDiffComponent_div_1_div_5_tr_3_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵelement(1, "span", 25);
    i0.ɵɵpipe(2, "formatLine");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c3, (row_r21.rightContent == null ? null : row_r21.rightContent.prefix) === "+", !(row_r21.rightContent == null ? null : row_r21.rightContent.lineContent)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, row_r21.rightContent == null ? null : row_r21.rightContent.lineContent), i0.ɵɵsanitizeHtml);
} }
function NgxTextDiffComponent_div_1_div_5_tr_3_td_7_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
    i0.ɵɵpipe(1, "formatLine");
} if (rf & 2) {
    const diff_r26 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r26.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r26.isDiff));
} }
function NgxTextDiffComponent_div_1_div_5_tr_3_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_5_tr_3_td_7_span_1_Template, 2, 6, "span", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r21 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c3, (row_r21.rightContent == null ? null : row_r21.rightContent.prefix) === "+", !(row_r21.rightContent == null ? null : row_r21.rightContent.lineContent)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r21.rightContent == null ? null : row_r21.rightContent.lineDiffs)("ngForTrackBy", ctx_r23.trackDiffs);
} }
function NgxTextDiffComponent_div_1_div_5_tr_3_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
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
} }
function NgxTextDiffComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "table", 19);
    i0.ɵɵelementStart(2, "tbody");
    i0.ɵɵtemplate(3, NgxTextDiffComponent_div_1_div_5_tr_3_Template, 8, 12, "tr", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r4.filteredTableRows)("ngForTrackBy", ctx_r4.trackTableRows);
} }
const _c4 = function (a0, a1) { return { "delete-row": a0, "insert-row": a1 }; };
function NgxTextDiffComponent_div_1_div_6_tr_3_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵelement(1, "span", 25);
    i0.ɵɵpipe(2, "formatLine");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r29 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c4, (row_r29.leftContent == null ? null : row_r29.leftContent.prefix) === "-", (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) === "+"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, row_r29.leftContent == null ? null : row_r29.leftContent.lineContent), i0.ɵɵsanitizeHtml);
} }
function NgxTextDiffComponent_div_1_div_6_tr_3_td_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
    i0.ɵɵpipe(1, "formatLine");
} if (rf & 2) {
    const diff_r35 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r35.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r35.isDiff));
} }
function NgxTextDiffComponent_div_1_div_6_tr_3_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_6_tr_3_td_9_span_1_Template, 2, 6, "span", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r29 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c4, (row_r29.leftContent == null ? null : row_r29.leftContent.prefix) === "-", (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) === "+"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r29.leftContent == null ? null : row_r29.leftContent.lineDiffs)("ngForTrackBy", ctx_r31.trackDiffs);
} }
function NgxTextDiffComponent_div_1_div_6_tr_3_td_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
    i0.ɵɵpipe(1, "formatLine");
} if (rf & 2) {
    const diff_r38 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 2, diff_r38.content), i0.ɵɵsanitizeHtml)("ngClass", i0.ɵɵpureFunction1(4, _c2, diff_r38.isDiff));
} }
function NgxTextDiffComponent_div_1_div_6_tr_3_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_6_tr_3_td_10_span_1_Template, 2, 6, "span", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r29 = i0.ɵɵnextContext().$implicit;
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c4, (row_r29.leftContent == null ? null : row_r29.leftContent.prefix) === "-", (row_r29.rightContent == null ? null : row_r29.rightContent.prefix) === "+"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r29.rightContent == null ? null : row_r29.rightContent.lineDiffs)("ngForTrackBy", ctx_r32.trackDiffs);
} }
function NgxTextDiffComponent_div_1_div_6_tr_3_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
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
} }
function NgxTextDiffComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "table", 19);
    i0.ɵɵelementStart(2, "tbody");
    i0.ɵɵtemplate(3, NgxTextDiffComponent_div_1_div_6_tr_3_Template, 11, 10, "tr", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.filteredTableRowsLineByLine)("ngForTrackBy", ctx_r5.trackTableRows);
} }
function NgxTextDiffComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_div_1_Template, 6, 4, "div", 3);
    i0.ɵɵtemplate(2, NgxTextDiffComponent_div_1_div_2_Template, 3, 1, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtemplate(4, NgxTextDiffComponent_div_1_div_4_Template, 4, 2, "div", 6);
    i0.ɵɵtemplate(5, NgxTextDiffComponent_div_1_div_5_Template, 4, 2, "div", 7);
    i0.ɵɵtemplate(6, NgxTextDiffComponent_div_1_div_6_Template, 4, 2, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
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
} }
export class NgxTextDiffComponent {
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
    async renderDiffs() {
        try {
            this.diffsCount = 0;
            this.tableRows = await this.diff.getDiffsByLines(this.left, this.right);
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
NgxTextDiffComponent.ɵfac = function NgxTextDiffComponent_Factory(t) { return new (t || NgxTextDiffComponent)(i0.ɵɵdirectiveInject(i1.ScrollDispatcher), i0.ɵɵdirectiveInject(i2.NgxTextDiffService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NgxTextDiffComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxTextDiffComponent, selectors: [["td-ngx-text-diff"]], viewQuery: function NgxTextDiffComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(ContainerDirective, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containers = _t);
    } }, inputs: { format: "format", left: "left", right: "right", diffContent: "diffContent", loading: "loading", showToolbar: "showToolbar", showBtnToolbar: "showBtnToolbar", hideMatchingLines: "hideMatchingLines", outerContainerClass: "outerContainerClass", outerContainerStyle: "outerContainerStyle", toolbarClass: "toolbarClass", toolbarStyle: "toolbarStyle", compareRowsClass: "compareRowsClass", compareRowsStyle: "compareRowsStyle", synchronizeScrolling: "synchronizeScrolling" }, outputs: { compareResults: "compareResults" }, decls: 2, vars: 2, consts: [[3, "active"], ["class", "td-wrapper", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "td-wrapper", 3, "ngClass", "ngStyle"], [3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "td-toolbar-select-format", 4, "ngIf"], [1, "td-table-wrapper", 3, "ngClass", "ngStyle"], ["class", "td-table-container side-by-side", "id", "td-left-compare-container", "tdContainer", "", "cdkScrollable", "", 4, "ngIf"], ["class", "td-table-container side-by-side", "id", "td-right-compare-container", "tdContainer", "", "cdkScrollable", "", 4, "ngIf"], ["class", "td-table-container line-by-line", 4, "ngIf"], [3, "ngClass", "ngStyle"], [1, "td-toolbar-show-diff"], [1, "td-checkbox-container"], ["type", "checkbox", "id", "showDiffs", 3, "ngModel", "ngModelChange"], [1, "checkmark"], [1, "td-toolbar-select-format"], ["data-toggle", "buttons", 1, "td-btn-group", "td-btn-group-toggle"], [3, "ngClass", "name", "id", "disabled", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "name", "id", "disabled", "click"], ["id", "td-left-compare-container", "tdContainer", "", "cdkScrollable", "", 1, "td-table-container", "side-by-side"], [1, "td-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["scope", "row", 1, "fit-column", "line-number-col", 3, "ngClass"], [1, "fit-column", "prefix-col", 3, "ngClass"], ["class", "content-col", 3, "ngClass", 4, "ngIf"], [1, "content-col", 3, "ngClass"], [3, "innerHTML"], [3, "innerHTML", "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "innerHTML", "ngClass"], ["id", "td-right-compare-container", "tdContainer", "", "cdkScrollable", "", 1, "td-table-container", "side-by-side"], [1, "td-table-container", "line-by-line"], ["scope", "row", 1, "fit-column", "line-number-col-left"], ["scope", "row", 1, "fit-column", "line-number-col"]], template: function NgxTextDiffComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "td-loader-spinner", 0);
        i0.ɵɵtemplate(1, NgxTextDiffComponent_div_1_Template, 7, 9, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("active", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, directives: [i3.LoaderSpinnerComponent, i4.NgIf, i4.NgClass, i4.NgStyle, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgModel, i4.NgForOf, i6.ContainerDirective, i1.CdkScrollable], pipes: [i7.FormatLinePipe], styles: [".td-wrapper[_ngcontent-%COMP%]{display:grid;width:100%;grid-row-gap:10px;grid-template-columns:repeat(2,[col] 50%);grid-template-rows:repeat(2,[row] auto);background-color:#fff;color:#444}.td-toolbar-show-diff[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.td-toolbar-select-format[_ngcontent-%COMP%]{margin-left:auto;grid-column:2;grid-row:1}.td-table-container[_ngcontent-%COMP%]{grid-column:1 / 2;grid-row:2;width:100%;max-width:100%;overflow-x:auto}.td-table-wrapper[_ngcontent-%COMP%]{display:flex;width:200%}.td-table[_ngcontent-%COMP%]{border:1px solid darkgray;max-height:50vh;width:100%;max-width:100%}.fit-column[_ngcontent-%COMP%]{width:1px;white-space:nowrap}.line-number-col[_ngcontent-%COMP%]{position:relative;position:-webkit-sticky;position:sticky;left:0;top:auto;border-right:1px solid #ddd;color:#999;text-align:right;background-color:#f7f7f7;padding-left:10px;padding-right:10px;font-size:87.5%}.line-number-col-left[_ngcontent-%COMP%]{color:#999;padding-left:10px;padding-right:10px;text-align:right;background-color:#f7f7f7;font-size:87.5%}.insert-row[_ngcontent-%COMP%], .insert-row[_ngcontent-%COMP%] > .line-number-col[_ngcontent-%COMP%]{background-color:#dfd;border-color:#b4e2b4}.delete-row[_ngcontent-%COMP%], .delete-row[_ngcontent-%COMP%] > .line-number-col[_ngcontent-%COMP%]{background-color:#fee8e9;border-color:#e9aeae}.empty-row[_ngcontent-%COMP%]{background-color:#f7f7f7;height:24px}.td-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-top:0;padding-top:0;padding-bottom:0;white-space:nowrap;max-width:50%}pre[_ngcontent-%COMP%]{margin-bottom:0}td.content-col[_ngcontent-%COMP%]{padding:0;margin:0;line-height:24px}td.prefix-col[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;line-height:24px}.td-btn-group[_ngcontent-%COMP%]{border-radius:4px}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#17a2b8b3;border:1px solid #17a2b8;color:#fff;cursor:pointer;float:left}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){border-right:none}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{-webkit-border-top-left-radius:4px;-webkit-border-bottom-left-radius:4px;-moz-border-radius-topleft:4px;-moz-border-radius-bottomleft:4px;border-top-left-radius:4px;border-bottom-left-radius:4px}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{-webkit-border-top-right-radius:4px;-webkit-border-bottom-right-radius:4px;-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px;border-top-right-radius:4px;border-bottom-right-radius:4px}.td-btn-group[_ngcontent-%COMP%]:after{content:\"\";clear:both;display:table}.td-btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .td-btn-group[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#17a2b8}.td-checkbox-container[_ngcontent-%COMP%]{display:block;position:relative;padding-left:21px;margin-bottom:0;cursor:pointer;font-size:16px;line-height:28px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.td-checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark[_ngcontent-%COMP%]{position:absolute;top:7px;left:0;height:16px;width:16px;background-color:#eee}.td-checkbox-container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%]{background-color:#ccc}.td-checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]{background-color:#17a2b8}.checkmark[_ngcontent-%COMP%]:after{content:\"\";position:absolute;display:none}.td-checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after{display:block}.td-checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{left:5px;top:3px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;transform:rotate(45deg)}.insert-row[_ngcontent-%COMP%] > .highlight[_ngcontent-%COMP%]{background-color:#acf2bd!important}.delete-row[_ngcontent-%COMP%] > .highlight[_ngcontent-%COMP%]{background-color:#fdb8c0!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTextDiffComponent, [{
        type: Component,
        args: [{ selector: 'td-ngx-text-diff', template: "<td-loader-spinner [active]=\"loading\"></td-loader-spinner>\n<div class=\"td-wrapper\" [ngClass]=\"outerContainerClass\" [ngStyle]=\"outerContainerStyle\" *ngIf=\"!loading\">\n\n  <div [ngClass]=\"toolbarClass\" [ngStyle]=\"toolbarStyle\" *ngIf=\"showToolbar\">\n    <div class=\"td-toolbar-show-diff\">\n      <label class=\"td-checkbox-container\">\n        Only Show Lines with Differences ({{ diffsCount }})\n        <input type=\"checkbox\" id=\"showDiffs\" [ngModel]=\"hideMatchingLines\" (ngModelChange)=\"hideMatchingLinesChanged($event)\" />\n        <span class=\"checkmark\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"td-toolbar-select-format\" *ngIf=\"showToolbar && showBtnToolbar\">\n    <div class=\"td-btn-group td-btn-group-toggle\" data-toggle=\"buttons\">\n      <button\n        *ngFor=\"let option of formatOptions\"\n        [ngClass]=\"{ active: format === option.value, disabled: !!option.disabled }\"\n        [name]=\"option.name\"\n        [id]=\"option.id\"\n        [disabled]=\"!!option.disabled\"\n        (click)=\"setDiffTableFormat(option.value)\"\n      >\n        {{ option.label }}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"td-table-wrapper\" [ngClass]=\"compareRowsClass\" [ngStyle]=\"compareRowsStyle\">\n    <!-- Right side-by-side -->\n    <div class=\"td-table-container side-by-side\" *ngIf=\"format === 'SideBySide'\" id=\"td-left-compare-container\" tdContainer cdkScrollable>\n      <table class=\"td-table\">\n        <tbody>\n          <tr *ngFor=\"let row of filteredTableRows; trackBy: trackTableRows\">\n            <td\n              scope=\"row\"\n              class=\"fit-column line-number-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n            >\n              {{ row.leftContent?.lineNumber !== -1 ? row.leftContent?.lineNumber : ' ' }}\n            </td>\n            <td\n              class=\"fit-column prefix-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n            >\n              <span>{{ row.leftContent?.prefix || ' ' }}</span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n              *ngIf=\"!row.hasDiffs\"\n            >\n              <span [innerHTML]=\"row.leftContent?.lineContent | formatLine\"></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\n              *ngIf=\"row.hasDiffs\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.leftContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- Left side-by-side -->\n    <div class=\"td-table-container side-by-side\" *ngIf=\"format === 'SideBySide'\" id=\"td-right-compare-container\" tdContainer cdkScrollable>\n      <table class=\"td-table\">\n        <tbody>\n          <tr *ngFor=\"let row of filteredTableRows; trackBy: trackTableRows\">\n            <td\n              scope=\"row\"\n              class=\"fit-column line-number-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n            >\n              {{ row.rightContent?.lineNumber !== -1 ? row.rightContent?.lineNumber : ' ' }}\n            </td>\n            <td\n              class=\"fit-column prefix-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n            >\n              <span>{{ row.rightContent?.prefix || ' ' }}</span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n              *ngIf=\"!row.hasDiffs\"\n            >\n              <span [innerHTML]=\"row.rightContent?.lineContent | formatLine\"></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\n              *ngIf=\"row.hasDiffs\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.rightContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- Line By Line - combined table -->\n    <div class=\"td-table-container line-by-line\" *ngIf=\"format === 'LineByLine'\">\n      <table class=\"td-table\">\n        <tbody>\n          <tr *ngFor=\"let row of filteredTableRowsLineByLine; trackBy: trackTableRows\">\n            <td scope=\"row\" class=\"fit-column line-number-col-left\">{{ row.leftContent?.lineNumber }}</td>\n            <td scope=\"row\" class=\"fit-column line-number-col\">{{ row.rightContent?.lineNumber }}</td>\n            <td\n              class=\"fit-column prefix-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n            >\n              <span>{{ row.leftContent?.prefix || row.rightContent?.prefix || ' ' }}</span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n              *ngIf=\"!row.hasDiffs\"\n            >\n              <span [innerHTML]=\"row.leftContent?.lineContent | formatLine\"></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n              *ngIf=\"row.hasDiffs && row.leftContent && row.leftContent?.lineDiffs.length !== 0\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.leftContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n            <td\n              class=\"content-col\"\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\n              *ngIf=\"row.hasDiffs && row.rightContent && row.rightContent?.lineDiffs.length !== 0\"\n            >\n              <span\n                [innerHTML]=\"diff.content | formatLine\"\n                [ngClass]=\"{ highlight: diff.isDiff }\"\n                *ngFor=\"let diff of row.rightContent?.lineDiffs; trackBy: trackDiffs\"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n", styles: [".td-wrapper{display:grid;width:100%;grid-row-gap:10px;grid-template-columns:repeat(2,[col] 50%);grid-template-rows:repeat(2,[row] auto);background-color:#fff;color:#444}.td-toolbar-show-diff{grid-column:1;grid-row:1}.td-toolbar-select-format{margin-left:auto;grid-column:2;grid-row:1}.td-table-container{grid-column:1 / 2;grid-row:2;width:100%;max-width:100%;overflow-x:auto}.td-table-wrapper{display:flex;width:200%}.td-table{border:1px solid darkgray;max-height:50vh;width:100%;max-width:100%}.fit-column{width:1px;white-space:nowrap}.line-number-col{position:relative;position:-webkit-sticky;position:sticky;left:0;top:auto;border-right:1px solid #ddd;color:#999;text-align:right;background-color:#f7f7f7;padding-left:10px;padding-right:10px;font-size:87.5%}.line-number-col-left{color:#999;padding-left:10px;padding-right:10px;text-align:right;background-color:#f7f7f7;font-size:87.5%}.insert-row,.insert-row>.line-number-col{background-color:#dfd;border-color:#b4e2b4}.delete-row,.delete-row>.line-number-col{background-color:#fee8e9;border-color:#e9aeae}.empty-row{background-color:#f7f7f7;height:24px}.td-table td{border-top:0;padding-top:0;padding-bottom:0;white-space:nowrap;max-width:50%}pre{margin-bottom:0}td.content-col{padding:0;margin:0;line-height:24px}td.prefix-col{padding-left:10px;padding-right:10px;line-height:24px}.td-btn-group{border-radius:4px}.td-btn-group button{background-color:#17a2b8b3;border:1px solid #17a2b8;color:#fff;cursor:pointer;float:left}.td-btn-group button:not(:last-child){border-right:none}.td-btn-group button:first-child{-webkit-border-top-left-radius:4px;-webkit-border-bottom-left-radius:4px;-moz-border-radius-topleft:4px;-moz-border-radius-bottomleft:4px;border-top-left-radius:4px;border-bottom-left-radius:4px}.td-btn-group button:last-child{-webkit-border-top-right-radius:4px;-webkit-border-bottom-right-radius:4px;-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px;border-top-right-radius:4px;border-bottom-right-radius:4px}.td-btn-group:after{content:\"\";clear:both;display:table}.td-btn-group button:hover,.td-btn-group button.active{background-color:#17a2b8}.td-checkbox-container{display:block;position:relative;padding-left:21px;margin-bottom:0;cursor:pointer;font-size:16px;line-height:28px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.td-checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:7px;left:0;height:16px;width:16px;background-color:#eee}.td-checkbox-container:hover input~.checkmark{background-color:#ccc}.td-checkbox-container input:checked~.checkmark{background-color:#17a2b8}.checkmark:after{content:\"\";position:absolute;display:none}.td-checkbox-container input:checked~.checkmark:after{display:block}.td-checkbox-container .checkmark:after{left:5px;top:3px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;transform:rotate(45deg)}.insert-row>.highlight{background-color:#acf2bd!important}.delete-row>.highlight{background-color:#fdb8c0!important}\n"] }]
    }], function () { return [{ type: i1.ScrollDispatcher }, { type: i2.NgxTextDiffService }, { type: i0.ChangeDetectorRef }]; }, { containers: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRleHQtZGlmZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGV4dC1kaWZmL3NyYy9saWIvbmd4LXRleHQtZGlmZi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGV4dC1kaWZmL3NyYy9saWIvbmd4LXRleHQtZGlmZi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBR0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNidkUsOEJBQTJFO0lBQ3pFLCtCQUFrQztJQUNoQyxpQ0FBcUM7SUFDbkMsWUFDQTtJQUFBLGlDQUF5SDtJQUFyRCw2TEFBaUIsdUNBQWdDLElBQUM7SUFBdEgsaUJBQXlIO0lBQ3pILDJCQUErQjtJQUNqQyxpQkFBUTtJQUNWLGlCQUFNO0lBQ1IsaUJBQU07OztJQVJELDZDQUF3QixnQ0FBQTtJQUd2QixlQUNBO0lBREEscUZBQ0E7SUFBc0MsZUFBNkI7SUFBN0Isa0RBQTZCOzs7OztJQVFyRSxrQ0FPQztJQURDLGdQQUFTLDJDQUFnQyxJQUFDO0lBRTFDLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQVBQLDZHQUE0RSx3QkFBQSxvQkFBQSxrQ0FBQTtJQU01RSxlQUNGO0lBREUsZ0RBQ0Y7OztJQVhKLCtCQUE0RTtJQUMxRSwrQkFBb0U7SUFDbEUs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O2tCQUFwQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlmZkNvbnRlbnQsIERpZmZQYXJ0LCBEaWZmVGFibGVGb3JtYXQsIERpZmZUYWJsZUZvcm1hdE9wdGlvbiwgRGlmZlRhYmxlUm93UmVzdWx0LCBEaWZmUmVzdWx0cyB9IGZyb20gJy4vbmd4LXRleHQtZGlmZi5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hUZXh0RGlmZlNlcnZpY2UgfSBmcm9tICcuL25neC10ZXh0LWRpZmYuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LXRleHQtZGlmZi1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbERpc3BhdGNoZXIsIENka1Njcm9sbGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmd4LXRleHQtZGlmZicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdGV4dC1kaWZmLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXRleHQtZGlmZi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neFRleHREaWZmQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9oaWRlTWF0Y2hpbmdMaW5lcyA9IGZhbHNlO1xuICBAVmlld0NoaWxkcmVuKENvbnRhaW5lckRpcmVjdGl2ZSkgY29udGFpbmVyczogUXVlcnlMaXN0PENvbnRhaW5lckRpcmVjdGl2ZT47XG4gIEBJbnB1dCgpIGZvcm1hdDogRGlmZlRhYmxlRm9ybWF0ID0gJ1NpZGVCeVNpZGUnO1xuICBASW5wdXQoKSBsZWZ0ID0gJyc7XG4gIEBJbnB1dCgpIHJpZ2h0ID0gJyc7XG4gIEBJbnB1dCgpIGRpZmZDb250ZW50OiBPYnNlcnZhYmxlPERpZmZDb250ZW50PjtcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93VG9vbGJhciA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dCdG5Ub29sYmFyID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgZ2V0IGhpZGVNYXRjaGluZ0xpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWRlTWF0Y2hpbmdMaW5lcztcbiAgfVxuXG4gIHNldCBoaWRlTWF0Y2hpbmdMaW5lcyhoaWRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5oaWRlTWF0Y2hpbmdMaW5lc0NoYW5nZWQoaGlkZSk7XG4gIH1cbiAgQElucHV0KCkgb3V0ZXJDb250YWluZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBvdXRlckNvbnRhaW5lclN0eWxlOiBhbnk7XG4gIEBJbnB1dCgpIHRvb2xiYXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sYmFyU3R5bGU6IGFueTtcbiAgQElucHV0KCkgY29tcGFyZVJvd3NDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjb21wYXJlUm93c1N0eWxlOiBhbnk7XG4gIEBJbnB1dCgpIHN5bmNocm9uaXplU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGNvbXBhcmVSZXN1bHRzID0gbmV3IEV2ZW50RW1pdHRlcjxEaWZmUmVzdWx0cz4oKTtcbiAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgdGFibGVSb3dzOiBEaWZmVGFibGVSb3dSZXN1bHRbXSA9IFtdO1xuICBmaWx0ZXJlZFRhYmxlUm93czogRGlmZlRhYmxlUm93UmVzdWx0W10gPSBbXTtcbiAgdGFibGVSb3dzTGluZUJ5TGluZTogRGlmZlRhYmxlUm93UmVzdWx0W10gPSBbXTtcbiAgZmlsdGVyZWRUYWJsZVJvd3NMaW5lQnlMaW5lOiBEaWZmVGFibGVSb3dSZXN1bHRbXSA9IFtdO1xuICBkaWZmc0NvdW50ID0gMDtcblxuICBmb3JtYXRPcHRpb25zOiBEaWZmVGFibGVGb3JtYXRPcHRpb25bXSA9IFtcbiAgICB7XG4gICAgICBpZDogJ3NpZGUtYnktc2lkZScsXG4gICAgICBuYW1lOiAnc2lkZS1ieS1zaWRlJyxcbiAgICAgIGxhYmVsOiAnU2lkZSBieSBTaWRlJyxcbiAgICAgIHZhbHVlOiAnU2lkZUJ5U2lkZScsXG4gICAgICBpY29uOiAnbGEtY29kZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xpbmUtYnktbGluZScsXG4gICAgICBuYW1lOiAnbGluZS1ieS1saW5lJyxcbiAgICAgIGxhYmVsOiAnTGluZSBieSBMaW5lJyxcbiAgICAgIHZhbHVlOiAnTGluZUJ5TGluZScsXG4gICAgICBpY29uOiAnbGEtZmlsZS10ZXh0JyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Nyb2xsU2VydmljZTogU2Nyb2xsRGlzcGF0Y2hlciwgcHJpdmF0ZSBkaWZmOiBOZ3hUZXh0RGlmZlNlcnZpY2UsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuZGlmZkNvbnRlbnQpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICB0aGlzLmRpZmZDb250ZW50LnN1YnNjcmliZShjb250ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubGVmdCA9IGNvbnRlbnQubGVmdENvbnRlbnQ7XG4gICAgICAgICAgdGhpcy5yaWdodCA9IGNvbnRlbnQucmlnaHRDb250ZW50O1xuICAgICAgICAgIHRoaXMucmVuZGVyRGlmZnMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJEaWZmcygpXG4gICAgICAudGhlbigoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpKVxuICAgICAgLmNhdGNoKGUgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbml0U2Nyb2xsTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZU1hdGNoaW5nTGluZXNDaGFuZ2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZU1hdGNoaW5nTGluZXMgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5oaWRlTWF0Y2hpbmdMaW5lcykge1xuICAgICAgdGhpcy5maWx0ZXJlZFRhYmxlUm93cyA9IHRoaXMudGFibGVSb3dzLmZpbHRlcihcbiAgICAgICAgcm93ID0+IChyb3cubGVmdENvbnRlbnQgJiYgcm93LmxlZnRDb250ZW50LnByZWZpeCA9PT0gJy0nKSB8fCAocm93LnJpZ2h0Q29udGVudCAmJiByb3cucmlnaHRDb250ZW50LnByZWZpeCA9PT0gJysnKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZmlsdGVyZWRUYWJsZVJvd3NMaW5lQnlMaW5lID0gdGhpcy50YWJsZVJvd3NMaW5lQnlMaW5lLmZpbHRlcihcbiAgICAgICAgcm93ID0+IChyb3cubGVmdENvbnRlbnQgJiYgcm93LmxlZnRDb250ZW50LnByZWZpeCA9PT0gJy0nKSB8fCAocm93LnJpZ2h0Q29udGVudCAmJiByb3cucmlnaHRDb250ZW50LnByZWZpeCA9PT0gJysnKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJlZFRhYmxlUm93cyA9IHRoaXMudGFibGVSb3dzO1xuICAgICAgdGhpcy5maWx0ZXJlZFRhYmxlUm93c0xpbmVCeUxpbmUgPSB0aGlzLnRhYmxlUm93c0xpbmVCeUxpbmU7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlmZlRhYmxlRm9ybWF0KGZvcm1hdDogRGlmZlRhYmxlRm9ybWF0KSB7XG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cblxuICBhc3luYyByZW5kZXJEaWZmcygpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5kaWZmc0NvdW50ID0gMDtcbiAgICAgIHRoaXMudGFibGVSb3dzID0gYXdhaXQgdGhpcy5kaWZmLmdldERpZmZzQnlMaW5lcyh0aGlzLmxlZnQsIHRoaXMucmlnaHQpO1xuICAgICAgdGhpcy50YWJsZVJvd3NMaW5lQnlMaW5lID0gdGhpcy50YWJsZVJvd3MucmVkdWNlKCh0YWJsZUxpbmVCeUxpbmU6IERpZmZUYWJsZVJvd1Jlc3VsdFtdLCByb3c6IERpZmZUYWJsZVJvd1Jlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoIXRhYmxlTGluZUJ5TGluZSkge1xuICAgICAgICAgIHRhYmxlTGluZUJ5TGluZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cuaGFzRGlmZnMpIHtcbiAgICAgICAgICBpZiAocm93LmxlZnRDb250ZW50KSB7XG4gICAgICAgICAgICB0YWJsZUxpbmVCeUxpbmUucHVzaCh7XG4gICAgICAgICAgICAgIGxlZnRDb250ZW50OiByb3cubGVmdENvbnRlbnQsXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudDogbnVsbCxcbiAgICAgICAgICAgICAgYmVsb25nVG86IHJvdy5iZWxvbmdUbyxcbiAgICAgICAgICAgICAgaGFzRGlmZnM6IHRydWUsXG4gICAgICAgICAgICAgIG51bURpZmZzOiByb3cubnVtRGlmZnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvdy5yaWdodENvbnRlbnQpIHtcbiAgICAgICAgICAgIHRhYmxlTGluZUJ5TGluZS5wdXNoKHtcbiAgICAgICAgICAgICAgbGVmdENvbnRlbnQ6IG51bGwsXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudDogcm93LnJpZ2h0Q29udGVudCxcbiAgICAgICAgICAgICAgYmVsb25nVG86IHJvdy5iZWxvbmdUbyxcbiAgICAgICAgICAgICAgaGFzRGlmZnM6IHRydWUsXG4gICAgICAgICAgICAgIG51bURpZmZzOiByb3cubnVtRGlmZnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFibGVMaW5lQnlMaW5lLnB1c2gocm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YWJsZUxpbmVCeUxpbmU7XG4gICAgICB9LCBbXSk7XG4gICAgICB0aGlzLmRpZmZzQ291bnQgPSB0aGlzLnRhYmxlUm93cy5maWx0ZXIocm93ID0+IHJvdy5oYXNEaWZmcykubGVuZ3RoO1xuICAgICAgdGhpcy5maWx0ZXJlZFRhYmxlUm93cyA9IHRoaXMudGFibGVSb3dzO1xuICAgICAgdGhpcy5maWx0ZXJlZFRhYmxlUm93c0xpbmVCeUxpbmUgPSB0aGlzLnRhYmxlUm93c0xpbmVCeUxpbmU7XG4gICAgICB0aGlzLmVtaXRDb21wYXJlUmVzdWx0c0V2ZW50KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBlbWl0Q29tcGFyZVJlc3VsdHNFdmVudCgpIHtcbiAgICBjb25zdCBkaWZmUmVzdWx0czogRGlmZlJlc3VsdHMgPSB7XG4gICAgICBoYXNEaWZmOiB0aGlzLmRpZmZzQ291bnQgPiAwLFxuICAgICAgZGlmZnNDb3VudDogdGhpcy5kaWZmc0NvdW50LFxuICAgICAgcm93c1dpdGhEaWZmOiB0aGlzLnRhYmxlUm93c1xuICAgICAgICAuZmlsdGVyKHJvdyA9PiByb3cuaGFzRGlmZnMpXG4gICAgICAgIC5tYXAocm93ID0+ICh7XG4gICAgICAgICAgbGVmdExpbmVOdW1iZXI6IHJvdy5sZWZ0Q29udGVudCA/IHJvdy5sZWZ0Q29udGVudC5saW5lTnVtYmVyIDogbnVsbCxcbiAgICAgICAgICByaWdodExpbmVOdW1iZXI6IHJvdy5yaWdodENvbnRlbnQgPyByb3cucmlnaHRDb250ZW50LmxpbmVOdW1iZXIgOiBudWxsLFxuICAgICAgICAgIG51bURpZmZzOiByb3cubnVtRGlmZnMsXG4gICAgICAgIH0pKSxcbiAgICB9O1xuXG4gICAgdGhpcy5jb21wYXJlUmVzdWx0cy5uZXh0KGRpZmZSZXN1bHRzKTtcbiAgfVxuXG4gIHRyYWNrVGFibGVSb3dzKGluZGV4LCByb3c6IERpZmZUYWJsZVJvd1Jlc3VsdCkge1xuICAgIHJldHVybiByb3cgJiYgcm93LmxlZnRDb250ZW50ID8gcm93LmxlZnRDb250ZW50LmxpbmVDb250ZW50IDogcm93ICYmIHJvdy5yaWdodENvbnRlbnQgPyByb3cucmlnaHRDb250ZW50LmxpbmVDb250ZW50IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJhY2tEaWZmcyhpbmRleCwgZGlmZjogRGlmZlBhcnQpIHtcbiAgICByZXR1cm4gZGlmZiAmJiBkaWZmLmNvbnRlbnQgPyBkaWZmLmNvbnRlbnQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGluaXRTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnNjcm9sbFNlcnZpY2Uuc2Nyb2xsZWQoKS5zdWJzY3JpYmUoKHNjcm9sbGFibGVFdjogQ2RrU2Nyb2xsYWJsZSkgPT4ge1xuICAgICAgaWYgKHNjcm9sbGFibGVFdiAmJiB0aGlzLnN5bmNocm9uaXplU2Nyb2xsaW5nKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGVJZCA9IHNjcm9sbGFibGVFdi5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudC5pZDtcbiAgICAgICAgY29uc3Qgbm9uU2Nyb2xsZWRDb250YWluZXI6IENvbnRhaW5lckRpcmVjdGl2ZSA9IHRoaXMuY29udGFpbmVycy5maW5kKGNvbnRhaW5lciA9PiBjb250YWluZXIuaWQgIT09IHNjcm9sbGFibGVJZCk7XG4gICAgICAgIGlmIChub25TY3JvbGxlZENvbnRhaW5lcikge1xuICAgICAgICAgIG5vblNjcm9sbGVkQ29udGFpbmVyLmVsZW1lbnQuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiBzY3JvbGxhYmxlRXYubWVhc3VyZVNjcm9sbE9mZnNldCgndG9wJyksXG4gICAgICAgICAgICBsZWZ0OiBzY3JvbGxhYmxlRXYubWVhc3VyZVNjcm9sbE9mZnNldCgnbGVmdCcpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG59XG4iLCI8dGQtbG9hZGVyLXNwaW5uZXIgW2FjdGl2ZV09XCJsb2FkaW5nXCI+PC90ZC1sb2FkZXItc3Bpbm5lcj5cbjxkaXYgY2xhc3M9XCJ0ZC13cmFwcGVyXCIgW25nQ2xhc3NdPVwib3V0ZXJDb250YWluZXJDbGFzc1wiIFtuZ1N0eWxlXT1cIm91dGVyQ29udGFpbmVyU3R5bGVcIiAqbmdJZj1cIiFsb2FkaW5nXCI+XG5cbiAgPGRpdiBbbmdDbGFzc109XCJ0b29sYmFyQ2xhc3NcIiBbbmdTdHlsZV09XCJ0b29sYmFyU3R5bGVcIiAqbmdJZj1cInNob3dUb29sYmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRkLXRvb2xiYXItc2hvdy1kaWZmXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJ0ZC1jaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgT25seSBTaG93IExpbmVzIHdpdGggRGlmZmVyZW5jZXMgKHt7IGRpZmZzQ291bnQgfX0pXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInNob3dEaWZmc1wiIFtuZ01vZGVsXT1cImhpZGVNYXRjaGluZ0xpbmVzXCIgKG5nTW9kZWxDaGFuZ2UpPVwiaGlkZU1hdGNoaW5nTGluZXNDaGFuZ2VkKCRldmVudClcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ0ZC10b29sYmFyLXNlbGVjdC1mb3JtYXRcIiAqbmdJZj1cInNob3dUb29sYmFyICYmIHNob3dCdG5Ub29sYmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRkLWJ0bi1ncm91cCB0ZC1idG4tZ3JvdXAtdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZm9ybWF0T3B0aW9uc1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBmb3JtYXQgPT09IG9wdGlvbi52YWx1ZSwgZGlzYWJsZWQ6ICEhb3B0aW9uLmRpc2FibGVkIH1cIlxuICAgICAgICBbbmFtZV09XCJvcHRpb24ubmFtZVwiXG4gICAgICAgIFtpZF09XCJvcHRpb24uaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiISFvcHRpb24uZGlzYWJsZWRcIlxuICAgICAgICAoY2xpY2spPVwic2V0RGlmZlRhYmxlRm9ybWF0KG9wdGlvbi52YWx1ZSlcIlxuICAgICAgPlxuICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwidGQtdGFibGUtd3JhcHBlclwiIFtuZ0NsYXNzXT1cImNvbXBhcmVSb3dzQ2xhc3NcIiBbbmdTdHlsZV09XCJjb21wYXJlUm93c1N0eWxlXCI+XG4gICAgPCEtLSBSaWdodCBzaWRlLWJ5LXNpZGUgLS0+XG4gICAgPGRpdiBjbGFzcz1cInRkLXRhYmxlLWNvbnRhaW5lciBzaWRlLWJ5LXNpZGVcIiAqbmdJZj1cImZvcm1hdCA9PT0gJ1NpZGVCeVNpZGUnXCIgaWQ9XCJ0ZC1sZWZ0LWNvbXBhcmUtY29udGFpbmVyXCIgdGRDb250YWluZXIgY2RrU2Nyb2xsYWJsZT5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInRkLXRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBmaWx0ZXJlZFRhYmxlUm93czsgdHJhY2tCeTogdHJhY2tUYWJsZVJvd3NcIj5cbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZml0LWNvbHVtbiBsaW5lLW51bWJlci1jb2xcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdkZWxldGUtcm93Jzogcm93LmxlZnRDb250ZW50Py5wcmVmaXggPT09ICctJywgJ2VtcHR5LXJvdyc6ICFyb3cubGVmdENvbnRlbnQ/LmxpbmVDb250ZW50IH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyByb3cubGVmdENvbnRlbnQ/LmxpbmVOdW1iZXIgIT09IC0xID8gcm93LmxlZnRDb250ZW50Py5saW5lTnVtYmVyIDogJyAnIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIGNsYXNzPVwiZml0LWNvbHVtbiBwcmVmaXgtY29sXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnZGVsZXRlLXJvdyc6IHJvdy5sZWZ0Q29udGVudD8ucHJlZml4ID09PSAnLScsICdlbXB0eS1yb3cnOiAhcm93LmxlZnRDb250ZW50Py5saW5lQ29udGVudCB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgcm93LmxlZnRDb250ZW50Py5wcmVmaXggfHwgJyAnIH19PC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICBjbGFzcz1cImNvbnRlbnQtY29sXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnZGVsZXRlLXJvdyc6IHJvdy5sZWZ0Q29udGVudD8ucHJlZml4ID09PSAnLScsICdlbXB0eS1yb3cnOiAhcm93LmxlZnRDb250ZW50Py5saW5lQ29udGVudCB9XCJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhcm93Lmhhc0RpZmZzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJyb3cubGVmdENvbnRlbnQ/LmxpbmVDb250ZW50IHwgZm9ybWF0TGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgY2xhc3M9XCJjb250ZW50LWNvbFwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2RlbGV0ZS1yb3cnOiByb3cubGVmdENvbnRlbnQ/LnByZWZpeCA9PT0gJy0nLCAnZW1wdHktcm93JzogIXJvdy5sZWZ0Q29udGVudD8ubGluZUNvbnRlbnQgfVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwicm93Lmhhc0RpZmZzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRpZmYuY29udGVudCB8IGZvcm1hdExpbmVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgaGlnaGxpZ2h0OiBkaWZmLmlzRGlmZiB9XCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGlmZiBvZiByb3cubGVmdENvbnRlbnQ/LmxpbmVEaWZmczsgdHJhY2tCeTogdHJhY2tEaWZmc1wiXG4gICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICAgIDwhLS0gTGVmdCBzaWRlLWJ5LXNpZGUgLS0+XG4gICAgPGRpdiBjbGFzcz1cInRkLXRhYmxlLWNvbnRhaW5lciBzaWRlLWJ5LXNpZGVcIiAqbmdJZj1cImZvcm1hdCA9PT0gJ1NpZGVCeVNpZGUnXCIgaWQ9XCJ0ZC1yaWdodC1jb21wYXJlLWNvbnRhaW5lclwiIHRkQ29udGFpbmVyIGNka1Njcm9sbGFibGU+XG4gICAgICA8dGFibGUgY2xhc3M9XCJ0ZC10YWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgZmlsdGVyZWRUYWJsZVJvd3M7IHRyYWNrQnk6IHRyYWNrVGFibGVSb3dzXCI+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZpdC1jb2x1bW4gbGluZS1udW1iZXItY29sXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnaW5zZXJ0LXJvdyc6IHJvdy5yaWdodENvbnRlbnQ/LnByZWZpeCA9PT0gJysnLCAnZW1wdHktcm93JzogIXJvdy5yaWdodENvbnRlbnQ/LmxpbmVDb250ZW50IH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyByb3cucmlnaHRDb250ZW50Py5saW5lTnVtYmVyICE9PSAtMSA/IHJvdy5yaWdodENvbnRlbnQ/LmxpbmVOdW1iZXIgOiAnICcgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgY2xhc3M9XCJmaXQtY29sdW1uIHByZWZpeC1jb2xcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdpbnNlcnQtcm93Jzogcm93LnJpZ2h0Q29udGVudD8ucHJlZml4ID09PSAnKycsICdlbXB0eS1yb3cnOiAhcm93LnJpZ2h0Q29udGVudD8ubGluZUNvbnRlbnQgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IHJvdy5yaWdodENvbnRlbnQ/LnByZWZpeCB8fCAnICcgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1jb2xcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdpbnNlcnQtcm93Jzogcm93LnJpZ2h0Q29udGVudD8ucHJlZml4ID09PSAnKycsICdlbXB0eS1yb3cnOiAhcm93LnJpZ2h0Q29udGVudD8ubGluZUNvbnRlbnQgfVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiIXJvdy5oYXNEaWZmc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwicm93LnJpZ2h0Q29udGVudD8ubGluZUNvbnRlbnQgfCBmb3JtYXRMaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICBjbGFzcz1cImNvbnRlbnQtY29sXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnaW5zZXJ0LXJvdyc6IHJvdy5yaWdodENvbnRlbnQ/LnByZWZpeCA9PT0gJysnLCAnZW1wdHktcm93JzogIXJvdy5yaWdodENvbnRlbnQ/LmxpbmVDb250ZW50IH1cIlxuICAgICAgICAgICAgICAqbmdJZj1cInJvdy5oYXNEaWZmc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJkaWZmLmNvbnRlbnQgfCBmb3JtYXRMaW5lXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7IGhpZ2hsaWdodDogZGlmZi5pc0RpZmYgfVwiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRpZmYgb2Ygcm93LnJpZ2h0Q29udGVudD8ubGluZURpZmZzOyB0cmFja0J5OiB0cmFja0RpZmZzXCJcbiAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBMaW5lIEJ5IExpbmUgLSBjb21iaW5lZCB0YWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwidGQtdGFibGUtY29udGFpbmVyIGxpbmUtYnktbGluZVwiICpuZ0lmPVwiZm9ybWF0ID09PSAnTGluZUJ5TGluZSdcIj5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInRkLXRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBmaWx0ZXJlZFRhYmxlUm93c0xpbmVCeUxpbmU7IHRyYWNrQnk6IHRyYWNrVGFibGVSb3dzXCI+XG4gICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzcz1cImZpdC1jb2x1bW4gbGluZS1udW1iZXItY29sLWxlZnRcIj57eyByb3cubGVmdENvbnRlbnQ/LmxpbmVOdW1iZXIgfX08L3RkPlxuICAgICAgICAgICAgPHRkIHNjb3BlPVwicm93XCIgY2xhc3M9XCJmaXQtY29sdW1uIGxpbmUtbnVtYmVyLWNvbFwiPnt7IHJvdy5yaWdodENvbnRlbnQ/LmxpbmVOdW1iZXIgfX08L3RkPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIGNsYXNzPVwiZml0LWNvbHVtbiBwcmVmaXgtY29sXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnZGVsZXRlLXJvdyc6IHJvdy5sZWZ0Q29udGVudD8ucHJlZml4ID09PSAnLScsICdpbnNlcnQtcm93Jzogcm93LnJpZ2h0Q29udGVudD8ucHJlZml4ID09PSAnKycgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IHJvdy5sZWZ0Q29udGVudD8ucHJlZml4IHx8IHJvdy5yaWdodENvbnRlbnQ/LnByZWZpeCB8fCAnICcgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1jb2xcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdkZWxldGUtcm93Jzogcm93LmxlZnRDb250ZW50Py5wcmVmaXggPT09ICctJywgJ2luc2VydC1yb3cnOiByb3cucmlnaHRDb250ZW50Py5wcmVmaXggPT09ICcrJyB9XCJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhcm93Lmhhc0RpZmZzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJyb3cubGVmdENvbnRlbnQ/LmxpbmVDb250ZW50IHwgZm9ybWF0TGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgY2xhc3M9XCJjb250ZW50LWNvbFwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2RlbGV0ZS1yb3cnOiByb3cubGVmdENvbnRlbnQ/LnByZWZpeCA9PT0gJy0nLCAnaW5zZXJ0LXJvdyc6IHJvdy5yaWdodENvbnRlbnQ/LnByZWZpeCA9PT0gJysnIH1cIlxuICAgICAgICAgICAgICAqbmdJZj1cInJvdy5oYXNEaWZmcyAmJiByb3cubGVmdENvbnRlbnQgJiYgcm93LmxlZnRDb250ZW50Py5saW5lRGlmZnMubGVuZ3RoICE9PSAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRpZmYuY29udGVudCB8IGZvcm1hdExpbmVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgaGlnaGxpZ2h0OiBkaWZmLmlzRGlmZiB9XCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGlmZiBvZiByb3cubGVmdENvbnRlbnQ/LmxpbmVEaWZmczsgdHJhY2tCeTogdHJhY2tEaWZmc1wiXG4gICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIGNsYXNzPVwiY29udGVudC1jb2xcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdkZWxldGUtcm93Jzogcm93LmxlZnRDb250ZW50Py5wcmVmaXggPT09ICctJywgJ2luc2VydC1yb3cnOiByb3cucmlnaHRDb250ZW50Py5wcmVmaXggPT09ICcrJyB9XCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJyb3cuaGFzRGlmZnMgJiYgcm93LnJpZ2h0Q29udGVudCAmJiByb3cucmlnaHRDb250ZW50Py5saW5lRGlmZnMubGVuZ3RoICE9PSAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImRpZmYuY29udGVudCB8IGZvcm1hdExpbmVcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgaGlnaGxpZ2h0OiBkaWZmLmlzRGlmZiB9XCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGlmZiBvZiByb3cucmlnaHRDb250ZW50Py5saW5lRGlmZnM7IHRyYWNrQnk6IHRyYWNrRGlmZnNcIlxuICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==