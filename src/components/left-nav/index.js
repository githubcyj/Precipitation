import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';

import './left-nav.less'
import logo from '../../assets/images/logo.png'

const SubMenu = Menu.SubMenu;

export default class LeftNav extends React.Component{
    render(){
        return(
            <div className='left-nav'>
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt='logo' />
                    <h1>系统后台</h1>
                </Link>
                <Menu
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                // inlineCollapsed={this.state.collapsed}
                >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>首页</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                    <span>
                        <Icon type="mail" />
                        <span>商品</span>
                    </span>
                    }
                >
                    <Menu.Item key="2">
                        <Icon type="mail" />
                        <span>品类管理</span>
                    </Menu.Item>
                    <Menu.Item key="3">商品管理</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                    <span>
                        <Icon type="appstore" />
                        <span>用户管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="4">Option 9</Menu.Item>
                    <Menu.Item key="5">Option 10</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                    <span>
                        <Icon type="appstore" />
                        <span>角色管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="6">Option 9</Menu.Item>
                    <Menu.Item key="7">Option 10</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                    <span>
                        <Icon type="appstore" />
                        <span>图形图表</span>
                    </span>
                    }
                >
                    <Menu.Item key="8">Option 9</Menu.Item>
                    <Menu.Item key="9">Option 10</Menu.Item>
                </SubMenu>
                </Menu>
            </div>
            
        )
    }
}