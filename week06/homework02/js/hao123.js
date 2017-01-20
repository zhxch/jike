/**
 * Created by xiaochunjie on 16/11/3.
 */
//1.红色主题
var red = "#ff0000"; //导航栏和主要文字显示的主题
var redHover = "#d82113"; //导航栏划过的颜色

//2.绿色主题
var green = "#33b76f";
var greenHover = "#0aa770";

//3.蓝色主题
var blue = "#2196F3";
var blueHover = "#0000ff";

//4.紫色主题
var purple = "#b726d0";
var purpleHover = "#9c27b0";

//5.橙色主题(淘宝主题~.~)
var orange = "#ff9800";
var orangeHover = "#ff5722";

/*优化后主题颜色设置*/
var colorArr = ["#ff0000", "#33b76f", "#2196F3", "#b726d0", "#ff9800"];
var colorHoverArr = ["#d82113", "#0aa770", "#0000ff", "#9c27b0", "#ff5722"];

//获取五个颜色元素,即目标元素
var redSkin = document.getElementById("red");
var greenSkin = document.getElementById("green");
var blueSkin = document.getElementById("blue");
var purpleSkin = document.getElementById("purple");
var orangeSkin = document.getElementById("orange");

//获取要更换颜色的各个元素(5个地方)
var nav = document.getElementById("nav");//导航栏元素
var indexNav = document.getElementById("indexNav");//首页元素
var layoutFamoussite = document.getElementById("layoutFamoussite");
var tsList = document.getElementsByClassName("tsLink");//主要文字
var navLiList = document.getElementsByClassName("navLi");//划过导航时要变换颜色
//设置颜色
var sColor = localStorage.color;
var sHoverColor = localStorage.hoverColor;
if(sColor && sHoverColor){
    setColor(sColor, sHoverColor);
}
//跨浏览器设置事件(自己总结的万年神器)
function addEvent(target, event, func, boolean){
    if(target.addEventListener){
        target.addEventListener(event, func, boolean);
    }else if(target.attachEvent){
        target.attachEvent("on" + event, func);
    }else {
        target.onclick = func;
    }
}




addEvent(redSkin, "click", function(){setSkin(colorArr[0], colorHoverArr[0]);}, false);
addEvent(greenSkin, "click", function(){setSkin(colorArr[1], colorHoverArr[1]);}, false);
addEvent(blueSkin, "click", function(){setSkin(colorArr[2], colorHoverArr[2]);}, false);
addEvent(purpleSkin, "click", function(){setSkin(colorArr[3], colorHoverArr[3]);}, false);
addEvent(orangeSkin, "click", function(){setSkin(colorArr[4], colorHoverArr[4]);}, false);

/*主题函数优化*/
function setSkin(colorIndex, colorHoverIndex){
    //调用设置主题方法
    setColor(colorIndex, colorHoverIndex);
    //存储
    localStorage.color = colorIndex;
    localStorage.hoverColor = colorHoverIndex;
}

//绑定事件
/*addEvent(redSkin, "click", setRedSkin, false);
 addEvent(greenSkin, "click", setGreenSkin, false);
 addEvent(blueSkin, "click", setBlueSkin, false);
 addEvent(purpleSkin, "click", setPurpleSkin, false);
 addEvent(orangeSkin, "click", setOrangeSkin, false);*/

/*//红色主题函数
function setRedSkin(){
    //调用设置主题方法
    setColor(red, redHover);
    //存储
    localStorage.color = red;
    localStorage.hoverColor = redHover;
}
function setGreenSkin(){
    //调用设置主题方法
    setColor(green, greenHover);
    //存储
    localStorage.color = green;
    localStorage.hoverColor = greenHover;
}
//蓝色主题函数
function setBlueSkin(){
    //调用设置主题方法
    setColor(blue, blueHover);
    //存储
    localStorage.color = blue;
    localStorage.hoverColor = blueHover;
}
//紫色主题函数
function setPurpleSkin(){
    //调用设置主题方法
    setColor(purple, purpleHover);
    //存储
    localStorage.color = purple;
    localStorage.hoverColor = purpleHover;
}
//橙色主题函数
function setOrangeSkin(){
    //调用设置主题方法
    setColor(orange, orangeHover);
    //存储
    localStorage.color = orange;
    localStorage.hoverColor = orangeHover;
}*/


//设置主题函数
function setColor(color, hoverColor){
    //清除nav hover颜色
    for(var i = 0; i < navLiList.length; i++){
        navLiList[i].style.backgroundColor = "";
    }
    nav.style.backgroundColor = color;
    indexNav.style.backgroundColor = hoverColor;
    layoutFamoussite.style.borderColor = color;
    for(var i = 0; i < tsList.length; i++){
        tsList[i].style.color = color;
    }
    for(var i = 0; i < navLiList.length; i++){
        navLiList[i].onmouseover = function() {
            this.style.backgroundColor = hoverColor;
        }
        navLiList[i].onmouseout = function() {
            this.style.backgroundColor = color;
        }
    }
}







