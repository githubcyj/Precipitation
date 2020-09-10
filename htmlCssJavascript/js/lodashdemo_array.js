

//将第二个数组的值都添加到第一个数组后面
function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;
    // 循环将 values 里的值挨个放到 array 中并返回 array
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
}

//判断是否为数组

//复制数组
function copyArray(source, array) {
    var index = -1,
        length = source.length;
  
    array || (array = Array(length));
    while (++index < length) {
      // 浅复制
      array[index] = source[index];
    }
    return array;
}

//扁平化数组
function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;
  
    predicate || (predicate = isFlattenable);
    result || (result = []);
  
    while (++index < length) {
      var value = array[index];
  
      // 如果当前深度大于 0 且当前值是可以扁平化的
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // 递归去扁平化数组
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          // depth === 1 时该函数完成了扁平化，进行赋值操作
          arrayPush(result, value);
        }
      } else if (!isStrict) { // 限制哪些没有通过扁平化测试的值，如果不是严格型的就赋值，如果是严格型的就丢弃
        result[result.length] = value;
      }
    }
    return result;
}

//判断是否可扁平化
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

//拼接数组
function concat() {  
    var length = arguments.length; //这里采用 arguments 的方法是因为参数个数不确定
    if (!length) {
        return [];
    }
    var args = Array(length - 1),  
        array = arguments[0],  //将第一个参数作为目标合并数组使用
        index = length;

    while (index--) {
        args[index - 1] = arguments[index]; //以降序的形式把后面的参数添加到第一个数组里面
    }
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

// console.log(concat([1], 2, [3], [[[4]]]));

//过滤掉数组中假值的数据
function compact(arrary){
    let resindex = 0;
    const result = [];
    if(arrary === null){
        return result;
    }
    for(const value of arrary){
        if(value){
            result[resindex++] = value;
        }
    }
    return result;
}

console.log(compact(['a', null, undefined, 0, 'c', '1', '-1', '0', NaN, '4']));


//将数组分成size长度的区块
function chunk(array, size = 1) {
    size = Math.max(toInteger(size), 0)
    const length = array == null ? 0 : array.length
    if (!length || size < 1) {
      return []
    }
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))
  
    while (index < length) {
      result[resIndex++] = slice(array, index, (index += size))
    }
    return result
}

//利用第二个数组过滤第一个数组中相同的值
function difference(array, ...values) {
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
      : []
}

//较上一个方法，多了一个参数，主要也是用
/**
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * 思路过程一：迭代(Math.floor)元素后结果：[2.1, 1.2]=> [２, １],[2.3, 3.4]=> [2, 3])
 * 思路过程二：进行_.difference([2, 1], [2, 3]) 过滤值。 ＝》 剩下１
 * 思路过程三：将1.2push到一个新的数组返回
 */

function differenceBy(array, ...values) {
    let iteratee = last(values)
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
      : []
}

// 跟上个方法类似，可以过滤多个属性
function differenceWith(array, ...values) {
    let comparator = last(values)
    if (isArrayLikeObject(comparator)) {
      comparator = undefined
    }
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
      : []
}

// 从左开始删除
function drop(array, n=1) { 
    const length = array == null ? 0 : array.length
    return length
      ? slice(array, n < 0 ? 0 : toInteger(n), length)
      : []
}

// 从右开始删除
function dropRight(array, n=1) {
    const length = array == null ? 0 : array.length
    n = length - toInteger(n)
    return length ? slice(array, 0, n < 0 ? 0 : n) : []
}

function dropRightWhile(array, predicate) {
    return (array != null && array.length)
      ? baseWhile(array, predicate, true, true)
      : []
}

function dropWhile(array, predicate) {
    return (array != null && array.length)
      ? baseWhile(array, predicate, true)
      : []
}

  