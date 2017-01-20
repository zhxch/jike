/**
 * Created by xiaochunjie on 16/11/10.
 */
$(function(){
    $(".main>a").on("click", function(){
        var ulNodes = $(this).next("ul");
        /*if(ulNodes.css("display") == "none"){
            ulNodes.css("display", "block");
        }else{
            ulNodes.css("display", "none");
        }*/
        //ulNodes.toggle(300);
        ulNodes.slideToggle();
    });

    $(".hmain").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });
    
});