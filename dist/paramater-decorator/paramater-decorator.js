var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParamater(target, key, index) {
    let metadatKey = `logParamater`;
    console.log('metadatKey ', metadatKey, target, index);
    if (Array.isArray(target[metadatKey])) {
        target[metadatKey].push(index);
    }
    else {
        target[metadatKey] = index;
    }
}
function logMethod(target, key, descriptor) {
    let originaleMethod = descriptor.value;
    descriptor.value = function (...args) {
        let metadatKey = `logParamater`;
        let indicies = target[metadatKey];
        if (Array.isArray(indicies)) {
            for (let i = 0; i < args.length; i++) {
                if (indicies.indexOf(i) !== -1) {
                    let arg = args[i];
                    var argstr = JSON.stringify(arg) || arg.toString();
                    console.log(`${key} arg[${i}] : ${argstr}`);
                }
            }
            let result = originaleMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = originaleMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key} (${a}) => ${r}`);
            return result;
        }
    };
}
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    saySomething(something) {
        return this.name + ' ' + 'says ' + something;
    }
}
__decorate([
    logMethod,
    __param(0, logParamater),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], Person.prototype, "saySomething", null);
//# sourceMappingURL=paramater-decorator.js.map