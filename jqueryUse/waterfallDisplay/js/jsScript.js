/**
 * Created by LiuJian on 2015/8/9.
 */

window.onload = function () {
    waterFall('main', 'box');
    //ģ���յ���json��ʽ����
    var jsonData = {"data" : [{"src" : "24.jpg"},{"src" : "25.jpg"},{"src" : "26.jpg"},{"src" : "27.jpg"},{"src" : "28.jpg"},
        {"src" : "29.jpg"},{"src" : "30.jpg"},{"src" : "31.jpg"},{"src" : "32.jpg"}]};
    window.onscroll = function () {
        if(checkScroll) {
            //�����ݿ���Ⱦ��ҳ��β��
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

//��ȡclassNameΪĳ������ֵ�ú���
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

//��ȡ�����е�����
function getMinIndex(arr, val) {
    for (var i in arr) {
        if (arr[i] == val) {
            return i;
        }
    }
}

//����Ƿ�Ӧ�ü�����һ��ͼƬ
function checkScroll() {
    var oParent = document.getElementById("main");
    var oBox = getClass(oParent,"box");
    //��ȡ���һ�����ӵĸ߶ȼ��������һ�룬��Ϊһ�����صľ���
    var lastBoxH = oBox[oBox.length-1].offsetTop + Math.floor(oBox[oBox.length-1].offsetHeight);
    //��������
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    //������߶�
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    //�����������þ���󣬾Ϳ��Լ���
    return (scrollH + height > lastBoxH);
}

function waterFall(parent, child) {
    //��main������boxȡ����
    var oParent = document.getElementById(parent);
    var oBox = getClass(oParent, child);
    //������ʾ����
    //offsetWidth������padding�Ŀ��
    var boxW = oBox[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / boxW);
    //����main�Ŀ��,��֤һֱ����ͬ������
    oParent.style.cssText = "width:" + boxW * cols + "px; margin: 0 auto;";
    //���ÿһ���и߶���ģ����µļӵ�������棬�ظ��������
    var hArr = [];
    for (var i = 0; i < oBox.length; i++) {
        if (i < cols) {
            hArr.push(oBox[i].offsetHeight);
        } else {
            //Math.min����ֻ����һ�������������apply�������õ�hArr������
            var minH = Math.min.apply(null, hArr);
            var index = getMinIndex(hArr, minH);
            oBox[i].style.position = "absolute";
            oBox[i].style.top = minH + "px";
            oBox[i].style.left = oBox[index].offsetLeft + "px";
            hArr[index] += oBox[i].offsetHeight;
        }
    }

}