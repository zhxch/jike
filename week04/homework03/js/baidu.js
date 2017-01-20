/**
 * Created by xiaochunjie on 16/10/27.
 */
window.onload = function(){
    var setting = document.getElementById("setting");
    var bd_setting = document.getElementById("bdSetting");
    var more = document.getElementById("more");
    var more_product = document.getElementById("moreProduct");
    var wd = document.getElementById("wd");
    setting.onmouseover = function(){
        bd_setting.style.display = "block";
    }
    setting.onmouseout = function() {
        bd_setting.style.display = "none";
    }
    more.onmouseover = function(){
        more_product.style.display = "block";
    }
    more.onmouseout = function() {
        more_product.style.display = "none";
    }
    more_product.onmouseover = function(){
        this.style.display = "block";
    }
    more_product.onmouseout = function() {
        this.style.display = "none";
    }
    //解决ie6 7 8 不支持focus
    /*wd.onfocus = function(){
        this.style.border = "1px solid #00f";
        this.style.borderRightColor = "dodgerblue";
    }
    wd.onblur = function(){
        this.style.border = "1px solid #ddd";
    }*/


    //面试题
    var j = 100;
    function text(){
        console.log(j);
        var j;
    }
};



