/**
 * Created by xiaochunjie on 16/11/9.
 */
$.myjQ = function(){
    alert("我的扩展");
}

$.fn.myjQ = function(){
    $(this).text("hello");
}