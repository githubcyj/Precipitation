// 简单回调
function funSet(value,callback) {
    value++;
    console.log('set1-----', value);
    setTimeout(function() {
            value++;
            console.log('set2-----', value);
        setTimeout(function(){
                value++;
                console.log('set3-----', value);
           setTimeout(function(){
                console.log(value);
           },2000);
        },2000);
    },2000);
}

// Promise写法
function funPro1(value) {
	return	new Promise((resolve,reject)=> {
        setTimeout(function(callback){
            value++
            resolve(value)
            console.log('pro-----', value);
    	},2000);
	}) 
}

const funPro = () => {
    funPro1(0).then(res=> {
        console.log('pro1-----', res);
    return 	new Promise((resolve,reject)=> {
                    setTimeout(function(callback){
                        res++
                        console.log('pro2-----', res);
                        resolve(res);
                    },2000);
            }).then(res=> {
                console.log('pro3-----', res);
                return 	new Promise((resolve,reject)=> {
                            setTimeout(function(callback){
                                res++
                                console.log('pro4-----', res);
                                resolve(res)
                            },2000);
                    }).then(res=>{
                        console.log(res);
                    })
            })
    })
}
const funProCopy = () => {
    funPro1(0).then(res=> {
        console.log('pro1-----', res);
        return 	new Promise((resolve,reject)=> {
            setTimeout(function(callback){
                res++;
                console.log('pro2-----', res);
                resolve(res);
            },2000);
        })
    })
    .then(res=> {
        console.log('pro3-----', res);
        return 	new Promise((resolve,reject)=> {
            setTimeout(function(callback){
                res++;
                console.log('pro4-----', res);
                resolve(res)
            },2000);
        })
    })
    .then(res=>{
        console.log(res);
    })
}

// async函数写法
function funAsync(value) {
	return	new Promise((resolve,reject)=> {
        setTimeout(function(callback){
            value++;
            console.log('async----', value);
      		resolve(value)
    	},2000);
	}) 
}

async function asy() {
    let v = 0;
    v = await funAsync(v);
    v = await funAsync(v);
    v = await funAsync(v);
    console.log(v);
}  

// new Promise((resolve, reject) => {
//     const cons = 12;
//     resolve(cons);
// }).then(res => {
//     console.log(res);
// })
// new Promise((resolve, reject) => {
//     setTimeout(function(callback){
//         const cons = 12;
//         resolve();
//     },2000);
// }).then(res => {
//     console.log(res);
// })

// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('fail')), 3000)
// })

// var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(p1), 1000)
// })

// p2.then(result => console.log(result))
//     .catch(error => console.log(error))

// var p1 = Promise.resolve(value);
// // 等价于
// var p1 = new Promise(resolve => resolve(value));
// var p2 = Promise.reject('err');
// // 等同于
// var p2 = new Promise((resolve, reject) => reject('err'));

// new Promise((resolve, reject) => {
//     resolve(123);
// }).then(res => {
//     console.log(res);
// }).then(req => {
//     console.log('req----', req);
// }).then(() => {
//     console.log(11111);
// })

// generator
// function* f () {
//     console.log('执行了！')
// }
// var generator = f();
// console.log(generator.next()); // 执行Generator函数，只到遇到yield表达式,这里没有就直接输出："执行了!"，函数返回{"done":true}没有value

// var arr = [1, [[2, 3], 4], [5, 6]];
// var flat = function* (a) {
//     var length = a.length;
//     for (var i = 0; i < length; i++) {
//         var item = a[i];
//         if (typeof item !== 'number') {
//             yield *flat(item)
//         } else {
//             yield item;
//         }
//     }
// }
// for (var f of flat(arr)) {
//     console.log(f);
// }



// 手动实现源码
// promise


export {
    funSet,
    funPro,
    funProCopy,
    asy
};
