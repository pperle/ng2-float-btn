"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var ng2_float_btn_component_1 = require("./ng2-float-btn.component");
var ng2_float_btn_direction_directive_1 = require("./ng2-float-btn-direction.directive");
var ng2_float_btn_li_directive_1 = require("./ng2-float-btn-li.directive");
var ng2_float_btn_label_directive_1 = require("./ng2-float-btn-label.directive");
/* istanbul ignore next */
var Ng2FloatBtnModule = /** @class */ (function () {
    function Ng2FloatBtnModule() {
    }
    Ng2FloatBtnModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        ng2_float_btn_component_1.Ng2FloatBtnComponent,
                        ng2_float_btn_direction_directive_1.Ng2FloatBtnDirectionDirective,
                        ng2_float_btn_li_directive_1.Ng2FloatBtnLiDirective,
                        ng2_float_btn_label_directive_1.Ng2FloatBtnLableDirective
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        material_1.MatButtonModule,
                        material_1.MatIconModule
                    ],
                    providers: [],
                    exports: [ng2_float_btn_component_1.Ng2FloatBtnComponent]
                },] },
    ];
    /** @nocollapse */
    Ng2FloatBtnModule.ctorParameters = function () { return []; };
    return Ng2FloatBtnModule;
}());
exports.Ng2FloatBtnModule = Ng2FloatBtnModule;
//# sourceMappingURL=ng2-float-btn.module.js.map