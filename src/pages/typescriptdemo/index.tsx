import * as React from 'react';

interface Point{
    x: number;
    y: number
}

interface IProps {

}

interface IState {

}

// function calvalue(data: Point){
//     console.log('123');
//     return Math.sqrt(data.x ** 2 + data.y ** 2);
// }

class TypescriptDemo extends React.Component<any, any> {

    public render() {
        return(
            <div>
                hello
            </div>
        )
    }
}

export default TypescriptDemo;

// tsDemo({ x: 1, y: 123});
