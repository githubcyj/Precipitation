
  
// function Person(name, age, love) {
//     this.names = name;
//     this.age = age;
//     this.love = love;
//     this.loving = function() {
//       console.log(this.names + '说：世界这么大，我还在搬砖！')
//     }
// }
  
// let james = new Person('James', 36, '篮球')
// james.loving();
// let kobe = new Person('kobe', 41, '篮球')
// kobe.loving();


// function Person(name, age, love) {
//     this.names = name;
//     this.age = age;
//     this.love = love;
// }
// Person.prototype.loving = function(name) {
//     console.log(name + '说：世界这么大，我还在搬砖！')
// }
  
// let james = new Person('James', 36, '篮球')
// james.loving(james.names);
// let kobe = new Person('kobe', 41, '篮球')
// kobe.loving(kobe.names);

// console.log(james.__proto__ === Person.prototype);
// console.log('Person.prototype.__proto__------------', Person.prototype.__proto__)
// console.log('Obeject.prototype------------', Object.prototype)

// console.log( Person.prototype.__proto__ === Object.prototype)

// 继承
// 类继承
// let superClass = function() {
//     this.superVal = true
//     this.books = ['a', 'b', 'c']
// }
// //声明子类1
// let subClass = function(){
//     this.subVal = false
// }
// subClass.prototype = new superClass()

// let sub1 = new subClass()
// let sub2 = new subClass()
// console.log(sub1.books)
// sub2.books.push('d')
// console.log(sub1.books)


// 构造函数继承
// function superClass(id){
//     this.books = ['JavaScript', 'html', 'css']
//     this.id = id
// }
// superClass.prototype.showBooks = function(){
//     console.log(this.books)
// }
// function subClass(id){
//     superClass.call(this, id)
// }
// let instance1 = new subClass(10)
// let instance2 = new subClass(11)
// console.log(instance1.books)
// instance2.books.push('设计模式')
// console.log(instance1.books)
// instance1.showBooks();


// 原型继承


// // let supClass = {
// //     name : "js book",
// //     alikeBook: ["css book", "html book"]
// // }

// // let subClass1 = inheritObject(supClass);
// // subClass1.name = "ajax book";
// // subClass1.alikeBook.push("xml book");

// // let subClass2 = inheritObject(supClass);
// // subClass2.name = "flash book";
// // subClass2.alikeBook.push("as book");
// // console.log(subClass1.name);
// // console.log(subClass1.alikeBook);
// // console.log(subClass2.name);
// // console.log(subClass2.alikeBook);
// // console.log(supClass.name);
// // console.log(supClass.alikeBook);
let inheritObject = function(o){
    //声明一个过渡函数对象
    function F(){}
    //过渡对象的原型继承父对象
    F.prototype = o
    //返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F()
}

// 寄生组合式继承
let inheritProject = function(subClass, superClass){
    //复制一份父类的原型副本保存到变量中
    var p = inheritObject(superClass.prototype)
    //修正因为重写子类原型导致子类的constructor属性被更改
    p.constructor = subClass
    //设置子类原型
    subClass.prototype = p
}
//定义父类
let supClass = function(name){
    this.name = name
    this.colors = ['red', 'green', 'blue']
}
//定义父类原型方法
supClass.prototype.getName = function(){
    console.log(this.name)
}
// 定义父类的静态方法
supClass.setColor = function() {
    console.log('color');
}

//定义子类
let subClass = function(name, time){
    //构造函数式继承
    supClass.call(this, name)
    //子类新增属性
    this.time = time
}
//寄生式继承父类原型
inheritProject(subClass, supClass)
//子类新增原型方法
subClass.prototype.getTime = function(){
    console.log(this.time) 
}
//创建两个测试方法
let instance1 = new subClass('js book', 2014)
let instance2 = new subClass('css book', 2013)
// instance1.colors.push('black')
// console.log(instance1.colors)
// console.log(instance2.colors)  
// instance2.getName()   
// instance2.getTime()   

// supClass.setColor()
// subClass.setColor()

// // console.log(instance1.__proto__ === subClass.prototype);
console.log(instance1.constructor === subClass);
// // console.log(subClass.prototype.__proto__ === supClass.prototype);
// // console.log(subClass.__proto__ === Function.prototype);
// // console.log(subClass.constructor === Function);
// // console.log(supClass.__proto__ === Function.prototype);
// // console.log(supClass.constructor === Function);


// es5和es6的写法区别
// class Super{
//     constructor(){
//         this.name = "Super";
//     }
//     superSayHello(){
//         console.log("super hello")
//     }
// }
// class Sub extends Super{
//     constructor(){
//         super();
//         this.realName = "Sub";
//     }
//     subSayHello(){
//         console.log("sub hello")
//     }
// }

// var sub = new Sub();

// function Super(){
//     this.name= "Super";
// }
// Super.prototype.superSayHello = function(){
//         console.log("super hello")
// };

// function Sub(){
//     //借用父类构造函数 等价于es6中的super()
//     Super.call(this);
//     this.realName= "Sub";
// }
// //以上只实现了数据的复制
// //使用Object.create() 而不是new Sub(); 避免调用两次Sub();
// Sub.prototype = Object.create(Super.prototype);
// Sub.prototype.constructor = Sub;

// var sub = new Sub();

// es6的class继承 extends
// "use strict";
 
