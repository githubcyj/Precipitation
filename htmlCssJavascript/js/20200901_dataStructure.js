// JavaScript数据结构
let num = 12;
let str = 'string';
let bool = true;
let un = undefined;
let nul = null;

let obj = [];
let obj1 = function(){};
let obj2 = new Date();
let obj3 = new RegExp();


// 判断类型
// typeof
// console.log(typeof(num));
// console.log(typeof(str));
// console.log(typeof(bool));
// console.log(typeof(un));
// console.log(typeof(nul)); // null是对象
// console.log(typeof(obj));
// console.log(typeof(obj1));
// console.log(typeof(obj2)); // Date是对象
// console.log(typeof(obj3)); // RegExp是对象

// Object.prototype.toString.call返回的字符  如：'[object Number]'
// console.log(Object.prototype.toString.call(num));
// console.log(Object.prototype.toString.call(str));
// console.log(Object.prototype.toString.call(bool));
// console.log(Object.prototype.toString.call(un));
// console.log(Object.prototype.toString.call(nul));
// console.log(Object.prototype.toString.call(obj));
// console.log(Object.prototype.toString.call(obj1));
// console.log(Object.prototype.toString.call(obj2));
// console.log(Object.prototype.toString.call(obj3));

// instanceof只能用于判断对象
// console.log(str instanceof String); // 不是对象，无法判断
// console.log(obj instanceof Array);
// console.log(obj1 instanceof Function);
// console.log(obj2 instanceof Date);
// console.log(obj3 instanceof RegExp);

// constructor 只用于判断对象，不建议使用
console.log(num.constructor === Number);
console.log(str.constructor === String);
console.log(bool.constructor === Boolean);
// console.log(un.constructor === undefined); // undefined没有constructor
// console.log(nul.constructor === null); // null没有constructor
console.log(obj.constructor === Array);
console.log(obj1.constructor === Function);
console.log(obj2.constructor === Date);
console.log(obj3.constructor === RegExp);
// constructor 属性易变，不可信赖，这个主要体现在自定义对象上，当开发者重写prototype后，原有的constructor会丢失。
function F() {}
F.prototype = {
	_name: 'Eric',
};
var f = new F();
console.log(f.constructor === F); // false

// 为了规范，在重写对象原型时一般都需要重新给constructor赋值，以保证实例对象的类型不被改写
function F() {}
F.prototype = {
    constructor: F, 
   _name: 'Eric',
};
var f = new F();
console.log(f.constructor === F); // true 

// 相互转换


// es6新增数据结构
let sym = Symbol('fool');

console.log(sym)