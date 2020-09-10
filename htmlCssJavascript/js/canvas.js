var canvas = document.getElementById("canvas");
// 创建一个绘制环境
var draw = canvas.getContext("2d");

// 设置填充颜色
// draw.fillStyle = "green";

// 动态变化的矩形
let rectWidth = 500;
setInterval(function() {
    draw.fillStyle = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
    draw.clearRect(0,0,500,100);// 清除一个矩形
    draw.fillRect(0, 0, rectWidth--, 100);
}, 10);

for(let a = 2; a< 3; a++){
    draw.fillRect(a,a,a,a);
}

// 矩形demo练习
// 绘制一个矩形
// draw.fillRect(x,y, w,h)
// x,y是矩形的坐标
// // w,h是矩形的宽高
// draw.fillRect(0,0, 100,100);

// // 清除一个矩形范围
// draw.clearRect(10,10, 50,50);