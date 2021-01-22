class Socket {
    
    constructor() {
        this.instance = null;
        console.log(this.instance, Socket.instance);
        if(Socket.instance){
            return Socket.instance
        }
        return Socket.instance = this
    }

    static getInstance() {
        if(!this.instance){
            this.instance = new Socket();
        }
        return this.instance
    }
}

class Test {
    constructor() {
        this.test = null;
    }
}

Test.onOpen = () => {};

// const a = Socket.getInstance();
// const b = Socket.getInstance();
const a = new Socket();
const b = new Socket();

console.log(a === b);