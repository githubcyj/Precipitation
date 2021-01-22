import React from 'react';
import { Button } from 'antd';

class AntdButton extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            loading: false
        }
    }

    changeLoading =()=>{
        const {loading} =this.state;
        this.setState({loading: !loading});
    }

    render() {
        const {loading} =this.state;
        return (
            <React.Fragment>
                {/* 
                体验：
                    悬浮，聚焦，激活链接时，已访问过的，子元素聚焦，元素聚焦且轮廓聚焦
                    ::before(在什么之上)
                    类型：primary，default，dashed，danger，link
                */}
                <Button type="primary" ghost>
                    Primary
                </Button>
                <Button type="primary" icon="loading" onClick={this.changeLoading}>
                    Primary
                </Button>
                <Button type="primary" loading={loading} >确定确定</Button>
                <br/>
                <br/>
                <br/>
                <button>确定</button>
            </React.Fragment>
        )
    }
}

export default AntdButton;