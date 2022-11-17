import { Injectable } from '@angular/core';
import { DIFF_DELETE, DIFF_EQUAL, DIFF_INSERT, diff_match_patch } from 'diff-match-patch';
import { isEmpty } from './ngx-text-diff.utils';
import * as i0 from "@angular/core";
export class NgxTextDiffService {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxTextDiffService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRleHQtZGlmZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRleHQtZGlmZi9zcmMvbGliL25neC10ZXh0LWRpZmYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxPQUFPLEVBQVMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFLdkQsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3pDLE9BQU8sSUFBSSxPQUFPLENBQXVCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDM0IsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMzQixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQy9CLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENB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O1NBQ3BEO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7b0ZBbk5VLGtCQUFrQjt3RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTt1RkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlmZiwgRElGRl9ERUxFVEUsIERJRkZfRVFVQUwsIERJRkZfSU5TRVJULCBkaWZmX21hdGNoX3BhdGNoIH0gZnJvbSAnZGlmZi1tYXRjaC1wYXRjaCc7XG5pbXBvcnQgeyBEaWZmTGluZVJlc3VsdCwgRGlmZlBhcnQsIERpZmZUYWJsZVJvd1Jlc3VsdCB9IGZyb20gJy4vbmd4LXRleHQtZGlmZi5tb2RlbCc7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc05pbCB9IGZyb20gJy4vbmd4LXRleHQtZGlmZi51dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFRleHREaWZmU2VydmljZSB7XG4gIGRpZmZQYXJzZXI6IGRpZmZfbWF0Y2hfcGF0Y2g7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0UGFyc2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRQYXJzZXIoKSB7XG4gICAgdGhpcy5kaWZmUGFyc2VyID0gbmV3IGRpZmZfbWF0Y2hfcGF0Y2goKTtcbiAgfVxuXG4gIGdldERpZmZzQnlMaW5lcyhsZWZ0OiBzdHJpbmcsIHJpZ2h0OiBzdHJpbmcpOiBQcm9taXNlPERpZmZUYWJsZVJvd1Jlc3VsdFtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPERpZmZUYWJsZVJvd1Jlc3VsdFtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBhID0gdGhpcy5kaWZmUGFyc2VyLmRpZmZfbGluZXNUb0NoYXJzXyhsZWZ0LCByaWdodCk7XG4gICAgICBjb25zdCBsaW5lVGV4dDEgPSBhLmNoYXJzMTtcbiAgICAgIGNvbnN0IGxpbmVUZXh0MiA9IGEuY2hhcnMyO1xuICAgICAgY29uc3QgbGluZXNBcnJheSA9IGEubGluZUFycmF5O1xuICAgICAgY29uc3QgZGlmZnM6IERpZmZbXSA9IHRoaXMuZGlmZlBhcnNlci5kaWZmX21haW4obGluZVRleHQxLCBsaW5lVGV4dDIsIHRydWUpO1xuICAgICAgdGhpcy5kaWZmUGFyc2VyLmRpZmZfY2hhcnNUb0xpbmVzXyhkaWZmcywgbGluZXNBcnJheSk7XG4gICAgICBjb25zdCByb3dzOiBEaWZmVGFibGVSb3dSZXN1bHRbXSA9IHRoaXMuZm9ybWF0T3V0cHV0KGRpZmZzKTtcbiAgICAgIGlmICghcm93cykge1xuICAgICAgICByZWplY3QoJ0Vycm9yJyk7XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUocm93cyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdE91dHB1dChkaWZmczogRGlmZltdKTogRGlmZlRhYmxlUm93UmVzdWx0W10ge1xuICAgIGxldCBsaW5lTGVmdCA9IDE7XG4gICAgbGV0IGxpbmVSaWdodCA9IDE7XG4gICAgcmV0dXJuIGRpZmZzLnJlZHVjZSgocm93czogRGlmZlRhYmxlUm93UmVzdWx0W10sIGRpZmY6IERpZmYpID0+IHtcbiAgICAgIGlmICghcm93cykge1xuICAgICAgICByb3dzID0gW107XG4gICAgICB9XG4gICAgICBjb25zdCBkaWZmVHlwZTogbnVtYmVyID0gZGlmZlswXTtcbiAgICAgIGNvbnN0IGRpZmZWYWx1ZTogc3RyaW5nID0gZGlmZlsxXTtcbiAgICAgIGxldCBsZWZ0RGlmZlJvdzogRGlmZlRhYmxlUm93UmVzdWx0ID0gbnVsbDtcbiAgICAgIGxldCByaWdodERpZmZSb3c6IERpZmZUYWJsZVJvd1Jlc3VsdCA9IG51bGw7XG4gICAgICBsZXQgbGVmdENvbnRlbnQ6IERpZmZMaW5lUmVzdWx0ID0gbnVsbDtcbiAgICAgIGxldCByaWdodENvbnRlbnQ6IERpZmZMaW5lUmVzdWx0ID0gbnVsbDtcbiAgICAgIGxldCByb3dUZW1wOiBEaWZmVGFibGVSb3dSZXN1bHQgPSBudWxsO1xuICAgICAgc3dpdGNoIChkaWZmVHlwZSkge1xuICAgICAgICBjYXNlIERJRkZfRVFVQUw6IC8vIDBcbiAgICAgICAgICBkaWZmVmFsdWVcbiAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc0VtcHR5KHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICAgICAgbGVmdENvbnRlbnQgPSB7XG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogbGluZUxlZnQsXG4gICAgICAgICAgICAgICAgbGluZUNvbnRlbnQ6IGxpbmUsXG4gICAgICAgICAgICAgICAgbGluZURpZmZzOiBbXSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICcnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IHtcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiBsaW5lUmlnaHQsXG4gICAgICAgICAgICAgICAgbGluZUNvbnRlbnQ6IGxpbmUsXG4gICAgICAgICAgICAgICAgbGluZURpZmZzOiBbXSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICcnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJvd1RlbXAgPSB7XG4gICAgICAgICAgICAgICAgbGVmdENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmlnaHRDb250ZW50LFxuICAgICAgICAgICAgICAgIGJlbG9uZ1RvOiAnYm90aCcsXG4gICAgICAgICAgICAgICAgaGFzRGlmZnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG51bURpZmZzOiAwLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByb3dzLnB1c2gocm93VGVtcCk7XG4gICAgICAgICAgICAgIGxpbmVSaWdodCA9IGxpbmVSaWdodCArIDE7XG4gICAgICAgICAgICAgIGxpbmVMZWZ0ID0gbGluZUxlZnQgKyAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRElGRl9ERUxFVEU6IC8vIC0xXG4gICAgICAgICAgZGlmZlZhbHVlXG4gICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNFbXB0eSh2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgICAgICAgIHJpZ2h0RGlmZlJvdyA9IHJvd3MuZmluZChcbiAgICAgICAgICAgICAgICByb3cgPT4gIXJvdy5sZWZ0Q29udGVudCAmJiByb3cucmlnaHRDb250ZW50ICYmIHJvdy5yaWdodENvbnRlbnQubGluZU51bWJlciA9PT0gbGluZUxlZnQgJiYgcm93LnJpZ2h0Q29udGVudC5wcmVmaXggIT09ICcnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxlZnRDb250ZW50ID0ge1xuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IGxpbmVMZWZ0LFxuICAgICAgICAgICAgICAgIGxpbmVDb250ZW50OiBsaW5lLFxuICAgICAgICAgICAgICAgIGxpbmVEaWZmczogW3sgY29udGVudDogbGluZSwgaXNEaWZmOiB0cnVlIH1dLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJy0nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmIChyaWdodERpZmZSb3cpIHtcbiAgICAgICAgICAgICAgICByaWdodERpZmZSb3cubGVmdENvbnRlbnQgPSBsZWZ0Q29udGVudDtcbiAgICAgICAgICAgICAgICByaWdodERpZmZSb3cubGVmdENvbnRlbnQubGluZURpZmZzID0gdGhpcy5nZXREaWZmUGFydHMoXG4gICAgICAgICAgICAgICAgICByaWdodERpZmZSb3cubGVmdENvbnRlbnQubGluZUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICByaWdodERpZmZSb3cucmlnaHRDb250ZW50LmxpbmVDb250ZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByaWdodERpZmZSb3cucmlnaHRDb250ZW50LmxpbmVEaWZmcyA9IHRoaXMuZ2V0RGlmZlBhcnRzKFxuICAgICAgICAgICAgICAgICAgcmlnaHREaWZmUm93LnJpZ2h0Q29udGVudC5saW5lQ29udGVudCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0RGlmZlJvdy5sZWZ0Q29udGVudC5saW5lQ29udGVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmlnaHREaWZmUm93LmJlbG9uZ1RvID0gJ2JvdGgnO1xuICAgICAgICAgICAgICAgIHJpZ2h0RGlmZlJvdy5udW1EaWZmcyA9IHRoaXMuY291bnREaWZmcyhyaWdodERpZmZSb3cpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICBsZWZ0Q29udGVudCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Q29udGVudDogbnVsbCxcbiAgICAgICAgICAgICAgICAgIGhhc0RpZmZzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgYmVsb25nVG86ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgIG51bURpZmZzOiAxLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpbmVMZWZ0ID0gbGluZUxlZnQgKyAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRElGRl9JTlNFUlQ6IC8vIDFcbiAgICAgICAgICBkaWZmVmFsdWVcbiAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc0VtcHR5KHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICAgICAgbGVmdERpZmZSb3cgPSByb3dzLmZpbmQoXG4gICAgICAgICAgICAgICAgcm93ID0+IHJvdy5sZWZ0Q29udGVudCAmJiAhcm93LnJpZ2h0Q29udGVudCAmJiByb3cubGVmdENvbnRlbnQubGluZU51bWJlciA9PT0gbGluZVJpZ2h0ICYmIHJvdy5sZWZ0Q29udGVudC5wcmVmaXggIT09ICcnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IHtcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiBsaW5lUmlnaHQsXG4gICAgICAgICAgICAgICAgbGluZUNvbnRlbnQ6IGxpbmUsXG4gICAgICAgICAgICAgICAgbGluZURpZmZzOiBbeyBjb250ZW50OiBsaW5lLCBpc0RpZmY6IHRydWUgfV0sXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnKydcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKGxlZnREaWZmUm93KSB7XG4gICAgICAgICAgICAgICAgbGVmdERpZmZSb3cucmlnaHRDb250ZW50ID0gcmlnaHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGxlZnREaWZmUm93LmxlZnRDb250ZW50LmxpbmVEaWZmcyA9IHRoaXMuZ2V0RGlmZlBhcnRzKFxuICAgICAgICAgICAgICAgICAgbGVmdERpZmZSb3cubGVmdENvbnRlbnQubGluZUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBsZWZ0RGlmZlJvdy5yaWdodENvbnRlbnQubGluZUNvbnRlbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxlZnREaWZmUm93LnJpZ2h0Q29udGVudC5saW5lRGlmZnMgPSB0aGlzLmdldERpZmZQYXJ0cyhcbiAgICAgICAgICAgICAgICAgIGxlZnREaWZmUm93LnJpZ2h0Q29udGVudC5saW5lQ29udGVudCxcbiAgICAgICAgICAgICAgICAgIGxlZnREaWZmUm93LmxlZnRDb250ZW50LmxpbmVDb250ZW50XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZWZ0RGlmZlJvdy5iZWxvbmdUbyA9ICdib3RoJztcbiAgICAgICAgICAgICAgICBsZWZ0RGlmZlJvdy5udW1EaWZmcyA9IHRoaXMuY291bnREaWZmcyhsZWZ0RGlmZlJvdyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGxlZnRDb250ZW50OiBudWxsLFxuICAgICAgICAgICAgICAgICAgcmlnaHRDb250ZW50LFxuICAgICAgICAgICAgICAgICAgaGFzRGlmZnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICBiZWxvbmdUbzogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIG51bURpZmZzOiAxLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpbmVSaWdodCA9IGxpbmVSaWdodCArIDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3dzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgY291bnREaWZmcyhyZXN1bHQ6IERpZmZUYWJsZVJvd1Jlc3VsdCk6IG51bWJlciB7XG4gICAgbGV0IGRpZmZDb3VudCA9IDA7XG4gICAgaWYgKHJlc3VsdC5sZWZ0Q29udGVudCkge1xuICAgICAgZGlmZkNvdW50ICs9IHJlc3VsdC5sZWZ0Q29udGVudC5saW5lRGlmZnMuZmlsdGVyKGRpZmYgPT4gZGlmZi5pc0RpZmYpLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5sZWZ0Q29udGVudCkge1xuICAgICAgZGlmZkNvdW50ICs9IHJlc3VsdC5yaWdodENvbnRlbnQubGluZURpZmZzLmZpbHRlcihkaWZmID0+IGRpZmYuaXNEaWZmKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkaWZmQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIGdldERpZmZQYXJ0cyh2YWx1ZTogc3RyaW5nLCBjb21wYXJlVmFsdWU6IHN0cmluZyk6IERpZmZQYXJ0W10ge1xuICAgIGNvbnN0IGRpZmZQYXJ0czogRGlmZlBhcnRbXSA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG4gICAgbGV0IHNoYXJlZCA9ICcnO1xuICAgIGxldCBkaWZmID0gJyc7XG5cbiAgICB3aGlsZSAoaSA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgaWYgKHZhbHVlW2ldID09PSBjb21wYXJlVmFsdWVbal0gJiYgaiA8IGNvbXBhcmVWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGRpZmYgIT09ICcnKSB7XG4gICAgICAgICAgZGlmZlBhcnRzLnB1c2goeyBjb250ZW50OiBkaWZmLCBpc0RpZmY6IHRydWUgfSk7XG4gICAgICAgICAgZGlmZiA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHNoYXJlZCArPSB2YWx1ZVtpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaGFyZWQgIT09ICcnKSB7XG4gICAgICAgICAgZGlmZlBhcnRzLnB1c2goeyBjb250ZW50OiBzaGFyZWQsIGlzRGlmZjogZmFsc2UgfSk7XG4gICAgICAgICAgc2hhcmVkID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZGlmZiArPSB2YWx1ZVtpXTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICAgIGorKztcbiAgICB9XG5cbiAgICBpZiAoZGlmZiAhPT0gJycpIHtcbiAgICAgIGRpZmZQYXJ0cy5wdXNoKHsgY29udGVudDogZGlmZiwgaXNEaWZmOiB0cnVlIH0pO1xuICAgIH0gZWxzZSBpZiAoc2hhcmVkICE9PSAnJykge1xuICAgICAgZGlmZlBhcnRzLnB1c2goeyBjb250ZW50OiBzaGFyZWQsIGlzRGlmZjogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmZQYXJ0cztcbiAgfVxufVxuIl19