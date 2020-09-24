import React from 'react';
import {inject, observer} from 'mobx-react';

@inject('ageStore')
@observer
class Home extends React.Component {

    increment = () => {
        console.log('home>>>', this.props);
        this.props.ageStore.changeAge();
    }
    render(){
        const ageStore = this.props.ageStore;
        return (
            <div className="App">
                <a onClick={this.increment}>mobx---{ageStore.age}</a>
            </div>
        )
    }
}

export default Home;