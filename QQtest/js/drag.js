/*function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');

  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

window.onload=drag;

function drag(){
   var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
   // 拖曳
   oTitle.onmousedown=fnDown;
   // 关闭
   var oClose=document.getElementById('ui_boxyClose');
   oClose.onclick=function(){
   	  document.getElementById('loginPanel').style.display='none';
   }
   // 切换状态
   var loginState=document.getElementById('loginState'),
       stateList=document.getElementById('loginStatePanel'),
       lis=stateList.getElementsByTagName('li'),
       stateTxt=document.getElementById('login2qq_state_txt'),
       loginStateShow=document.getElementById('loginStateShow');

   loginState.onclick=function(e){
   	 e = e || window.event;
     if(e.stopPropagation){
          e.stopPropagation();
     }else{
          e.cancelBubble=true;
     }
   	 stateList.style.display='block';
   }

   // 鼠标滑过、离开和点击状态列表时
   for(var i=0,l=lis.length;i<l;i++){
      lis[i].onmouseover=function(){
      	this.style.background='#567';
      }
      lis[i].onmouseout=function(){
      	this.style.background='#FFF';
      }
      lis[i].onclick=function(e){
      	e = e || window.event;
      	if(e.stopPropagation){
          e.stopPropagation();
      	}else{
          e.cancelBubble=true;
      	}
      	var id=this.id;
      	stateList.style.display='none';
        stateTxt.innerHTML=getByClass('stateSelect_text',id)[0].innerHTML;
        loginStateShow.className='';
        loginStateShow.className='login-state-show '+id;
      }
   }
   document.onclick=function(){
   	  stateList.style.display='none';
   }
}

function fnDown(event){
  event = event || window.event;
  var oDrag=document.getElementById('loginPanel'),
      // 光标按下时光标和面板之间的距离
      disX=event.clientX-oDrag.offsetLeft,
      disY=event.clientY-oDrag.offsetTop;
  // 移动
  document.onmousemove=function(event){
  	event = event || window.event;
  	fnMove(event,disX,disY);
  }
  // 释放鼠标
  document.onmouseup=function(){
  	document.onmousemove=null;
  	document.onmouseup=null;
  }
}

function fnMove(e,posX,posY){
  var oDrag=document.getElementById('loginPanel'),
      l=e.clientX-posX,
      t=e.clientY-posY,
      winW=document.documentElement.clientWidth || document.body.clientWidth,
      winH=document.documentElement.clientHeight || document.body.clientHeight,
      maxW=winW-oDrag.offsetWidth-10,
      maxH=winH-oDrag.offsetHeight;
  if(l<0){
    l=0;
  }else if(l>maxW){
    l=maxW;
  }
  if(t<0){
    t=10;
  }else if(t>maxH){
    t=maxH;
  }
  oDrag.style.left=l+'px';
  oDrag.style.top=t+'px';
}*/

function getByClass(clsName,parent) {
    var oParent = parent?document.getElementById(parent):document,
        eles = [],
        elements = oParent.getElementsByTagName('*');
    for(var i = 0,l = elements.length;i<l;i++) {
        if(elements[i].className == clsName){
            eles.push(elements[i]);
        }
    }
    return eles;
}

window.onload = drag;

function drag() {
    var oTitle = getByClass('login_logo_webqq','loginPanel')[0];
    //拖拽
    oTitle.onmousedown = fnDown;
    //关闭
    var oClose = document.getElementById("ui_boxyClose");
    oClose.addEventListener('click', function () {
        var iClose = document.getElementById("loginPanel");
        iClose.style.display = 'none';
    },false);
    //切换
    var loginState = document.getElementById("loginState"),
        stateList = document.getElementById("loginStatePanel"),
        list = stateList.getElementsByTagName("li"),
        stateText = document.getElementById("login2qq_state_txt"),
        loginStateShow = document.getElementById('loginStateShow');
    loginState.onclick = function (event) {
        event = event || window.event;
        if(event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble(true);
        }
        stateList.style.display = "block";
    };
    //鼠标滑过、离开和点击li
    for(var i = 0,l = list.length; i<l;i++) {
        list[i].onmouseover = function () {
            //console.log(list[i]);
            this.style.backgroundColor = '#567';
        };
        list[i].onmouseout = function () {
            this.style.backgroundColor = '#fff';
        };
        list[i].onclick = function (event) {
            var liId = this.id;
            event = event || window.event;
            //阻止冒泡，防止点击到父元素div，导致与上一个div的click事件冲突
            if(event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble(true);
            }
            stateList.style.display = 'none';
            stateText.innerHTML = getByClass('stateSelect_text',liId)[0].innerHTML;
            loginStateShow.className = '';
            loginStateShow.className = 'login-state-show ' + liId;
        }
    }
    document.onclick = function () {
        stateList.style.display = 'none';
    }
}

function fnDown(event) {
    event = event || window.event;
    var oDrag = document.getElementById('loginPanel'),
        disX = event.clientX - oDrag.offsetLeft,
        disY = event.clientY - oDrag.offsetTop;
    document.onmousemove = function (event) {
        event = event || window.event;
        fnMove(event,disX,disY);
    }

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
function fnMove(e,posX,posY) {
    var oDrag = document.getElementById('loginPanel'),
        l = e.clientX - posX,
        t = e.clientY - posY,
        winW = document.documentElement.clientWidth || document.body.clientWidth,
        winH = document.documentElement.clientHeight || document.body.clientHeight,
        maxW = winW - oDrag.offsetWidth-10,     //保持关闭按钮一直在页面内
        maxH = winH - oDrag.offsetHeight;
    if(l<0) {
        l = 0;
    } else if(l > maxW) {
        l = maxW;
    }
    if(t > maxH) {
        t = maxH;
    } else if(t < 0) {
        t = 10;
    }
    oDrag.style.left = l + 'px';
    oDrag.style.top = t + 'px';

}
