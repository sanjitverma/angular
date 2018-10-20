"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.flag = true;
        setTimeout(function () {
            _this.stockSymbol = "AAPL";
        }, 2000);
    }
    HomeComponent.prototype.changeFlag = function () {
        this.flag = !this.flag;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'binding-sample',
            template: "<button (click) = changeFlag()>Change Value</button>\n                <p>Value of flag {{ flag }} </p>\n                <span *ngIf=\"flag\">This is span content.</span>\n                <br>\n                <template [ngIf]=\"flag\">\n                    This is template content.\n                </template>\n                <br>\n                <input type=\"text\" placeholder=\"Enter stock symbol\" [(ngModel)] = \"stockSymbol\" />\n                <br> The value of the last stock is {{ stockSymbol }}.\n                "
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
