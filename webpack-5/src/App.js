import React from 'react';
import { Form, Button } from 'antd';
import './index.less';
// import Test from './test';

function App() {
    console.log('app');
  return (
    <div className="App">
      create-react-app
      <p>hot reload</p>
      <Form>
          <Form.Item label="test">test</Form.Item>
      </Form>
          <Button type="primary">确定</Button>
      {/* <Test/> */}
    </div>
  );
}

export default App;
