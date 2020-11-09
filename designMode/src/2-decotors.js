@testDemo
class Demo {

}

function testDemo(target) {
    target.isDesc = true;
}

alert(Demo.isDesc);


// 装饰器类和方法
function mixins (...list) {
    return function(target){
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo() {
        alert('foo');
    }
}

@mixins(Foo)
class MyClass{

}

const obj = new MyClass();
obj.foo();