class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat() {
        alert( `${this.name} eat sometiong`);
    }
    
    speak() {
        alert( `My name is ${this.name}, age is ${this.age}`);
    }

    getName() {
        return this.name;
    }
}

class Student extends People{
    constructor(name, age, number){
        super(name, age);
        this.number = number;
    }

    study(){
        alert(`${this.name} is studying`);
    }
}

let xiaoming = new Student('xiaoming', 21, 'all');
xiaoming.eat();
xiaoming.speak();
xiaoming.study();