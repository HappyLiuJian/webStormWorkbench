/**
 * Created by LiuJian on 2015/7/24.
 */

var infos = [['小A','女',21,'大一'],['小B','男',23,'大三'],
    ['小C','男',24,'大四'],['小D','女',21,'大一'],['小E','女',22,'大四'],
    ['小F','男',21,'大一'],['小G','女',22,'大二'],['小H','女',20,'大三'],
    ['小I','女',20,'大一'],['小J','男',20,'大三']];

//console.log(infos.length);
for(var i = 0;i<infos.length;i++) {
    if(infos[i][3] != "大一"){
        infos.splice(i,1);
    }
}

for(var i = 0;i<infos.length;i++){
    if(infos[i][1] == "女"){
        console.log(infos[i][0]);
    }
}

function compare(x,y) {
    if(x<=y){
        return y;
    } else {
        return x;
    }
}

//通过javascript的日期对象来得到当前的日期，并输出。
var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var today = new Date();
console.log(today.getSeconds());
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();
var week = weekday[today.getDay()];

//document.write(year+"年"+month+"月"+day+"日 "+week+"--");
//成绩是一长窜的字符串不好处理，找规律后分割放到数组里更好操作哦
var scoreStr = "小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";
var scoreArr = new Array();
var j = 0;
for(var i = 4; i<scoreStr.length; i+=7) {
    scoreArr[j] = scoreStr.slice(i,i+2);
    j++;
}


//从数组中将成绩撮出来，然后求和取整，并输出。
var sum = 0;
for(var k=0;k<scoreArr.length;k++){
    sum = sum + parseInt(scoreArr[k]);
}

console.log(sum);