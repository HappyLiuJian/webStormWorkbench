/**
 * Created by LiuJian on 2015/8/9.
 */
$(document).ready(function () {
    waterFall2();
    var jsonData = {"data" : [{"src" : "24.jpg"},{"src" : "25.jpg"},{"src" : "26.jpg"},{"src" : "27.jpg"},{"src" : "28.jpg"},
        {"src" : "29.jpg"},{"src" : "30.jpg"},{"src" : "31.jpg"},{"src" : "32.jpg"}]};
    $(window).on('scroll', function () {
        if (checkScroll2) {
            $.each(jsonData.data, function (key, value) {
                var oBox = $("<div>").addClass('box').appendTo($("#main"));
                var oPic = $("<div>").addClass('pic').appendTo($(oBox));
                var oImg = $("<img>").attr('src','images/'+$(value).attr("src")).appendTo($(oPic));
            });
            waterFall2();
        }
    })
});

//�ж��Ƿ�Ӧ�ü���
function checkScroll2() {
    var $lastBox = $("#main>.box").last();
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return (lastBoxDis < scrollTop + documentH);
}

function waterFall2() {
    var $main = $("#main");
    //ʹ��find����ѡ�����мӴμ�ѡ����������Ч��
    var $boxs = $("#main>.box");
    console.log($boxs);
    //outerWidth()��width()��������ǰ�߿���ȡ��padding��border�����ݵĿ�
    var w;
    w = $boxs.eq(0).outerWidth();
    var cols;
    cols = Math.floor($(window).width() / w);
    $main.width(w * cols).css('margin', "0 auto");
    var arrH = [];
    $boxs.each(function (index, value) {
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            arrH[index] = h;
        } else {
            var minH = Math.min.apply(null, arrH);
            //jqueryӵ��һ��inArray�����ж�index
            var minIndex = $.inArray(minH, arrH);
            //value��һ��dom���󣬵�ת��Ϊjquery����
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minIndex * w + 'px'
            });
            arrH[minIndex] += $boxs.eq(index).outerHeight();
        }
    })
}