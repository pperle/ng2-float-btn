"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ng2FloatBtnLableDirective = /** @class */ (function () {
    function Ng2FloatBtnLableDirective(el) {
        this.el = el;
    }
    Ng2FloatBtnLableDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.alignSelf = 'center';
        this.el.nativeElement.style.fontFamily = 'Roboto,"Helvetica Neue",sans-serif';
        if (this.isMini == true) {
            this.el.nativeElement.style.fontSize = "0.7em";
        }
        else {
            this.el.nativeElement.style.fontSize = "0.9em";
        }
    };
    Ng2FloatBtnLableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-float-btn-label]'
                },] },
    ];
    /** @nocollapse */
    Ng2FloatBtnLableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    Ng2FloatBtnLableDirective.propDecorators = {
        "isMini": [{ type: core_1.Input },],
    };
    return Ng2FloatBtnLableDirective;
}());
exports.Ng2FloatBtnLableDirective = Ng2FloatBtnLableDirective;
//# sourceMappingURL=ng2-float-btn-label.directive.js.map