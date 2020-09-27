# es6,typescript,react,redux,mobx,hooks练习

## es6

### promise

### async，await

- async返回的是一个promise
- await等待的是一个结果，正常返回promise.resolve()，如果是返回reject，可以用try...catch...或者promise.catch()

## typescript

数据类型

## react context

## react redux

## react mobx

## react数据状态管理总结

- redux
  - 特点
    - 函数式编程；
    - 单一 store，状态集中；
    - 手动追踪所有状态对象的变更；
  - 优点
    - 不可直接修改数据，严格控制；
    - 任何操作逻辑可溯源；
  - 缺点
    - store 无法被热更新，除非清空当前的状态；
    - 流程繁琐；
    - 异步需要借助第三方工具库；

- mobx
  - 特点
    - 面向对象；
    - 按模块划分，独立管理；
    - 监听可观察对象，变更时自动触发；
  - 优点
    - 响应式编程，学习成本低，基础知识非常简单；
    - 写更少的代码，完成更多的事。不会像 Redux 一样写非常多的样板代码；
    - 使组件更加颗粒化拆分；
  - 缺点
    - 过于自由，提供的约定及模版代码很少，如果团队不做一些约定，容易导致团队代码风格不统一；
    - 可拓展，可维护性弱；更适合用在中小型项目中；mobx 更自由，需要制定一些规则来确保项目后期拓展，维护难易程度；

- context
  - 优点
    - 可以在一定程度上确保组件所提供的 context 的可控性和影响范围；
    - 在 App 级与组件级上，用 context 作为共享数据的媒介；
  - 缺点
    - 随意使用会破坏父子组件的一对多线性依赖，导致组件之间一些不必要的额外依赖，降低组件的复用性和可维护性；
    - 每次 context.Provider 的状态修改，都会伴随着订阅的 context.Consumer 重新渲染；可能导致潜在的性能问题；

