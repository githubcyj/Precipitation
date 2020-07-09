/**
 * 入口
 */

 import React from 'react'
 import ReactDOM from 'react-dom'
 import { createBrowserHistory } from 'history';
import Routers from'./router'

 //将APP组件标签渲染到index页面的div上
 const history = createBrowserHistory();

 ReactDOM.render(<Routers history={history}/>, document.getElementById('root'))