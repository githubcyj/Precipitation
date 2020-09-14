
// 防抖
function debounce(func, wait) {
    let timeout;
    return function() {
      let context = this; // 指向全局
      let args = arguments;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func.apply(context, args); // context.func(args)
      }, wait);
    };
  }
  // 使用
  window.onscroll = debounce(function() {
    console.log('debounce');
  }, 1000);

  
// 节流
function throttle(fn, delay) {
    let prevTime = Date.now();
    return function() {
      let curTime = Date.now();
      if (curTime - prevTime > delay) {
        fn.apply(this, arguments);
        prevTime = curTime;
      }
    };
  }
  // 使用
  var throtteScroll = throttle(function() {
    console.log('throtte');
  }, 1000);
  window.onscroll = throtteScroll;


// 深拷贝

// 浅拷贝

// async/await
function _asyncToGenerator(fn) {
    return function() {
      var self = this,
        args = arguments;
      // 将返回值promise化
      return new Promise(function(resolve, reject) {
        // 获取迭代器实例
        var gen = fn.apply(self, args);
        // 执行下一步
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
        }
        // 抛出异常
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
        }
        // 第一次触发
        _next(undefined);
      });
    };
}


// 柯里化

//new
// 创建一个空的简单JavaScript对象（即{}）；
// 链接该对象（即设置该对象的构造函数）到另一个对象 ；
// 将步骤（1）新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。
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

// function create(Con, ...args){
//     // 创建一个空的对象
//     this.obj = {};
//     // 将空对象指向构造函数的原型链
//     Object.setPrototypeOf(this.obj, Con.prototype);
//     // obj绑定到构造函数上，便可以访问构造函数中的属性，即this.obj.Con(args)
//     let result = Con.apply(this.obj, args);
//     // 如果返回的result是一个对象则返回
//     // new方法失效，否则返回obj
//     return result instanceof Object ? result : this.obj;
// }






// var A = function() { }
// A.prototype.n = 1
// var b = new A()
// A.prototype = {
//   n: 2,
//   m: 3
// }
// var c = new A()
// console.log(b.n, b.m, c.n, c.m) // 1 undefined 2 3 

// var F = function(){};
// Object.prototype.a = function(){
//   console.log('a()')
// };
// Function.prototype.b = function(){
//   console.log('b()')
// };
// var f = new F();
// f.a() // a()
// f.b() // 报错  f.b is not a function
// F.a() // a()
// F.b() // b()

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