@logClass
class TestTwo {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

var TestTwo = (function(){
    function TestTwo(name){
        this.name = name;
    }
    return __decorator([logClass], TestTwo);
})();