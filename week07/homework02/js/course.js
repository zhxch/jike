/**
 * Created by xiaochunjie on 16/11/15.
 */
$(function(){
    $("#changeId2").css("display", "none");
    /*块级列表和list列表互相切换*/
    var kuai_icon = $(".kuai-icon");
    var list_icon = $(".list-icon");
    kuai_icon.on("click", function(){
        $(this).addClass("curr");
        list_icon.removeClass("curr");
        $("#changeId").css("display", "block");
        $("#changeId2").css("display", "none");
    });
    list_icon.on("click", function(){
        $(this).addClass("curr");
        kuai_icon.removeClass("curr");
        $("#changeId2").css("display", "block");
        $("#changeId").css("display", "none");
    });

    /*课程列表鼠标滑动效果*/
    $("#changeId li").each(function(index){
        var that = $(this);
        that.mouseenter(function(){//鼠标移入事件
            //收藏动画
            $("#changeId .lesson-shoucang").eq(index).css("display", "block");
            //播放动画
            $("#changeId .lessonplay").eq(index).animate(
                {
                    opacity: '1'
                }
            );
            //下拉动画
            $("#changeId .lesson-infor").eq(index).animate(
                {
                    height: '+=87px'
                }
            );
            //文字显示动画
            $("#changeId p").eq(index).animate(
                {
                    height: '52px',
                    opacity: '1',
                }
            );
            $("#changeId p").eq(index).css("display", "block");
            $("#changeId .learn-number").eq(index).css("display", "block");
            $("#changeId .zhongji").eq(index).css("display", "block");
            $(".timeandicon .lessonicon-box").eq(index).animate({
                bottom: '-2px'
            });
        }).mouseleave(function(){
            $("#changeId .lesson-shoucang").eq(index).css("display", "none");
            $("#changeId .lessonplay").eq(index).animate(
                {
                    opacity: '0'
                }
            );
            $("#changeId .lesson-infor").eq(index).animate(
                {
                    height: '88px'
                }
            );
            $("#changeId p").eq(index).animate(
                {
                    height: '0',
                    opacity: '0',
                }
            );
            $("#changeId p").eq(index).css("display", "none");
            $("#changeId .learn-number").eq(index).css("display", "none");
            $("#changeId .zhongji").eq(index).css("display", "none");
            $(".timeandicon .lessonicon-box").eq(index).animate({
                bottom: '4px'
            });
        });
    });

    $("#changeId2 li").each(function(index){
        var that = $(this);
        that.on("mouseenter", function(){
            //收藏动画
            $("#changeId2 .lesson-shoucang").eq(index).css("display", "block");
            //播放动画
            $("#changeId2 .lessonplay").eq(index).animate(
                {
                    opacity: '1'
                }
            );
        });
        that.on("mouseleave", function(){
            //收藏动画
            $("#changeId2 .lesson-shoucang").eq(index).css("display", "none");
            //播放动画
            $("#changeId2 .lessonplay").eq(index).animate(
                {
                    opacity: '0'
                }
            );
        });

    });

    //侧边栏导航滑动效果
    $("#asideList li").each(function(index){
        var that = $(this);
        that.on("mouseenter", function(){
            $("#asideList li .list-show").eq(index).css({
                "display": "block",
                "top": "-45px"
            });

        });
        that.on("mouseleave", function(){
            $("#asideList li .list-show").eq(index).css("display", "none");
        });
    });

    //回到顶部
    var goTop = $("#goTop");
    var leader = 0;
    var target = 0;
    var timerGoTop = null;

    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            goTop.fadeIn(1500);
        }
        else
        {
            goTop.fadeOut(1500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    goTop.click(function(){
        //$('body,html').animate({scrollTop:0},1000);
        if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 500);
            return false;
        }
        $('body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    //搜索按钮
    var searchBox = $("#searchbox");//目标元素
    var searchBtn = $("#searchBtn");
    var closeBtn = $("#close-btn");
    searchBtn.on("click", function(){
        searchBox.addClass("scale");
    });
    closeBtn.on("click", function(){
        searchBox.removeClass("scale");
    });

    //关闭顶部广告
    var closeAD = $("#j-close");
    var jBanner = $("#jBanner");
    closeAD.on("click", function(){
        jBanner.fadeOut(500);
    });


});