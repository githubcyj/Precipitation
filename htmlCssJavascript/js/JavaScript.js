

// 对象遍历
// let arr = [1, 'linda', 3, {name: 'jack', age: 8}];
// for(let key in arr){
//     console.log(arr[key]);
// }
// for(let [key, value] of arr.entries()){
//     console.log(key+'-----'+value);
// }
// let obj = {id: 1, name: 'linda', class: 3, child: {name: 'jack', age: 8}};
// for(let key in obj){
//     console.log(obj[key]);
// }
// for(let [key, value] of Object.entries(obj)){
//     console.log(key+'-----'+value);
// }

// 数组方法
// 增删： push, pop, unshfit, shfit,
// 查询： indexOf, for, for...in..., includes
// 遍历： foreach, map, filter, find, findIndex, every, some, reduce, reduceRight, flatMap, flat
// 数组拷贝/复制：JSON.parse(JSON.stringify(Obj))  
// 数组合并:  concat, slice, splice, assign
// 数组转字符串：join


// let arr = [1, 2, 3, 4, 5, 6, 7];// 等效于 let arr = new Array();
// let copyArr = [];// 等效于 let arr = new Array();

// splice(3, 2, 'age') 从下标3开始，删除2个元素，插入'age'

// copy
// let obj1 = [{id: 1, name: 'linda', class: 3, child: {name: 'jack', age: 8}}];
// let obj2 = Object.assign({address: 'shanghai'}, obj1);
// let obj2 = obj1.concat();
// let obj2 = obj1.slice();
// let obj2 = [...obj1];
// obj2[0].age = 18;
// obj2[0].child.name = 'mary';
// console.log(obj1, obj2);
// deepCopy
// let deepObj2 = JSON.parse(JSON.stringify(obj1));
// function copyObj(obj){
//     let cloneObj;
//     //当输入数据为简单数据类型时直接复制
//     if(obj&&typeof obj!=='object'){cloneObj=obj;}
//     //当输入数据为对象或数组时
//     else if(obj&&typeof obj==='object'){
//         //检测输入数据是数组还是对象
//         cloneObj=Array.isArray(obj)?[]:{};
//         for(let key in obj){
//             if(obj.hasOwnProperty(key)){
//                 if(obj[key]&&typeof obj[key]==='object') {
//                     //若当前元素类型为对象时，递归调用
//                     cloneObj[key] = copyObj(obj[key]);
//                 }
//                 //若当前元素类型为基本数据类型
//                 else{cloneObj[key]=obj[key];}
//             }
            
//         }
//     }
//     return cloneObj;
// }
// let deepObj2 = copyObj(obj1);
// deepObj2[0].age = 18;
// deepObj2[0].child.name = 'mary';
// console.log(obj1, deepObj2);

// flatMap?
// const arrMap = arr.map(x => [x * 2]); 
// const arrFlatMap = arr.flatMap(x => [x * 2]);
// console.log(arrMap, arrFlatMap);
// flat
// let arrFlat = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// let newArrFlat = arrFlat.flat(Infinity);
// console.log(newArrFlat, arrFlat);
// let flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
//     return a.concat(b);
// }, []);
// console.log(flattened);
// reduceRight
// let sum = [0, 1, 2, 3].reduceRight(function(a, b) {
//     return a + b;
// });
// console.log(sum);
// reduce
// let initialValue = 0;
// let sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x;
// },initialValue);
// console.log(sum);

// forEach没有返回值，可以更改数组（增删改查）, return; 只能跳出本次循环
// const arrEach = arr.forEach((each, eachIndex, arr1) => {
//     console.log(each, eachIndex, arr1);
//     delete arr1[eachIndex];
//     // arr1[eachIndex] = 10;
//     // arr1.push(eachIndex * 2);
// })
// console.log(arrEach, arr);
// map返回新的数组， return; 只能跳出本次循环
// const arrMap = arr.map((item, index, arr1) => {
//     // console.log(item, index, arr1);
//     // delete arr1[index];
//     return item * 2;
// });
// console.log(arrMap, arr);
// filter返回新的过滤之后的数组, 返回的是数组本身的值，不能更改 return; 只能跳出本次循环
// const arrFilter = arr.filter((fil, filIndex, arr1) => {
//     // console.log(fil, filIndex, arr1);
//     // if(fil !== 4)
//     delete arr1[filIndex];
//     arr1.push([3,4,6]);
//     return fil * 2;
//     // else
//     // return '';
// });
// console.log(arrFilter, arr);
// find, findIndex return; 只能跳出本次循环; return -1; 跳出循环
// const arrFind = arr.findIndex((fin, finIndex, arr1) => {
//     console.log(fin);
//     if(fin === 4){
//         return ;
//     }
// });
// console.log(arrFind, arr);
// some，return; 只能跳出本次循环，return true; 跳出循环
// every, return; 只能跳出本次循环，return false; 跳出循环
// const arrEvery = arr.every((eve, eveIndex, arr1) => {
//     console.log(eve);
//     if(eve !== 4){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(arrEvery, arr);

// const arrPush = arr.push([1,2]);// 返回数组长度
// const arrPop = arr.pop();// 返回最后一个值
// console.log(arrPush, arrPop, arr);
// const arrUnshift = arr.unshift([9,3,7]);// 返回数组长度
// const arrShift = arr.shift();// 返回第一个值
// console.log(arrUnshift, arrShift, arr);
// const arrIndex1 = arr.indexOf(9);// 返回-1
// const arrIndex2 = arr.indexOf(7);// 返回下标
// const arrInclude1 = arr.includes(9);//返回Boolean
// const arrInclude2 = arr.includes(7);
// console.log(arrIndex1, arrIndex2, arrInclude1, arrInclude2);
// for(let a in arr){// a是小标
//     console.log(a);
// }











// 类继承
// var Book = (function(){
//     var bookNum = 0; 
//     function checkBook(name){};
//     function book(newId, newName, newPrice){
//         var name, price;
//         function checkID(id){};
//         this.getName = function(){};
//         this.getPrice = function(){};
//         this.setName = function(){};
//         this.setPrice = function(){};
//         this.id = newId;
//         this.copy = function(){};
//         bookNum++;
//         if(bookNum > 100){
//             throw new Error('我们仅出版100本书。');
//         }
//         this.setName(name);
//         this.setPrice(price);
//     }
//     Book.prototype = {
//         isJSBook : false,
//         display : function(){}
//     };
//     return _book;
// })();


// var Book = (function(){
//     var bookNum = 0;
//     function checkBook(name){};
//     return function (newId, newName, newPrice){
//         var name, price;
//         function checkID(id){};
//         this.getName = function(){};
//         this.getPrice = function(){};
//         this.setName = function(){};
//         this.setPrice = function(){};
//         this.id = newId;
//         this.copy = function(){};
//         bookNum++;
//         if(bookNum > 100){
//             throw new Error('我们仅出版100本书。');
//         }
//         this.setName(name);
//         this.setPrice(price);
//     }
// })();


// Book.prototype = {
//         isJSBook : false,
//         display : function(){}
//     };



//     function SuperClass(name){
//         this.name = name;
//         this.books = ["html","css","javascript"];
//     }
//     SuperClass.prototype.getName = function(){
//         console.log(this.name);
//     }
//     function SubClass(name, time){
//         SuperClass.call(this, name);
//         this.time = time;
//     }
//     SubClass.prototype = new SuperClass();
//     SubClass.prototype.getTime = function(){
//         console.log(this.time);
//     }