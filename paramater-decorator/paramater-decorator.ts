function logParamater(target: Function | any, key: string, index: number) {
    let metadatKey = `log_${key}_paramaters`;
    console.log('metadatKey ', metadatKey, target, index);
    if (Array.isArray(target[metadatKey])) {
        target[metadatKey].push(index);
    }
    else {
        target[metadatKey] = index;
    }
}

function logMethod(target: Function | any, key: string, descriptor: any) {
    let originaleMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let metadatKey = `__log_${key}_paramaters`;
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
    }
}
class Person {
    public name: string;
    public surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    @logMethod
    public saySomething(@logParamater something: string): string {
        return this.name + ' ' + 'says ' + something;
    }
}

