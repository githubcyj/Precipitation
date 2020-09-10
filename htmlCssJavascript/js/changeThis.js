// "use strict";
/**
 * this
 * 普通函数——>从执行上下文推测出this指向，严格模式下函数中的this指向undefined，非严格模式则指向window
 * 箭头函数——>词法作用域中的上下文
 * 对象的方法——>该对象；
 * DOM节点——>该节点对象；
 * 构造函数——>实例化后的对象；
 * call或者apply，bind——>传入的第一个参数
 */

 //call原理实现
 Function.prototype.myCall = function (context) {
    // 赋值作用域参数，如果没有则默认为window，即访问全局作用域对象
    context = context || window    
    // 绑定调用函数（.call之前的方法即this，前面提到过调用call方法会调用一遍自身，所以这里要存下来）
    context.invokFn = this    
    // 截取作用域对象参数后面的参数
    let args = [...arguments].slice(1)
    // 执行调用函数，记录拿取返回值
    let result = context.invokFn(...args)
    // 销毁调用函数，以免作用域污染
    Reflect.deleteProperty(context, 'invokFn')
    return result
}

//apply
Function.prototype.myApply = function (context) {
    // 赋值作用域参数，如果没有则默认为window，即访问全局作用域对象
    context = context || window
    // 绑定调用函数（.call之前的方法即this，前面提到过调用call方法会调用一遍自身，所以这里要存下来）
    context.invokFn = this
    // 执行调用函数，需要对是否有参数做判断，记录拿取返回值
    let result
    if (arguments[1]) {
        result = context.invokFn(...arguments[1])
    } else {
        result = context.invokFn()
    }
    // 销毁调用函数，以免作用域污染
    Reflect.deleteProperty(context, 'invokFn')
    return result
}

//bind
Function.prototype.myBind = function(){
    // 1、保存函数
    let _this = this;
    // 2、保存目标对象
    let context = arguments[0]||window;
    // 3、保存目标对象之外的参数,将其转化为数组;
    let rest = Array.prototype.slice.call(arguments,1);
    // 4、返回一个待执行的函数
    return function F(){
      // 5、将二次传递的参数转化为数组;
      let rest2 = Array.prototype.slice.call(arguments)
      if(this instanceof F){
        // 6、若是用new操作符调用,则直接用new 调用原函数,并用扩展运算符传递参数
        return new _this(...rest2)
      }else{
        //7、用apply调用第一步保存的函数，并绑定this，传递合并的参数数组，即context._this(rest.concat(rest2))
        _this.apply(context,rest.concat(rest2));
      }
    }
};

//new
// function create(func){
//     return function(){
//     //创建空对象，并将指定对象的原型指向构造函数原型
//         let obj = {
//             __proto__ = func.prototype,
//         }
//         //执行构造函数，改变this指向
//         func.call(obj, ...arguments)
//         //返回指定对象
//         return obj;
//     }
// }

// let Person = {
//     name: 'Tom',
//     say(age,address) {
//         console.log(this)
//         console.log(`我叫${this.name}我今年${age}家住${address}`)
//     }
// }

// Person1 = {
//     name: 'Tom1'
// }

// Person.say();
// Person.say.call(Person1,18,'chengdu');//我叫Tom1我今年18
// Person.say.myCall(Person1,18,'chengdu');

// var A = function() { }
// A.prototype.n = 1
// var b = new A()
// A.prototype = {
//   n: 2,
//   m: 3
// }
// var c = new A()
// console.log(b.n, b.m, c.n, c.m) // 1 undefined 2 3 

var F = function(){};
Object.prototype.a = function(){
  console.log('a()')
};
Function.prototype.b = function(){
  console.log('b()')
};
var f = new F();
f.a() // a()
f.b() // 报错  f.b is not a function
F.a() // a()
F.b() // b()

 /**
  * var length = 10;
function fn(){
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function(fn){
    fn();
    arguments[0]();
  }
};
obj.method(fn, 1);
  */

// let str = "str";

// let obj = {
//     name: '123',
// };

// console.log(this);

// function fn() {
//     console.log(this);
// }
// (function(){
//     console.log(this);
// })();

// fn();
// fn.call(str);