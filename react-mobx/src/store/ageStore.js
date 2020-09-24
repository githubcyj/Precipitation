import {action, observable, toJS} from 'mobx';

class ageStore {

    @observable age = 0;
    /**
     * 构造函数
     * @param appStore 应用store
     */
    constructor(appStore) {
        this.appStore = appStore;
    }

    @action
    changeAge = () => {
        this.age++;
    }

}

export default ageStore;