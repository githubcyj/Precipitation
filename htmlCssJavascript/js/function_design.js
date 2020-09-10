//自定义函数
function checkName(){}
function checkEmail(){}
function checkPassword(){}

//变量也可以是函数
var checkName = function (){}
var checkEmail = function (){}
var checkPassword = function (){}

//对象收编变量
var CheckObject = {
    checkName : function (){},
    checkEmail : function (){},
    checkPassword : function (){}
}

//对象的另一种形式，函数也是对象
var CheckObject = function(){};
CheckObject.checkName = function(){};
CheckObject.checkEmail = function(){};
CheckObject.checkPassword = function(){};

var CheckObject = function(){
    return {
        checkName : function(){},
        checkEmail : function(){},
        checkPassword : function(){}
    }
}

//类
var CheckObject = function(){
    this.checkName = function(){};
    this.checkEmail = function(){};
    this.checkPassword = function(){};
}

//原型
var CheckObject = function(){};
CheckObject.prototype.checkName = function(){};
CheckObject.prototype.checkEmail = function(){};
CheckObject.prototype.checkPassword = function(){};

//等价于
var CheckObject = function(){};
CheckObject.prototype = {
    checkName : function(){},
    checkEmail : function(){},
    checkPassword : function(){},
}

//对象多次使用
var CheckObject = {
    checkName : function (){
        return this;
    },
    checkEmail : function (){
        return this;
    },
    checkPassword : function (){
        return this;
    }
}

var CheckObject = function(){};
CheckObject.prototype = {
    checkName : function (){
        return this;
    },
    checkEmail : function (){
        return this;
    },
    checkPassword : function (){
        return this;
    }
}

//原生对象上添加自定义函数方法
Function.prototype.addMethod = function(name, fn){
    this[name] = fn;
}
var methods = new Function();
methods.addMethod('checkName', function(){});
methods.addMethod('checkEmail', function(){});
methods.checkName();
methods.checkEmail();

//链式添加
Function.prototype.addMethod5 = function(name, fn){
    this[name] = fn;
    return this;
};    
var methods = function(){};   
methods.addMethod5('checkName', function(){return this; }).addMethod5('checkEmail', function(){return this; });   
methods.checkEmail().checkName();
//还有一种方式
Function.prototype.addMethod6 = function(name, fn){
    this.prototype[name] = fn;
}    
var Methods = function(){};    
Methods.addMethod6('checkName', function(){});    
Methods.addMethod6('checkEmail', function(){});    
var m = new Methods();    
m.checkEmail();