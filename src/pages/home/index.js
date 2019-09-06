import React from 'react'

/**
 * 首页路由
 */
export default class Home extends React.Component{

    Example() {
        // 声明一个叫 “count” 的 state 变量。
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.Example}
            </div>
        )
    }
}