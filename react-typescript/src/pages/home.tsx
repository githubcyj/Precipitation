import React from 'react';

enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

interface IState{
    myArray: number[];
    myObject: object;
    // myTuple: [string, number, boolean];
    // enum myEnum: {'bool', 'arr', 'num'};
    // myEnum: enum;
}

interface IProps{
    type: string;
}

class Home extends React.Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
    }

    public state: IState = {
        myArray: [1,2,3],
        myObject: {arr: 123, bool: false, str: 'wer'}
        // myTuple: ['sdf', 234, false],
        // myEnum: 
    }

    render(){
        // 只能为它赋予undefined和null
        let unusable : void = undefined;
        let sit = CardSuit.Clubs;
        console.log(sit);
        console.log('object<<<<', this.state.myObject);
        let b = this.state.myObject;
        // let tuple: string | number;
        // tuple = "sdf";
        // let tuple: [number, string] = [1, 'abc'];
        // let myTuple: [string, number, boolean]; 
        // myTuple = ['sdf', 234, false];
        return (
            <div>{this.props.type}</div>
        )
    }
}

export default Home;