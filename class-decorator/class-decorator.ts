function logClass(target: Function | any) {
    // save a reference to the original constructor
    var original = target;

    // utility to generate instance of class
    function construct(original, args) {
        var c: any = function () {
            return original.apply(this, args);
        }
        c.prototype = original.prototype;
        return new c();
    }

    // new constructor behaviour
    var f: any = function (...args) {
        console.log("New " + original.name, ...args);
        return construct(original, args);
    }

    f.prototype = original.prototype;

    return f;
}

@logClass
class TestTwo {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

console.log(`Result ${new TestTwo('Abhi')}`);
