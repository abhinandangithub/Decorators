var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logProperty(target, key) {
    var _val = this[key];
    var getter = function () {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };
    var setter = function (newVal) {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
    };
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
class TestOne {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    logProperty,
    __metadata("design:type", String)
], TestOne.prototype, "name", void 0);
var res = new TestOne('abhi').name = 'Teju';
console.log(`Result: `, res);
//# sourceMappingURL=property-decorator.js.map