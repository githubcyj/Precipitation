# mobx

## 引入mobx，基本使用

- 和redux很相似，在根路由上注入store的方式引入。单一store管理
- store文件：变量使用@observable监控、方法使用@action；page文件：@inject引入对应得store、@observer监控store变量，即时更新页面数据

注意：
    mobx的装饰器语法导致的报错：Support for the experimental syntax 'decorators-legacy' isn't currently enabled
    解决方案：
        npm install  customize-cra react-app-rewired @babel/plugin-proposal-decorators --save

        项目根目录新建config-overrides.js文件加入以下代码:
            const { override, addDecoratorsLegacy } = require('customize-cra');
            module.exports = override(
            addDecoratorsLegacy()
            );
        修改package.json文件如下：
            "scripts": {
            "start": "react-app-rewired start",
            "build": "react-app-rewired build",
            "test": "react-app-rewired test",
            "eject": "react-app-rewired eject"
            },
        重启就可以了
