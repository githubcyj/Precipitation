window.onload = function() {
    // function hookupevents() {
        for(let i = 0; i < 3; i++){
            document.getElementById("button" + i).addEventListener("click", function() {
                alert(i);
            });
        }
        // console.log(i);
    // }

    var obj = {
        bar: function() {
          var x = (() => this);
          return x;
        }
    };
    var fn = obj.bar();
    console.log(fn());
    console.log(obj);

    var fn2 = obj.bar;
    // 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
    console.log(fn2()());

}