// var _createClass = function () {
//     function defineProperties(target, props) {
//         for (var i = 0; i < props.length; i++) {
//             var descriptor = props[i];
//             descriptor.enumerable = descriptor.enumerable || false;
//             descriptor.configurable = true;
//             if ("value" in descriptor) descriptor.writable = true;
//             Object.defineProperty(target, descriptor.key, descriptor);
//         }
//     }
 
//     return function (Constructor, protoProps, staticProps) {
//         // console.log(Constructor, protoProps, staticProps);
//         if (protoProps) defineProperties(Constructor.prototype, protoProps);
//         if (staticProps) defineProperties(Constructor, staticProps);
//         return Constructor;
//     };
// }();
 
// function _possibleConstructorReturn(self, call) {
//     if (!self) {
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     }
//     return call && (typeof call === "object" || typeof call === "function") ? call : self;
// }
 
// function _inherits(subClass, superClass) {
//     if (typeof superClass !== "function" && superClass !== null) {
//         throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
//     }
//     subClass.prototype = Object.create(superClass && superClass.prototype, {
//         constructor: {
//             value: subClass,
//             enumerable: false,
//             writable: true,
//             configurable: true
//         }
//     });
//     if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
// }
 
// function _classCallCheck(instance, Constructor) {
//     if (!(instance instanceof Constructor)) {
//         throw new TypeError("Cannot call a class as a function");
//     }
// }


// // 测试代码
 
// var Parent = function () {
//     function Parent(name, age) {
//         _classCallCheck(this, Parent);
 
//         this.name = name;
//         this.age = age;
//     }
 
//     _createClass(Parent, [{
//         key: "speakSomething",
//         value: function speakSomething() {
//             console.log("I can speek chinese");
//         }
//     }]); 
 
//     return Parent;
// }();
 
// Parent.height = 12;
 
// Parent.prototype.color = 'yellow';
 
// //定义子类，继承父类
 
// var Child = function (_Parent) {
//     _inherits(Child, _Parent);
 
//     function Child(name, age) {
//         _classCallCheck(this, Child);
 
//         return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name, age));
//     }
 
//     _createClass(Child, [{
//         key: "coding",
//         value: function coding() {
//             console.log("I can code JS");
//         }
//     }]);
 
//     return Child;
// }(Parent);
 
// Child.width = 18;


// // Child();
// // Parent();
// var c = new Child("job", 30);
// c.coding();
// console.log(c.name)
// console.log(c.age)
// console.log(c.color)
// c.speakSomething();
// console.log(Child.height)


// console.dir(document);
// // console.log(c.__proto__ === Child.prototype);
// // console.log(c.constructor === Child);
// // console.log(Child.prototype.__proto__ === Parent.prototype);
// // console.log(Child.constructor === Function);
// // console.log(Child.__proto__ === Parent);
// // console.log(Parent.prototype.__proto__ === Object.prototype);
// // console.log(Parent.__proto__ === Function.prototype);
// // console.log(Parent.constructor === Function);

// class Parent {
//     static height = 12
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     speakSomething(){
//         console.log("I can speek chinese");
//     }
// }
// Parent.prototype.color = 'yellow'


// //定义子类，继承父类
// class Child extends Parent {
//     static width = 18
//     constructor(name,age){
//         super(name,age);
//     }
//     coding(){
//         console.log("I can code JS");
//     }
// }
















// // 寄生继承
let book = {
    name: 'js book',
    alikeBook: ['JavaScript', 'html', 'css']
}
let createBook = function(obj){
    //通过原型继承方式创建新对象
    var o = new inheritObject(obj)
    //拓展新对象
    o.getName = function(){
        console.log(o.name)
    }
    return o
}

let supClass = {
    name : "js book",
    alikeBook: ["css book", "html book"]
}

let subClass1 = createBook(supClass);
subClass1.name = "ajax book";
subClass1.alikeBook.push("xml book");

let subClass2 = createBook(supClass);
subClass2.name = "flash book";
subClass2.alikeBook.push("as book");
console.log(subClass1.name);
console.log(subClass1.alikeBook);
subClass1.getName()
console.log(subClass2.name);
console.log(subClass2.alikeBook);
subClass2.getName()

// 组合继承
// let supClass = function(name){
//     this.name = name
//     this.books = ['JavaScript', 'html', 'css']
// }
// supClass.prototype.showBooks = function(){
//     console.log(this.books)
// }
// let subClass = function(name, time){
//     this.time = time
//     supClass.call(this, name)
// }
// subClass.prototype = new supClass()
// let instance1 = new subClass('dzy', 2018) 
// let instance2 = new subClass('hxy', 2019) 
// console.log(instance1.name, instance1.time)   //dzy 2018
// console.log(instance2.name, instance2.time)   //hxy 2019
// instance1.books.push('设计模式')
// instance1.showBooks()   //["JavaScript", "html", "css", "设计模式"]
// instance2.showBooks()   //["JavaScript", "html", "css"]


// 无法继承静态方法
// let Person=function(){
//     this.age = 28
// };
// Person.say=function(){
//     console.log('I am a Person,I can say.')
// };
// // Person.prototype.getName=function(name){
// //     console.log('My name is '+name);
// // }
// Person.say();
// console.log(Person.say);


//原型
// function Person(){}
// var person1 = new Person()
/**

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
 */

 /**

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


// new创建的过程
// 新建一个内部对象{}
// 给这个对象指定一个原型链，对象的__proto__指向构造函数的prototype
// 返回这个内部对象
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
  */