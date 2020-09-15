//原型链
function Person(){}
var person1 = new Person()
// console.log(person1)
// console.log(Person)
// console.log("person1.__proto__===="+(person1.__proto__ == Person.prototype))
// console.log("person1.prototype===="+(typeof(person1.prototype) === "undefined"))
// console.log("Person.__proto__===="+(typeof(Person.__proto__)))
// console.log("person1.constructor====="+(person1.constructor === Person))
// console.log("person1.prototype.constructor===="+person1.prototype.constructor)
// console.log("person1.__proto__.constructor===="+(person1.__proto__.constructor === Person))


// console.log("Person.__proto__===="+(Person.__proto__ === Function.prototype))
// console.log("Person.__proto__.constructor===="+(Person.__proto__.constructor === Function))
// console.log("Person.constructor====="+(Person.constructor === Function))
// console.log("Person.prototype.constructor===="+(Person.prototype.constructor === Person))
// console.log("Person.prototype===="+(Person.prototype === person1.__proto__))
// console.log("Person.prototype.__proto__===="+(Person.prototype.__proto__ === Object.prototype))

// console.log("Function.__proto__===="+(Function.__proto__ === Function.prototype))
// console.log("Function.__proto__.constructor===="+(Function.__proto__.constructor === Function))
// console.log("Function.constructor====="+(Function.constructor === Function))
// console.log("Function.prototype.constructor===="+(Function.prototype.constructor === Function))
// console.log("Function.prototype===="+(Function.prototype === Person.__proto__))

// console.log("Object.__proto__===="+(Object.__proto__ === Function.prototype))
// console.log("Object.__proto__.constructor===="+(Object.__proto__.constructor === Function))
// console.log("Object.constructor====="+(Object.constructor === Function))
// console.log("Object.prototype.constructor===="+(Object.prototype.constructor === Object))
// console.log("Object.prototype===="+(Object.prototype === Function.prototype.__proto__))
// // console.log("Object.prototype===="+(Object.prototype === Function.__proto__))
// console.log("Object.prototype.__proto__===="+(Object.prototype.__proto__ === null))


// new创建的过程
// 新建一个内部对象{}
// 给这个对象指定一个原型链，对象的__proto__指向构造函数的prototype
// 返回这个内部对象
// function A(){
//     console.log(age);
//     this.name = "he";
//     var age = 12;
//     console.log(this.age);
//     console.log(this.name);
// }
   
// A.prototype.getA = function(){
//     console.log(this);
//     return this.name + 1
// }
   
// let a = new A();
// let funcA = a.getA;
// a.getA();
// funcA();


//new
// function create(fun){
//     return function () {
//         // 创建一个新对象且将其隐式原型指向构造函数原型
//         let obj = {
//           __proto__ : fun.prototype
//         }
//         // 执行构造函数
//         fun.call(obj, ...arguments)
//         // 返回该对象
//         return obj
//     }
// }

// function A(){
//     this.name = "123";
//     this.fuc = function (){
//         console.log("function");
//     }
// }

// A.prototype.geta = function(){
//     this.value = "3";
// }

// let a = new A();
// let b = create(A)();
// console.log(a, b);