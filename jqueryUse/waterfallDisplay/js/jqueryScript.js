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

//判断是否应该加载
function checkScroll2() {
    var $lastBox = $("#main>.box").last();
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return (lastBoxDis < scrollTop + documentH);
}

function waterFall2() {
    var $main = $("#main");
    //使用find比在选择器中加次级选择器更加有效率
    var $boxs = $("#main>.box");
    console.log($boxs);
    //outerWidth()和width()的区别是前者可以取出padding、border等内容的宽
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
            //jquery拥有一个inArray方法判断index
            var minIndex = $.inArray(minH, arrH);
            //value是一个dom对象，得转换为jquery对象
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minIndex * w + 'px'
            });
            arrH[minIndex] += $boxs.eq(index).outerHeight();
        }
    })
}