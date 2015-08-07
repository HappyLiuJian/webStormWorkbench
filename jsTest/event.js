/**
 * Created by LiuJian on 2015/7/27.
 */
function Dom0() {
    alert("这是一个1级事件");
}
var DOM1 = document.getElementById("btn2");
DOM1.onclick = function () {
    alert("这是一个2级事件");
};
function stopGo(event) {
    //event.stopPropagation();
    event.preventDefault();
}
var DOM2 = document.getElementById("btn3");
/*DOM2.addEventListener("click",function () {
 alert("����һ��DOM2���¼�");
 },false);*/
var li1 = document.getElementById("circle1");
var box = document.getElementById("box");
var go = document.getElementById("go");
function show() {
    alert("这是一个哈哈的事件");
}
function change(event) {
    alert(event.target.nodeName);
    event.stopPropagation(); //��ֹð��
    /*var flag = li1.className;
     if(flag == "square"){
     li1.className = "circle";
     } else {
     li1.className = "square";
     }*/
    //document.write()
}
function showBox() {
    alert("allo allo");
}

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler)
        } else {
            element["on" + type] = handler;
        }
    },
    getEvent: function(event) {
        return event?event:window.event;
    },
    getType: function(event) {
        return event.type;
    },
    getElement: function(event) {
        return event.target || event.srcElement;
    },
preventDefult: function(event) {
    if(event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
},
stopPropafation: function(event) {
    if(event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
};

EventUtil.addHandler(DOM2,"click",show);
EventUtil.addHandler(li1,"click",change);
EventUtil.addHandler(box,"click",showBox);
EventUtil.addHandler(go,"click",stopGo);