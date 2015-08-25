/**
 * Created by LiuJian on 2015/7/29.
 */
var data = ['iphone6s','Ipad','samsung5','50元充值卡','1000元超市购物券','谢谢参与','照相机','一支笔'],
    timer = null,
    flag = 0;
window.onload = function () {
    var play = document.getElementById('play'),
        stop = document.getElementById('stop');
    //开始抽奖
    play.onclick = playFun;
    stop.onclick = stopFun;

    //用键盘开始抽奖
    document.documentElement.onkeyup = function(event) {
        event = event || window.event;
        if(event.keyCode == 13){
            if(flag == 0) {
                playFun();
                flag = 1;
            } else if(flag == 1) {
                stopFun();
                flag = 0;
            }
        }
    };
    //document.onkeyDown = playFun2;
};

function playFun() {
    var that = this;
    var play = document.getElementById('play');
    var title = document.getElementById('title');
    clearInterval(timer);
    timer = setInterval(function () {
        //random*length生成0~length-1的随机数
        var random = Math.floor(Math.random()*data.length);
        title.innerHTML = data[random];
    },50);
    play.style.backgroundColor = '#dedede'
}

function stopFun() {
    var that = this;
    clearInterval(timer);
    var play = document.getElementById('play');
    play.style.backgroundColor = '#036';
}