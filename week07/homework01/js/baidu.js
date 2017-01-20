/**
 * Created by xiaochunjie on 16/10/27.
 */
/*window.onload = function(){
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
    wd.onfocus = function(){
        this.style.border = "1px solid #00f";
        this.style.borderRightColor = "dodgerblue";
    }
    wd.onblur = function(){
        this.style.border = "1px solid #ddd";
    }

};*/

$(function(){
    var setting = $("#setting");
    var bdSetting = $("#bdSetting");
    var more = $("#more");
    var moreProduct = $("#moreProduct");
    var wd = $("#wd").val();
    //设置
    setting.on("mouseenter", function(){
        bdSetting.show();
    });
    setting.on("mouseleave", function(){
        bdSetting.hide();
    });
    //更多产品
    more.on("mouseenter", function(){
        moreProduct.show();
    });
    more.on("mouseleave", function(){
        moreProduct.hide();
    });
    moreProduct.on("mouseenter", function(){
        //切记:一定要将js对象转为jQuery对象
        $(this).show();
    });
    moreProduct.on("mouseleave", function(){
        $(this).hide();
    });

    //内容区域tab栏切换
    $("#tabUl li").each(function(index){
        var that = $(this);
        var timer = null;
        that.mouseenter(function(){
            timer = setTimeout(function(){
                //将原来区域进行隐藏
                $("div.current").removeClass("current");
                $("#tabUl li.tabin").removeClass("tabin");
                //找到当前的元素
                $(".tab-content").eq(index).addClass("current");
                //头部添加样式
                that.addClass("tabin");
            }, 300);
        }).mouseleave(function(){
            clearInterval(timer);
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

    //换肤
    var skinTag = $("#skinTag");
    var skinItem = $("#skinItem");
    var pic1 = $("#pic1");
    var pic2 = $("#pic2");
    var pic3 = $("#pic3");
    skinTag.on("click", function(){
        skinItem.slideToggle("slow");
    });
    var bgColor = localStorage.bgColor;
    var bgLogo = localStorage.bgLogo;
    var navFontColor = localStorage.navFontColor;
    if(bgColor && bgLogo && navFontColor){
        $("body").css("backgroundImage", "url(images/" + bgColor + ")");
        $(".header .nav a").css("color", navFontColor);
        $(".logo img").attr("src", "images/" + bgLogo);
    }
    pic1.on("click", function(){
        $("body").css("backgroundImage", "url(images/4.jpg)");
        $(".header .nav a").css("color", "#fff");
        $(".logo img").attr("src", "images/logo_white_fe6da1ec.png");
        localStorage.bgColor = "4.jpg";
        localStorage.bgLogo = "logo_white_fe6da1ec.png";
        localStorage.navFontColor = "#fff";
    });
    pic2.on("click", function(){
        $("body").css("backgroundImage", "url(images/5.jpg)");
        $(".header .nav a").css("color", "#fff");
        $(".logo img").attr("src", "images/logo_white_fe6da1ec.png");
        localStorage.bgColor = "5.jpg";
        localStorage.bgLogo = "logo_white_fe6da1ec.png";
        localStorage.navFontColor = "#fff";
    });
    pic3.on("click", function(){
        $("body").css("backgroundImage", "url(images/2.jpg)");
        $(".header .nav a").css("color", "#fff");
        $(".logo img").attr("src", "images/logo_white_fe6da1ec.png");
        localStorage.bgColor = "2.jpg";
        localStorage.bgLogo = "logo_white_fe6da1ec.png";
        localStorage.navFontColor = "#fff";
    });


});



