class TestOne {
    @logProperty
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

var TestOne = (function() {
    function TestOne(name){
        this.name = name;
    }
    __decorator([logProperty], TestOne.prototype, "name");
    return TestOne;
})();