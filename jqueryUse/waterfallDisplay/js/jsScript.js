/**
 * Created by LiuJian on 2015/8/9.
 */

window.onload = function () {
    waterFall('main', 'box');
    //模拟收到的json格式数据
    var jsonData = {"data" : [{"src" : "24.jpg"},{"src" : "25.jpg"},{"src" : "26.jpg"},{"src" : "27.jpg"},{"src" : "28.jpg"},
        {"src" : "29.jpg"},{"src" : "30.jpg"},{"src" : "31.jpg"},{"src" : "32.jpg"}]};
    window.onscroll = function () {
        if(checkScroll) {
            //将数据快渲染到页面尾部
            var oParent = document.getElementById("main");
            for(var i = 0; i < jsonData.data.length; i++) {
                var oBox = document.createElement('div');
                oBox.className = 'box';
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var img = document.createElement('img');
                img.src = "images/" + jsonData.data[i].src;
                oPic.appendChild(img);
            }
            waterFall('main', 'box');
        }
    };
};

//获取className为某个传入值得函数
function getClass(parent, cls) {
    var all = parent.getElementsByTagName("*");
    var boxLis = [];
    for (var i = 0; i < all.length; i++) {
        if (all[i].className == cls) {
            boxLis.push(all[i]);
        }
    }
    return boxLis;
}

//获取数组中的索引
function getMinIndex(arr, val) {
    for (var i in arr) {
        if (arr[i] == val) {
            return i;
        }
    }
}

//检测是否应该加载下一张图片
function checkScroll() {
    var oParent = document.getElementById("main");
    var oBox = getClass(oParent,"box");
    //获取最后一个盒子的高度加上自身的一半，作为一个加载的距离
    var lastBoxH = oBox[oBox.length-1].offsetTop + Math.floor(oBox[oBox.length-1].offsetHeight);
    //滚动距离
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    //浏览器高度
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    //当划过了设置距离后，就可以加载
    return (scrollH + height > lastBoxH);
}

function waterFall(parent, child) {
    //将main下所有box取出来
    var oParent = document.getElementById(parent);
    var oBox = getClass(oParent, child);
    //计算显示列数
    //offsetWidth包括了padding的宽度
    var boxW = oBox[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / boxW);
    //设置main的宽度,保证一直是相同的列数
    oParent.style.cssText = "width:" + boxW * cols + "px; margin: 0 auto;";
    //存放每一行中高度最矮的，把新的加到最矮的下面，重复这个过程
    var hArr = [];
    for (var i = 0; i < oBox.length; i++) {
        if (i < cols) {
            hArr.push(oBox[i].offsetHeight);
        } else {
            //Math.min参数只能是一组数，这里采用apply把他运用到hArr数组里
            var minH = Math.min.apply(null, hArr);
            var index = getMinIndex(hArr, minH);
            oBox[i].style.position = "absolute";
            oBox[i].style.top = minH + "px";
            oBox[i].style.left = oBox[index].offsetLeft + "px";
            hArr[index] += oBox[i].offsetHeight;
        }
    }

}