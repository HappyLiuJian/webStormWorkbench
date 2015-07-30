/**
 * Created by LiuJian on 2015/7/30.
 */

//封装运动框架
function getStyle(obj,atr) {
    return getComputedStyle(obj)[atr];
}

//传入一个函数作为是否继续执行的参考
/*function startMove(obj,target,atr,fun) {
 //开始时清楚定时器
 clearInterval(obj.timer);
 //设置定时器
 obj.timer = setInterval(function () {
 var cur = 0;
 //判断属性是什么，定义当前量
 if(atr == 'opacity') {
 cur = Math.round(parseFloat(getStyle(obj,atr))*100);
 } else {
 cur = parseInt(getStyle(obj,atr));
 }
 //计算速度的表示
 var speed = (target - cur) / 8;
 speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
 //检测停止
 if (cur == target) {
 clearInterval(obj.timer);
 //停止之后执行传入的函数
 if(fun) {
 fun();
 }
 } else {
 if(atr == 'opacity') {
 obj.style.opacity = (cur + speed)/100;
 } else {
 obj.style[atr] = cur + speed + 'px';
 }
 }
 //obj.style.width = parseInt(obj.currentStyle['width']) + speed + 'px';
 //obj.style[atr] = cur + speed + 'px';
 //多物体运动框架
 }, 30)
 }*/
//利用json作为参数，实现同时运动
function startMove(obj,json,fun) {
    //定义flag，让所有运动都到达目标再结束
    var flag = true;
    //开始时清楚定时器
    clearInterval(obj.timer);
    //设置定时器
    obj.timer = setInterval(function () {
        for(var atr in json) {
            var cur = 0;
            //判断属性是什么，定义当前量
            if (atr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, atr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, atr));
            }
            //计算速度的表示
            var speed = (json[atr] - cur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //检测停止
            if (cur != json[atr]) {
                flag = false;
            }
            if (atr == 'opacity') {
                obj.style.opacity = (cur + speed) / 100;
            } else {
                obj.style[atr] = cur + speed + 'px';
            }
            if(flag == true) {
                clearInterval(obj.timer);
                //停止之后执行传入的函数
                if (fun) {
                    fun();
                }
            }
            //obj.style.width = parseInt(obj.currentStyle['width']) + speed + 'px';
            //obj.style[atr] = cur + speed + 'px';
            //多物体运动框架
        }
    }, 30)
}