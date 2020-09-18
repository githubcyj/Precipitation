import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LKHeader from './components/header/LKHeader';
  import LKAside from './components/Aside/LKAside';;

function App() {
  return (
    <Provider store={store}>
        <Router>
            <div >
                <LKHeader/>
                <LKAside/>
            </div>
        </Router>
    </Provider>
  );
}

export default App;
