"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ng2FloatBtnLiDirective = /** @class */ (function () {
    function Ng2FloatBtnLiDirective(el) {
        this.el = el;
    }
    Ng2FloatBtnLiDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.display = 'flex';
        this.setJustifyContent("flex-start");
        this.setDirection("column");
    };
    Ng2FloatBtnLiDirective.prototype.setJustifyContent = function (position) {
        this.el.nativeElement.style.justifyContent = position;
    };
    Ng2FloatBtnLiDirective.prototype.setDirection = function (flexDirection) {
        this.el.nativeElement.style.flexDirection = flexDirection;
    };
    Ng2FloatBtnLiDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-float-btn-li]'
                },] },
    ];
    /** @nocollapse */
    Ng2FloatBtnLiDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return Ng2FloatBtnLiDirective;
}());
exports.Ng2FloatBtnLiDirective = Ng2FloatBtnLiDirective;
//# sourceMappingURL=ng2-float-btn-li.directive.js.map