"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("./models");
var Ng2FloatBtnComponent = /** @class */ (function () {
    function Ng2FloatBtnComponent() {
        this.showBtns = false;
        this.animateState = 'void';
    }
    Ng2FloatBtnComponent.prototype.ngOnInit = function () {
        /* istanbul ignore if */
        if (!this.mainButton)
            throw "mainButton is required.";
        /* istanbul ignore if */
        if (!this.buttons || this.buttons.length == 0)
            throw "buttons is required.";
        if (!this.direction || this.direction == '')
            this.direction = "right";
        if (!this.isMini) {
            this.isMini = false;
        }
    };
    Ng2FloatBtnComponent.prototype.triggerBtnMenu = function () {
        this.showBtns = !this.showBtns;
        if (!this.showBtns) {
            this.animateState = 'void';
        }
        else {
            switch (this.direction) {
                case 'right':
                    this.animateState = 'right-show';
                    break;
                case 'left':
                    this.animateState = 'left-show';
                    break;
                case 'down':
                    this.animateState = 'down-show';
                    break;
                case 'up':
                    this.animateState = 'up-show';
                    break;
                /* istanbul ignore next */
                default:
                    throw 'Invalid direction.';
            }
        }
    };
    Ng2FloatBtnComponent.prototype.fireAction = function ($event, action) {
        this.triggerBtnMenu();
        /* istanbul ignore else  */
        if (action)
            action($event);
    };
    Ng2FloatBtnComponent.prototype.shouldShowLabel = function (title) {
        if (!title || title == '')
            return false;
        return true;
    };
    Ng2FloatBtnComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-float-btn',
                    styles: [
                        "ul {\n\t\t\tlist-style-type: none; \n\t\t\tmargin: 0; \n\t\t\tpadding: 0; \n\t\t\toverflow: hidden;\n\t\t\tz-index: 200;\n\t\t}",
                        "button {\n\t\t\tmargin: 8px;\n\t\t}"
                    ],
                    animations: [
                        core_1.trigger('buttonAnimation', [
                            core_1.transition('void => right-show', [
                                core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }),
                                core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                            ]),
                            core_1.transition('right-show => void', [
                                core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                                core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }))
                            ]),
                            core_1.transition('void => left-show', [
                                core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }),
                                core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                            ]),
                            core_1.transition('left-show => void', [
                                core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                                core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }))
                            ]),
                            core_1.transition('void => down-show', [
                                core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }),
                                core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                            ]),
                            core_1.transition('down-show => void', [
                                core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                                core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }))
                            ]),
                            core_1.transition('void => up-show', [
                                core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }),
                                core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                            ]),
                            core_1.transition('up-show => void', [
                                core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                                core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }))
                            ])
                        ]),
                        core_1.trigger('labelAnimation', [
                            core_1.transition(':enter', [
                                core_1.style({ transform: 'scale(0.6)', 'opacity': 0 }),
                                core_1.animate('100ms 300ms ease', core_1.style({ transform: 'scale(1)', opacity: 1 }))
                            ]),
                            core_1.transition(':leave', [
                                core_1.style({ transform: 'scale(1)', 'opacity': 1 }),
                                core_1.animate('200ms ease-out', core_1.style({ transform: 'scale(0.6)', opacity: 0 }))
                            ])
                        ])
                    ],
                    //the two hidden button is used to trigger a render of material fab
                    //so that the buttons with attribute binding will render correctly later
                    template: "\n\t\t<ul ng2-float-btn-direction [btnDirection]=\"direction\">\n\t\t\t<li [ngSwitch]=\"isMini\">\n\t\t\t\t<ng-container *ngSwitchCase=\"false\">\n\t\t\t\t\t<button mat-fab color=\"mainButton.color\"\n\t\t\t\t\t\t(click)=\"triggerBtnMenu()\" >\n\t\t\t\t\t\t<mat-icon>{{mainButton.iconName}}</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngSwitchCase=\"true\">\n\t\t\t\t\t<button mat-mini-fab color=\"mainButton.color\"\n\t\t\t\t\t\t(click)=\"triggerBtnMenu()\" >\n\t\t\t\t\t\t<mat-icon>{{mainButton.iconName}}</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let btn of buttons\" ng2-float-btn-li>\n\t\t\t\t<ng-container [ngSwitch]=\"isMini\">\n\t\t\t\t\t<ng-container *ngSwitchCase=\"false\">\n\t\t\t\t\t\t<button mat-fab color=\"btn.color\"\n\t\t\t\t\t\t\t[@buttonAnimation]=\"animateState\" *ngIf=\"showBtns\" \n\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t<mat-icon>{{btn.iconName}}</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t<ng-container *ngSwitchCase=\"true\">\n\t\t\t\t\t\t<button mat-mini-fab color=\"btn.color\"\n\t\t\t\t\t\t\t[@buttonAnimation]=\"animateState\" *ngIf=\"showBtns\" \n\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t<mat-icon>{{btn.iconName}}</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t\t\n\t\t\t\t<label *ngIf=\"shouldShowLabel(btn.label) && showBtns\" [@labelAnimation]=\"showBtns\"\n\t\t\t\t\t\tng2-float-btn-label [isMini]=\"isMini\">\n\t\t\t\t\t{{btn.label}}\n\t\t\t\t</label>\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n\t\t\n  "
                },] },
    ];
    /** @nocollapse */
    Ng2FloatBtnComponent.ctorParameters = function () { return []; };
    Ng2FloatBtnComponent.propDecorators = {
        "buttons": [{ type: core_1.Input },],
        "mainButton": [{ type: core_1.Input },],
        "direction": [{ type: core_1.Input },],
        "isMini": [{ type: core_1.Input },],
    };
    return Ng2FloatBtnComponent;
}());
exports.Ng2FloatBtnComponent = Ng2FloatBtnComponent;
//# sourceMappingURL=ng2-float-btn.component.js.map