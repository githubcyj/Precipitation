import {RouterStore} from 'mobx-react-router';

import AgeStore from './ageStore';


class appStore {
    constructor() {
        this.router = new RouterStore();
        this.ageStore = new AgeStore();
    }
}

export default appStore;