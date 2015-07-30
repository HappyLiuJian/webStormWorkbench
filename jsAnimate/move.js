/**
 * Created by LiuJian on 2015/7/30.
 */

//��װ�˶����
function getStyle(obj,atr) {
    return getComputedStyle(obj,false)[atr];
}

//����һ��������Ϊ�Ƿ����ִ�еĲο�
function startMove(obj,target,atr,fun) {
    //��ʼʱ�����ʱ��
    clearInterval(obj.timer);
    //���ö�ʱ��
    obj.timer = setInterval(function () {
        var cur = 0;
        //�ж�������ʲô�����嵱ǰ��
        if(atr == 'opacity') {
            cur = Math.round(parseFloat(getStyle(obj,atr))*100);
        } else {
            cur = parseInt(getStyle(obj,atr));
        }
        //�����ٶȵı�ʾ
        var speed = (target - cur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        //���ֹͣ
        if (cur == target) {
            clearInterval(obj.timer);
            //ֹ֮ͣ��ִ�д���ĺ���
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
        //�������˶����
    }, 30)
}