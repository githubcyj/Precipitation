//封装
var Book = function(id, bookname, price){
    this.id = id;
    this.bookname = bookname;
    this.price = price;
}
Book.prototype.display = function(){
    alert("1111");
}

Book.prototype = {
    display : function(){
        alert("2222");
    }
}

//继承
//类继承
function SuperClass(){
    this.superValue = true;
}

SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
}

function SubClass(){
    this.subValue = false;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function(){
    return this.subValue;
}

//构造函数继承
function SuperClass(id){
    this.book = ['html','css','js'];
    this.id = id;
}

SuperClass.prototype.showBook = function(){
    console.log(this.book);
}

function SubClass(id, name){
    SuperClass.call(this,id);
    this.name = name;
}

//组合继承
function SuperClass(name){
    this.book = ['html','css','js'];
    this.name = name;
}

SuperClass.prototype.getName = function(){
    console.log(this.name);
}

function SubClass(time, name){
    SuperClass.call(this, name);
    this.time = time;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function(){
    console.log(this.time);
}

//原型继承
function inheritObject(o){
    function F(){};
    F.prototype = o;
    return new F();
}

var book = {
    name : "js book",
    alikeBook : ["css book", "html book"],
}

var newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.alikeBook.push("xml book");

//寄生式继承
function inheritObject(o){
    function F(){};
    F.prototype = o;
    return new F();
}

var book = {
    name : "js book",
    alikeBook : ["css book", "html book"],
}

function createObject(obj){
    var o = new inheritObject(obj);
    o.getName = function(){//拓展方法
        console.log(name);
    };
    return o;
}

//寄生式组合继承
function SuperClass(){
    this.superValue = true;
}

function SubClass(){
    this.subValue = false;
}

function inheritObject(o){
    function F(){};
    F.prototype = o;
    return new F();
}

function inheritPrototype(SubClass, SuperClass){
    var p = inheritObject(SuperClass.prototype);
    p.constructor = SubClass;
    SubClass.prototype = p;
}