- request
  - ajax
        //创建 XMLHttpRequest 对象
        var ajax = new XMLHttpRequest();
        //规定请求的类型、URL 以及是否异步处理请求。
        ajax.open('GET',url,true);
        //发送信息至服务器时内容编码类型
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //发送请求
        ajax.send(null);  
        //接受服务器响应数据
        ajax.onreadystatechange = function () {
            if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {
            }
        };
  - fetch(url, [options]): 底层基于promise原理设计的，能明确配置请求对象。被定义在BOM的window对象，返回的是一个promise对象，
    options: 包含以下字段
        method: 请求的方法，例如：GET, POST。
        headers: 请求头部信息，可以是一个简单的对象，也可以是 Headers 类实例化的一个对象。
        body: 需要发送的信息内容，可以是 Blob, BufferSource, FormData, URLSearchParams 或者 USVString。注意，GET, HEAD方法不能包含body。
        mode: 请求模式，分别有 cors, no-cors, same-origin, navigate 这几个可选值。
        cors: 允许跨域，要求响应中 Acess-Control-Allow-Origin 这样的头部表示允许跨域。
        no-cors: 只允许使用 HEAD, GET, POST方法。
        same-origin: 只允许同源请求，否则直接报错。
        navigate: 支持页面导航。
        credentials: 表示是否发送cookie，有三个选项
        omit: 不发送cookie。
        same-origin: 仅在同源时发送cookie。
        include: 发送cookie。
        cache: 表示处理缓存的策略。
        redirect: 表示发生重定向时，有三个选项
        follow: 跟随。
        error: 发生错误。
        manual: 需要用户手动跟随。
        integrity: 包含一个用于验证资资源完整性的字符串。
  - axios：是对原生XHR的封装，支持promise。 默认携带cookie，防止了csrf攻击；支持并发请求；支持取消请求；支持拦截请求
    创建一个实例，axios.create([config])，可以直接使用的实例方法有：axios.request(config)、axios.get(url[, config])、axios.delete(url[, config])、axios.head(url[, config])、axios.options(url[, config])、axios.post(url[, data[, config]])、axios.put(url[, data[, config]])、axios.patch(url[, data[, config]])
        request：
            {
                // `url` 是用于请求的服务器 URL
                url: '/user',

                // `method` 是创建请求时使用的方法
                method: 'get', // default

                // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
                // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
                baseURL: 'https://some-domain.com/api/',

                // `transformRequest` 允许在向服务器发送前，修改请求数据
                // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
                // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
                transformRequest: [function (data, headers) {
                    // 对 data 进行任意转换处理
                    return data;
                }],

                // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
                transformResponse: [function (data) {
                    // 对 data 进行任意转换处理
                    return data;
                }],

                // `headers` 是即将被发送的自定义请求头
                headers: {'X-Requested-With': 'XMLHttpRequest'},

                // `params` 是即将与请求一起发送的 URL 参数
                // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
                params: {
                    ID: 12345
                },

                // `paramsSerializer` 是一个负责 `params` 序列化的函数
                // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
                paramsSerializer: function(params) {
                    return Qs.stringify(params, {arrayFormat: 'brackets'})
                },

                // `data` 是作为请求主体被发送的数据
                // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
                // 在没有设置 `transformRequest` 时，必须是以下类型之一：
                // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
                // - 浏览器专属：FormData, File, Blob
                // - Node 专属： Stream
                data: {
                    firstName: 'Fred'
                },

                // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
                // 如果请求话费了超过 `timeout` 的时间，请求将被中断
                timeout: 1000,

                // `withCredentials` 表示跨域请求时是否需要使用凭证
                withCredentials: false, // default

                // `adapter` 允许自定义处理请求，以使测试更轻松
                // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
                adapter: function (config) {
                    /* ... */
                },

                // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
                // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
                auth: {
                    username: 'janedoe',
                    password: 's00pers3cret'
                },

                // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
                responseType: 'json', // default

                // `responseEncoding` indicates encoding to use for decoding responses
                // Note: Ignored for `responseType` of 'stream' or client-side requests
                responseEncoding: 'utf8', // default

                // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
                xsrfCookieName: 'XSRF-TOKEN', // default

                // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
                xsrfHeaderName: 'X-XSRF-TOKEN', // default

                // `onUploadProgress` 允许为上传处理进度事件
                onUploadProgress: function (progressEvent) {
                    // Do whatever you want with the native progress event
                },

                // `onDownloadProgress` 允许为下载处理进度事件
                onDownloadProgress: function (progressEvent) {
                    // 对原生进度事件的处理
                },

                // `maxContentLength` 定义允许的响应内容的最大尺寸
                maxContentLength: 2000,

                // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
                validateStatus: function (status) {
                    return status >= 200 && status < 300; // default
                },

                // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
                // 如果设置为0，将不会 follow 任何重定向
                maxRedirects: 5, // default

                // `socketPath` defines a UNIX Socket to be used in node.js.
                // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
                // Only either `socketPath` or `proxy` can be specified.
                // If both are specified, `socketPath` is used.
                socketPath: null, // default

                // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
                // `keepAlive` 默认没有启用
                httpAgent: new http.Agent({ keepAlive: true }),
                httpsAgent: new https.Agent({ keepAlive: true }),

                // 'proxy' 定义代理服务器的主机名称和端口
                // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
                // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
                proxy: {
                    host: '127.0.0.1',
                    port: 9000,
                    auth: {
                    username: 'mikeymike',
                    password: 'rapunz3l'
                    }
                },

                // `cancelToken` 指定用于取消请求的 cancel token
                // （查看后面的 Cancellation 这节了解更多）
                cancelToken: new CancelToken(function (cancel) {
                })
            }
        response：
            {
                // `data` 由服务器提供的响应
                data: {},

                // `status` 来自服务器响应的 HTTP 状态码
                status: 200,

                // `statusText` 来自服务器响应的 HTTP 状态信息
                statusText: 'OK',

                // `headers` 服务器响应的头
                headers: {},

                // `config` 是为请求提供的配置信息
                config: {},
                // 'request'
                // `request` is the request that generated this response
                // It is the last ClientRequest instance in node.js (in redirects)
                // and an XMLHttpRequest instance the browser
                request: {}
            }
  - IE浏览器兼容
    低版本的ie浏览器发送请求，使用var request = new ActiveXObject('Microsoft.XMLHTTP');
  - cancel请求(并不是真正的取消请求，只是前端不接收接口返回的数据)
    ajax.abort();

    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    source.cancel('Operation canceled by the user.');

    const controller = new AbortController(); // 360浏览器不兼容
    const { signal } = controller;
    fetch("http://localhost:8000", { signal }).then(response => {
        console.log(`Request 1 is complete!`);
    }).catch(e => {
        console.warn(`Fetch 1 error: ${e.message}`);
    });
    // Abort request  
    controller.abort();

## react router

- react-router-dom
  - 基本构建：BrowserRouter、Switch、Route、Link
  - 动态路由：正则匹配
