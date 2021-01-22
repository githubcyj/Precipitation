import React from 'react';
import { Affix, Button } from 'antd';
import './affix.less';

class AntdAffix extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  };

  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            Affix top
          </Button>
        </Affix>
        {/* 
            滚动固定位置
                <div aria-hidden="true" style="width: 1076px; height: 32px;"></div>
                <div class="ant-affix" style="position: fixed; top: 10px; width: 1076px; height: 32px;">
                    <button type="button" class="ant-btn ant-btn-primary">
                        <span>Affix top</span>
                    </button>
                </div>

            position
                fixed: 
        */}
        <div style={{height: 1200, backgroundColor: 'green'}}>
            <div class="box" id="one">One</div>
            <div class="box" id="two">Two</div>
            <div class="box" id="three">Three</div>
            <div class="box" id="four">Four</div>
        </div>
        <br />
        <Affix offsetBottom={this.state.bottom}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              });
            }}
          >
            Affix bottom
          </Button>
        </Affix>
      </div>
    );
  }
}

export default AntdAffix;