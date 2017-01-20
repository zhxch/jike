/**
 * Created by xiaochunjie on 16/11/11.
 */
$(function(){
    $("#tabUl li").each(function(index){
        var that = $(this);
        var timer = null;
        that.mouseenter(function(){
            timer = setTimeout(function(){
                //将原来区域进行隐藏
                $("div.current").removeClass("current");
                $("#tabUl li.tabin").removeClass("tabin");
                //找到当前的元素
                $("div").eq(index + 1).addClass("current");
                //头部添加样式
                that.addClass("tabin");
            }, 300);
        }).mouseleave(function(){
            clearInterval(timer);
        });
    });


    $("#realContent").load("tab1.html");
    $("#tabUl2 li").each(function(index){
        $(this).click(function(){
            $("#tabUl2 li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if(index == 0){
                $("#realContent").load("tab1.html");
            }else if(index == 1){
                $("#realContent").load("tab1.html");
            }else if(index == 2){
                $("#realContent").load("tab1.html");
            }
        });
    });
});