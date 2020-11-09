// 事件代理
let div1 = document.getElementById('div1');
div1.addEventListener('click', function(e){
    let target = e.target;
    if(target.nodeName === 'A'){
        alert(target.innerHTML);
    }
})

// $的proxy代理
$('#div').click(function() {
    let _this = this;
    // 直接用this会有问题
    setTimeout(function() {
        $(_this).addClass('red');
    }, 1000);

})

// 或者使用jQuery的proxy方法
$('#div').click(function() {
    setTimeout($.proxy(function() {
        $(this).addClass('red');
    }, this), 1000);

})