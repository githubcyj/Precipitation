# redux

## 引入redux，基础使用

- 创建store包含所有的reducer，引入redux-thunk，使用react-redux的creatStore形成包装后的store，将路由文件包含在provider中，且将store注入路由中

- 创建action发送请求，创建reducer存储数据，具体文件中用react-redux中connect(state, dispatch=>{actions方法})，用this.props调用

示例1：
import {connect} from 'react-redux';
import {getHomeDataAction} from './action';

const mapStateToProps = (state)=>{
    return {
        homeData: state.homeData
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        reqHomeData(){
            const action = getHomeDataAction();
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

实例2：
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recordSearchAction } from 'app/action';
import * as actions from './action';

@connect(
    state => state,
    dispatch => bindActionCreators({ ...actions, recordSearchAction }, dispatch)
)
