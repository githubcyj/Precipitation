import React from 'react';
import {Provider} from 'mobx-react';
import AppStore from './store/index';
import Home from './pages/home';


function App() {
    const appStore = new AppStore();
    return (
        <Provider {...appStore}>
            <Home></Home>
        </Provider>
    );
}

export default App;
