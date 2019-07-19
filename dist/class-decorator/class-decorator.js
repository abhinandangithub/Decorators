var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logClass(target) {
    // save a reference to the original constructor
    var original = target;
    // utility to generate instance of class
    function construct(original, args) {
        var c = function () {
            return original.apply(this, args);
        };
        c.prototype = original.prototype;
        return new c();
    }
    // new constructor behaviour
    var f = function (...args) {
        console.log("New " + original.name, ...args);
        return construct(original, args);
    };
    f.prototype = original.prototype;
    return f;
}
let TestTwo = class TestTwo {
    constructor(name) {
        this.name = name;
    }
};
TestTwo = __decorate([
    logClass,
    __metadata("design:paramtypes", [String])
], TestTwo);
console.log(`Result ${new TestTwo('Abhi')}`);
//# sourceMappingURL=class-decorator.js.map