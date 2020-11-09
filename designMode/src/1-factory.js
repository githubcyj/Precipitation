class SelfFunction {
    constructor(name){
        this.name = name;
    }

    init() {
        alert(`${this.name} init`);
    }

    func1(){
        alert('func1');
    }

    func2(){
        alert('func2');
    }
}

class FactoryCreator{
    create(name){
        return new SelfFunction(name);
    }
}

const creator = new FactoryCreator();
const obj1 = creator.create('A1');
obj1.init();
obj1.func1();