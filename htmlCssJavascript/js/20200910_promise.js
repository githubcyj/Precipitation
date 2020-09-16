
// Promise 中只有涉及到状态变更后才需要被执行的回调才算是微任务，比如说 then、 catch 、finally ，其他所有的代码执行都是宏任务（同步执行）。

// 基本用法
// const p = new Promise(function(){console.log('resolve')}, function(){console.log('reject')})
// const p1 = new Promise(function(resolve, reject){
//     console.log('resolve');
//     reject(1234);
// })
// const p2 = new Promise((resolve, reject)=>{
//     console.log('resolve');
//     setTimeout(() => resolve(1234), 5000);
//     console.log(567879);
// }).then(res => {
//     console.log(res);
// })
// console.log(p2);

// Promise.resolve('foo')
// // 等价于
// new Promise(resolve => resolve('foo'))

// console.log(Promise);
// console.log(Promise.prototype);

// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
//   })
//   .then(result => result)
//   .catch(e => e);
  
//   const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了');
//   })
//   .then(result => result)
//   .catch(e => e);
  
//   Promise.all([p1, p2])
//   .then(result => console.log(result))
//   .catch(e => console.log(e));

// 常用得属性
// const p3 = new Promise((resolve, reject) => {
//     // resolve('success');
//     // reject('fail');
//     throw new Error('full')
// // }).then(res => {
// //     console.log(res);
// // }).then(value => {
// //     console.log(value);
// //     reject('fail');
// }).catch(err => {
//     // console.log(err);
// }).finally(() => {
//     console.log('finally');
// })
// console.log(p3);

// const P4 = Promise.all([setTimeout(()=>console.log('1'), 1000),setTimeout(()=>console.log(2), 2000),setTimeout(()=>{throw new Error('333')}, 3000)]).then((res)=>{
//     console.log(res);
// }).catch(err =>{}
//     // console.log(err)
// );

// const p5 = Promise.race([
//     fetch('/resource-that-may-take-a-while'),
//     new Promise(function (resolve, reject) {
//       setTimeout(() => reject(new Error('request timeout')), 5000)
//     })
//   ]).then(console.log)
//   .catch(console.error);
  
//   setTimeout(() => { console.log(123) }, 2000);
  

// 链式调用的场景


// 手写promise
/*
我们要满足状态只能三种状态：PENDING,FULFILLED,REJECTED三种状态，且状态只能由PENDING=>FULFILLED,或者PENDING=>REJECTED
*/
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
/*
value状态为执行成功事件的入参，deferreds保存着状态改变之后的需要处理的函数以及promise子节点，构造函数里面应该包含这三个属性的初始化
*/
function Promise(callback) {
    this.status = PENDING;
    this.value = null;
    this.defferd = [];
    setTimeout(callback.bind(this, this.resolve.bind(this), this.reject.bind(this)), 0);
}

Promise.prototype = {
    constructor: Promise,
    //触发改变promise状态到FULFILLED
    resolve: function (result) {
        this.status = FULFILLED;
        this.value = result;
        this.done();
    },
    //触发改变promise状态到REJECTED
    reject: function (error) {
        this.status = REJECTED;
        this.value = error;
    },
    //处理defferd
    handle: function (fn) {
        if (!fn) {
            return;
        }
        var value = this.value;
        var t = this.status;
        var p;
        if (t == PENDING) {
            this.defferd.push(fn);
        } else {
            if (t == FULFILLED && typeof fn.onfulfiled == 'function') {
                p = fn.onfulfiled(value);
            }
            if (t == REJECTED && typeof fn.onrejected == 'function') {
                p = fn.onrejected(value);
            }
        var promise = fn.promise;
        if (promise) {
            if (p && p.constructor == Promise) {
                p.defferd = promise.defferd;
            } else {
                p = this;
                p.defferd = promise.defferd;
                this.done();
            }
        }
        }
    },
    //触发promise defferd里面需要执行的函数
    done: function () {
        var status = this.status;
        if (status == PENDING) {
            return;
        }
        var defferd = this.defferd;
        for (var i = 0; i < defferd.length; i++) {
            this.handle(defferd[i]);
        }
    },
    /*储存then函数里面的事件
    返回promise对象
    defferd函数当前promise对象里面
    */
    then: function (success, fail) {
        var o = {
            onfulfiled: success,
            onrejected: fail
        };
        var status = this.status;
        o.promise = new this.constructor(function () {

        });
        if (status == PENDING) {
            this.defferd.push(o);
        } else if (status == FULFILLED || status == REJECTED) {
            this.handle(o);
        }
        return o.promise;
    }
};

      
// 练习示例
// 1 初级
// Promise.resolve()
//   .then(() => {
//     console.log("then1");
//     Promise.resolve().then(() => {
//       console.log("then1-1");
//     });
//   })
//   .then(() => {
//     console.log("then2");
//   });

// 2 中级
// let p = Promise.resolve();

// p.then(() => {
//     console.log("then1");
//     Promise.resolve().then(() => {
//         console.log("then1-1");
//     });
// }).then(() => {
//     console.log("then1-2");
// });

// p.then(() => {
//     console.log("then2");
// }); 

// 3 高级
// let p = Promise.resolve().then(() => {
//     console.log("then1");
//     Promise.resolve().then(() => {
//       console.log("then1-1");
//     });
// }).then(() => {
//     console.log("then2");
// }).then(() => {
//     console.log("then4");
// }).then(() => {
//     console.log("then5");
//     Promise.resolve().then(() => {
//       console.log("then5-1");
//     });
// });
  
// p.then(() => {
//     console.log("then3");
// });

// 3.1
// Promise.resolve()
//   .then(() => {
//     console.log("then1");
//     Promise.resolve()
//       .then(() => {
//         console.log("then1-1");
//         return 1;
//       })
//       .then(() => {
//         console.log("then1-2");
//       });
//   })
//   .then(() => {
//     console.log("then2");
//   })
//   .then(() => {
//     console.log("then3");
//   })
//   .then(() => {
//     console.log("then4");
//   });

// 3.2
// Promise.resolve()
//   .then(() => {
//     console.log("then1");
//     Promise.resolve()
//       .then(() => {
//         console.log("then1-1");
//         return Promise.resolve(); // 宏任务
//       })
//       .then(() => {
//         console.log("then1-2");
//       });
//   })
//   .then(() => {
//     console.log("then2");
//   })
//   .then(() => {
//     console.log("then3");
//   })
//   .then(() => {
//     console.log("then4");
//   });
