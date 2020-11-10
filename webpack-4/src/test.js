import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: 1
        }
    }

    add = () => {
        console.log(this.state.value);
        fetch('/api/some/path').then(ser=>{
            ser.json().then(res => {

                console.log(res);
            })
        })
        this.setState({
            value: 3
        })
    }

    render() {
        console.log('test');
        return (
            <div className="test" >
                <a href="#" onClick={this.add}>react app</a>
                <div>---------------</div>
                <p>{this.state.value}</p>
            </div>
        );
    }
}

export default Test;
