/**
 * Created by LiuJian on 2015/7/24.
 */

var infos = [['СA','Ů',21,'��һ'],['СB','��',23,'����'],
    ['СC','��',24,'����'],['СD','Ů',21,'��һ'],['СE','Ů',22,'����'],
    ['СF','��',21,'��һ'],['СG','Ů',22,'���'],['СH','Ů',20,'����'],
    ['СI','Ů',20,'��һ'],['СJ','��',20,'����']];

//console.log(infos.length);
for(var i = 0;i<infos.length;i++) {
    if(infos[i][3] != "��һ"){
        infos.splice(i,1);
    }
}

for(var i = 0;i<infos.length;i++){
    if(infos[i][1] == "Ů"){
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

//ͨ��javascript�����ڶ������õ���ǰ�����ڣ��������
var weekday = ["������","����һ","���ڶ�","������","������","������","������"];
var today = new Date();
console.log(today.getSeconds());
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();
var week = weekday[today.getDay()];

//document.write(year+"��"+month+"��"+day+"�� "+week+"--");
//�ɼ���һ���ܵ��ַ������ô����ҹ��ɺ�ָ�ŵ���������ò���Ŷ
var scoreStr = "С��:87;С��:81;С��:97;С��:76;С��:74;СС:94;С��:90;С��:76;С��:64;С��:76";
var scoreArr = new Array();
var j = 0;
for(var i = 4; i<scoreStr.length; i+=7) {
    scoreArr[j] = scoreStr.slice(i,i+2);
    j++;
}


//�������н��ɼ��������Ȼ�����ȡ�����������
var sum = 0;
for(var k=0;k<scoreArr.length;k++){
    sum = sum + parseInt(scoreArr[k]);
}

console.log(sum);