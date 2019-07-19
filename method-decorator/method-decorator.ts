function log(target: Function | any, key: string, value: any) {
    return {
        value: function(...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key} (${a}) => ${r}`, value);
            return result;
        }
    }
}

class Test {
    @log
    foo(n: number) {
        return n * n;
    }
}

console.log(`Result ${new Test().foo(4)}`);
