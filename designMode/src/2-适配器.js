ajax({
    url: '',
    type: 'POST',
    dataType: 'json',
    data: {
        id: '123'
    }
})

// 以前都是这样使用，需要修改
// $.ajax({...})

// 适配器如下即可
let $ = {
    ajax: function(options){
        return ajax(options);
    }
}