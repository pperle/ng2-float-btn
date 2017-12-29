"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ng2FloatBtnDirectionDirective = /** @class */ (function () {
    function Ng2FloatBtnDirectionDirective(el) {
        this.el = el;
    }
    Ng2FloatBtnDirectionDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.display = 'inline-flex';
        switch (this.btnDirection) {
            case 'right':
                this.setJustifyContent('flex-start');
                this.setDirection('row');
                break;
            case 'left':
                this.setJustifyContent('flex-start');
                this.setDirection('row-reverse');
                break;
            case 'down':
                this.setJustifyContent('flex-start');
                this.setDirection('column');
                break;
            case 'up':
                this.setJustifyContent('flex-end');
                this.setDirection('column-reverse');
                break;
            /* istanbul ignore next */
            default:
                throw 'invalid direction.';
        }
    };
    Ng2FloatBtnDirectionDirective.prototype.setJustifyContent = function (position) {
        this.el.nativeElement.style.justifyContent = position;
    };
    Ng2FloatBtnDirectionDirective.prototype.setDirection = function (flexDirection) {
        this.el.nativeElement.style.flexDirection = flexDirection;
    };
    Ng2FloatBtnDirectionDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-float-btn-direction]'
                },] },
    ];
    /** @nocollapse */
    Ng2FloatBtnDirectionDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    Ng2FloatBtnDirectionDirective.propDecorators = {
        "btnDirection": [{ type: core_1.Input },],
    };
    return Ng2FloatBtnDirectionDirective;
}());
exports.Ng2FloatBtnDirectionDirective = Ng2FloatBtnDirectionDirective;
//# sourceMappingURL=ng2-float-btn-direction.directive.js.map