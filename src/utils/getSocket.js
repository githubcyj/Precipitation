/**
 * @param linkType
 * 2 首页显示
 * 3 获取商机设置徽标
 * 4 获取用户头像、昵称
 * 5 消息中心
 * 6 获取服务订单管理徽标
 *
 *
 * @return code
 * 10000 握手成功
 * 20000 首页显示
 * 30000 修改账户信息
 * 40000 商机设置
 * 50000 消息中心
 * 60000 服务订单管理
*/
class GetSocket {
    connect = (linkType, callback) => {
        // 创建WebSocket对象
        this.websocket = new WebSocket(`${window.location.protocol.replace('http', 'ws')}//${window.location.host}/api/websocket`);

        // 接收服务端数据
        this.websocket.addEventListener('message', (ev) => {
            let res = ev.data;
            if (res && !(res instanceof Object)) {
                res = JSON.parse(res);
            }
            if (res.code === 10000) {
                console.log('握手成功'); // eslint-disable-line no-console
            }
            if (res.data) {
                callback(res);
            }
        });

        // 建立连接
        this.websocket.addEventListener('open', () => {
            console.log("与服务器端的websocket连接建立"); // eslint-disable-line no-console
            // 发送数据
            const sendData = (linkType, methodCode) => {
                return this.websocket.send(
                    JSON.stringify({
                        methodCode,
                        sessionId: localStorage.getItem('sid'),
                        userId:localStorage.getItem('userId'),
                        linkType,
                        randomKey: Date.now()
                    })
                );
            };

            // 绑定通道  methodCode: '0'
            sendData(linkType, '0');

            /**
             * 首次加载需要获取数据
             * @param 获取商机设置徽标  linkType: 3 methodCode: 1
             * @param 首页  linkType: 2 methodCode: 2
             * @param 消息中心 linkType: 5 methodCode: 3
             * @param 获取服务订单管理徽标 linkType: 6 methodCode: 4
            */
            if (linkType === 3) {
                sendData(linkType, 1);
            }

            if (linkType === 2) {
                sendData(linkType, 2);
            }

            if (linkType === 5) {
                sendData(linkType, 3);
            }

            if (linkType === 6) {
                sendData(linkType, 4);
            }
        });

        this.websocket.onclose = () => {
            console.log("与服务器端的websocket连接断开"); // eslint-disable-line no-console
        };

        this.websocket.onerror = () => {
            console.log("与服务器端的websocket连接发生错误"); // eslint-disable-line no-console
        };
    }
    // 关闭WebSocket连接
    close = () => {
        this.websocket.close();
    }
}

export default function () {
    return new GetSocket();
}
