import React from 'react';
import AntdButton from './antd/button';
import AntdAffix from './antd/affix';
// import AntdBreadrumb from './antd/breadcrumb ';
import { Button } from 'antd';
import { funSet, funPro, funProCopy, asy } from './javascript/asyncFunction';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                
                {/* <Button onClick={funSet(0)}>setTimeout</Button>
                <Button onClick={funPro}>promise</Button>
                <Button onClick={funProCopy}>promiseCopy</Button>
                <Button onClick={asy}>async</Button> */}

                <AntdButton />
                
                <AntdAffix />

                {/* <AntdBreadrumb /> */}
            </React.Fragment>
        )
    }
}

export default App;