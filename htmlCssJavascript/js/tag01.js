<script>
    (function(key){
        //1.获取所有a标签
        var allA=document.querySelector(".tabs").querySelector("div:first-child").querySelectorAll("a");
        //初始化操作
        for(var i=0;i<allA.length;i++){
            if(i==key){
                allA[i].classList.add("active");
                var active=allA[i].dataset["target"];
                document.querySelector("#"+active).style.display='block';
            }
            //2.循环遍历所有的a标签，为其添加点击事件
            allA[i].onclick=function(){
                //3.判断当前是否是当前已激活的页，如果是，则不进行处理
                if(this.classList.contains("active")){
                    return;
                }
                //4.否则，则需要找到当前a标签对应的data-target属性，利用这个属性找到对应id的section进行样式的设置，让其显示
                //4.1先移除之前a标签的active类样式
                var aActive=document.querySelector(".active");
                aActive.classList.remove("active");
                //4.2让之前显示的section隐藏
                var currentTarget=aActive.dataset["target"];
		document.querySelector("#"+currentTarget) .style.display ="none";
                //4.3为其添加active样式
                this.classList.add("active");
                //4.4获取当前被点击的a标签的data-target属性
                var value=this.dataset["target"];
                //4.5让对应id的section显示--添加active类样式即可
                document.querySelector("#"+value).style.display="block";
            };
        }
    })(0);
</script>
