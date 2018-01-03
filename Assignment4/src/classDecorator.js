/**
 * ClassDecorator
 * @param {number}                       param1
 * @param {string}                       param2
 * @param {Function}                     target
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ClassDecoratorWithParam(param1, param2) {
    return function (target // The class the decorator is declared on
    ) {
        console.log("ClassDecoratorWithParam(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
var DemoClassDecorator = /** @class */ (function () {
    function DemoClassDecorator() {
    }
    DemoClassDecorator = __decorate([
        ClassDecoratorWithParam(1, "a"),
        ClassDecoratorWithParam(2, "b")
    ], DemoClassDecorator);
    return DemoClassDecorator;
}());
