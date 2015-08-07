/**
 * Created by LiuJian on 2015/7/27.
 */
window.onload = function () {
    var go = document.getElementById("go"),
        box = document.getElementById("box");
    EventUtil.addHandler(go ,"click", function () {
        alert("我是父盒子");
    })
    EventUtil.addHandler(go ,"click", function (e) {
        e = EventUtil.getEvent(e);
        EventUtil.stopPropafation(e);
        EventUtil.preventDefult(e);
        alert(EventUtil.getElement(e).nodeName);
    })
}