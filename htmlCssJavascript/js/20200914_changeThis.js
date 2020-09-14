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
//  接收多个参数，第一个为函数上下文也就是this，后边参数为函数本身的参数。
//  Function.prototype.myCall = function (context) {
//     // 赋值作用域参数，如果没有则默认为window，即访问全局作用域对象
//     context = context || window    
//     // 绑定调用函数（.call之前的方法即this，前面提到过调用call方法会调用一遍自身，所以这里要存下来）
//     context.invokFn = this    
//     // 截取作用域对象参数后面的参数
//     let args = [...arguments].slice(1)
//     // 执行调用函数，记录拿取返回值
//     let result = context.invokFn(...args)
//     // 销毁调用函数，以免作用域污染
//     Reflect.deleteProperty(context, 'invokFn')
//     return result
// }

// 测试用例
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

// Person.say(18,'chengdu');
// Person.say.call(Person1,18,'chengdu');//我叫Tom1我今年18
// Person.say.myCall(Person1,18,'chengdu');

//apply原理实现
// 接收两个参数，第一个参数为函数上下文this，第二个参数为函数参数只不过是通过一个数组的形式传入的。
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

// 测试用例
let Person = {
    name: 'Tom',
    say(age) {
        console.log(this)
        console.log(`我叫${this.name}我今年${age}`)
    }
}

Person1 = {
    name: 'Tom1'
}

Person.say(18,'chengdu');
Person.say.apply(Person1,[18]);//我叫Tom1我今年18
Person.say.myApply(Person1,[18]);
console.log(Person, Person1);


//bind原理实现
// 接收多个参数，第一个是bind返回值返回值是一个函数上下文的this，不会立即执行
// 注意：通过new创建的对象，bind会失效
// Function.prototype.myBind = function(){
//     // 1、保存函数
//     let _this = this;
//     // 2、保存目标对象
//     let context = arguments[0]||window;
//     // 3、保存目标对象之外的参数,将其转化为数组;
//     let rest = Array.prototype.slice.call(arguments,1);
//     // 4、返回一个待执行的函数
//     return function F(){
//       // 5、将二次传递的参数转化为数组;
//       let rest2 = Array.prototype.slice.call(arguments)
//       if(this instanceof F){
//         // 6、若是用new操作符调用,则直接用new 调用原函数,并用扩展运算符传递参数
//         return new _this(...rest2)
//       }else{
//         //7、用apply调用第一步保存的函数，并绑定this，传递合并的参数数组，即context._this(rest.concat(rest2))
//         _this.apply(context,rest.concat(rest2));
//       }
//     }
// };

// 测试用例
// test1
// let obj = {
//     name: "一个"
// }

// function allName(firstName, lastName, flag) {
//     console.log(this)
//     console.log(`我的全名是"${firstName}${this.name}${lastName}"我的座右铭是"${flag}"`)
// }
// allName.bind(obj) //不会执行
// let fn = allName.bind(obj)
// fn('我是', '前端', '好好学习天天向上')
// let fn1 = allName.myBind(obj)
// fn1('我是', '前端', '好好学习天天向上')

// // 也可以这样用，参数可以分开传。bind后的函数参数默认排列在原函数参数后边
// fn = allName.bind(obj, "你是")
// fn('前端', '好好学习天天向上')
// fn1 = allName.myBind(obj, "你是")
// fn1('前端', '好好学习天天向上')

// test2 new创建用例
// function Person(){
//     this.name="zs";
//     this.age=18;
//     this.gender="男"
// }
// let obj={
//     hobby:"看书"
// }
// //  将构造函数的this绑定为obj
// let changePerson = Person.myBind(obj);
// //  直接调用构造函数,函数会操作obj对象,给其添加三个属性;
// changePerson();
// //  1、输出obj
// console.log(obj);
// //  用改变了this指向的构造函数,new一个实例出来
// let p = new changePerson();
// // 2、输出obj
// console.log(p);

