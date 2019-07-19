function log(target: Function, key: string, value: any) {
    return {
        value: function(...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key} (${a}) => ${r}`);
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

var C = (function(){
    function(){}
    C.prototype.foo = function(n){
        return n * 2;
    };
    Object.defineProperty(C.prototype, "foo", 
    __decorate([
        log,
    ], C.prototype, "foo", Object.getOwnPropertyDescriptor(C.prototype, "foo")));
    return C;
})();