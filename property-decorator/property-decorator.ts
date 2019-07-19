function logProperty(target: Function | any, key: string) {
    var _val = this[key];

    var getter = function() {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }

    var setter = function(newVal: any) {
        console.log(`Set: ${key} => ${newVal}`);        
        _val = newVal;
    }

    if(delete this[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

class TestOne {
    @logProperty
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

var res = new TestOne('abhi').name = 'Teju';

console.log(`Result: `, res);