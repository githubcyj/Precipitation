
// eventLoop（事件循环）
//     macrotask（宏任务）
            // script(整体代码)
            // setTimeout——定时器是过多少毫秒之后才会加到事件队列里
            // setInterval
            // I/O
            // UI交互事件
            // postMessage
            // MessageChannel
            // setImmediate(Node.js 环境)
//     microtask（微任务）
            // async/await——await 语句是同步的，await语句后面全部代码才是异步的微任务，
            // Promise.then
            // Object.observe
            // MutaionObserver
            // process.nextTick(Node.js 环境)
// 运行机制
    // 执行一个宏任务（栈中没有就从事件队列中获取）
    // 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
    // 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
    // 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
    // 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

// 宏任务和微任务交叉执行顺序
    // 微任务队列优先于宏任务队列执行，
    // 微任务队列上创建的宏任务会被后添加到当前宏任务队列的尾端，
    // 微任务队列中创建的微任务会被添加到微任务队列的尾端。
    // 只要微任务队列中还有任务，宏任务队列就只会等待微任务队列执行完毕后再执行。
    // await 语句是同步的，await语句后面全部代码才是异步的微任务，

// 实例1
    // setTimeout(function() {
    //     console.log('setTimeout');
    //   })
      
    //   new Promise(function(resolve) {
    //     console.log('promise');
    //     // resolve();
    //   }).then(function() {
    //     console.log('then');
    //   })
      
    //   console.log('console');

    // setTimeout(() => console.log('setTimeout-1'), 0)

    // async function todo1 (params) {
    //     console.log('todo1-await-above')
    //     await Promise.resolve(99)
    //     console.log('todo1-await-under')
    // }

    // todo1()

    // new Promise((resolve, reject) => {
    //     console.log('promise-1')
    //     resolve()
    // }).then(data => {
    //     console.log('promise-then-1')
    // })

    // console.log('end')

// 实例2
    // 宏任务1
    // new Promise((resolve) => {
    //     console.log('new Promise(macro task 1)');
    //     resolve();
    // }).then(() => {
    //     // 微任务1
    //     console.log('micro task 1');
    //     setTimeout(() => {
    //       // 宏任务3
    //       console.log('macro task 3');
    //     }, 0)
    // })
    
    // setTimeout(() => {
    //     // 宏任务2
    //     console.log('macro task 2');
    // }, 1000)
    
    // console.log('========== Sync queue(macro task 1) ==========');

// 实例3
    // console.log('======== main task start ========');
    // new Promise(resolve => {
    // console.log('create micro task 1');
    // resolve();
    // }).then(() => {
    // console.log('micro task 1 callback');
    // setTimeout(() => {
    //     console.log('macro task 3 callback');
    // }, 0);
    // })

    // console.log('create macro task 2');
    // setTimeout(() => {
    // console.log('macro task 2 callback');
    // new Promise(resolve => {
    //     console.log('create micro task 3');
    //     resolve();
    // }).then(() => {
    //     console.log('micro task 3 callback');
    // })
    // console.log('create macro task 4');
    // setTimeout(() => {
    //     console.log('macro task 4 callback');
    // }, 0);
    // }, 0);

    // new Promise(resolve => {
    // console.log('create micro task 2');
    // resolve();
    // }).then(() => {
    // console.log('micro task 2 callback');
    // })

    // console.log('======== main task end ========');

// 实例4
    async function t1 () {
        console.log(1)
        console.log(2)
        new Promise( function ( resolve ) {
            console.log( 'promise3' )
            resolve();
        } ).then( function () {
            console.log( 'promise4' )
        } )
        await new Promise( function ( resolve ) {
            console.log( 'b' )
            resolve();
        } ).then( function () {
            console.log( 't1p' )
        } )
        
        console.log(3)
        console.log(4)
        new Promise( function ( resolve ) {
            console.log( 'promise5' )
            resolve();
        } ).then( function () {
            console.log( 'promise6' )
        } )
    }
        
    setTimeout( function () {
        console.log( 'setTimeout' )
    }, 0 )
        
    async function t2() {
        console.log(5) 
        console.log(6)
        await Promise.resolve().then(() => console.log('t2p'))
        console.log(7)
        console.log(8)
    }
        
    t1()
    new Promise( function ( resolve ) {
        console.log( 'promise1' )
        resolve();
    } ).then( function () {
        console.log( 'promise2' )
    } )
    t2()
        
    console.log('end');
