import React from 'react'

import './header.less'

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎，admin</span>
                    <a href='javascript:'>退出</a>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>首页</div>
                    <div className='header-bottom-right'>
                        <span>2019-09-06 15:53:00</span>
                        <img src='https://api.map.baidu.com/images/weather/day/qing.png' alt='weather'/>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}