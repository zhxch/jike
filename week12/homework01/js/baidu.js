/**
 * Created by xiaochunjie on 16/10/27.
 */
/* 本案例使用单例模式
 * 单例模式的作用：
 * 1.一个类的对象只能存在一个。
 * 2.可以进行模块间的通信。
 * 3.可以保护自己的属性和方法。
 */
$(function(){
    /*导航栏功能*/
    var singletonNav = (function(){
        var instance = null;

        function pro(){
            return {
                init: function(){
                    var me = this;
                    me.render();
                    me.bind();
                },
                render: function(){
                    var me = this;
                    //设置
                    me.setting = $("#setting");
                    me.bdSetting = $("#bdSetting");
                    //更多产品
                    me.more = $("#more");
                    me.moreProduct = $("#moreProduct");
                },
                bind: function(){
                    var me = this;
                    //设置
                    me.setting.mouseenter(function(){
                        me.bdSetting.show();
                    });
                    me.setting.mouseleave(function(){
                        me.bdSetting.hide();
                    });
                    //更多产品
                    me.more.mouseenter(function(){
                        me.moreProduct.show();
                    });
                    me.more.mouseleave(function(){
                        me.moreProduct.hide();
                    });
                    me.moreProduct.mouseenter(function(){
                        me.moreProduct.show();
                    });
                    me.moreProduct.mouseleave(function(){
                        me.moreProduct.hide();
                    });
                }
            }
        }
        return {
            getInstance: function(){
                if(!instance){
                    instance = pro();
                }
                return instance;
            }
        }
    })();
    singletonNav.getInstance().init();

    /*tab栏切换*/
    var singletonTab = (function(){
        var instance = null;

        function pro(){
            return {
                init: function(){
                    var me = this;
                    me.render();
                    me.bind();
                },
                render: function(){
                    var me = this;
                    me.tabUlLi = $("#tabUl li");
                    me.current = $("div.current");
                    me.tabin = $("#tabUl li.tabin");
                    me.tabContent = $(".tab-content");
                },
                bind: function(){
                    var me = this;
                    //内容区域tab栏切换
                    me.tabUlLi.each(function(index){
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
                }
            }
        }
        return {
            getInstance: function(){
                if(!instance){
                    instance = pro();
                }
                return instance;
            }
        }
    })();
    singletonTab.getInstance().init();

    var singletonGoTop = (function(){
        var instance = null;

        function pro(){
            return {
                init: function(){
                    var me = this;
                    me.render();
                    me.bind();
                },
                render: function(){
                    var me = this;
                    me.goTop = $("#goTop");
                    me.window = $(window);
                    me.html = $('html');
                    me.body = $('body');
                },
                bind: function(){
                    var me = this;
                    var leader = 0;
                    var target = 0;
                    var timerGoTop = null;
                    me.window.scroll(function(){
                        if (me.window.scrollTop()>100){
                            me.goTop.fadeIn(1500);
                        }
                        else
                        {
                            me.goTop.fadeOut(1500);
                        }
                    });

                    //当点击跳转链接后，回到页面顶部位置
                    me.goTop.click(function(){
                        //$('body,html').animate({scrollTop:0},1000);
                        if (me.html.scrollTop()) {
                            me.html.animate({ scrollTop: 0 }, 500);
                            return false;
                        }
                        me.body.animate({ scrollTop: 0 }, 500);
                        return false;
                    });
                }
            }
        }
        return {
            getInstance: function(){
                if(!instance){
                    instance = pro();
                }
                return instance;
            }
        }

    })();
    singletonGoTop.getInstance().init();

    /*换肤*/
    var singletonChangeSkin = (function(){
        var instance = null;
        function pro(){
            return {
                init: function(){
                    var me = this;
                    me.render();
                    me.bind();
                },
                render: function(){
                    var me = this;
                    me.skinTag = $("#skinTag");
                    me.skinItem = $("#skinItem");
                    me.skinPic = $("#skinItem img");
                    me.body = $('body');
                },
                bind: function(){
                    var me = this;
                    me.skinTag.click(function(){
                        me.skinItem.slideToggle("slow");
                    });
                    me.skinItem.mouseenter(function(){
                        me.skinItem.show();
                    });
                    me.skinItem.mouseleave(function(){
                        me.skinItem.hide();
                    });

                    //存储
                    var bgColor = localStorage.bgColor;
                    var bgLogo = localStorage.bgLogo;
                    var navFontColor = localStorage.navFontColor;
                    if(bgColor && bgLogo && navFontColor){
                        me.body.css("backgroundImage", "url(images/" + bgColor + ")");
                        me.body.css({
                            'background-image': 'url(' + bgColor + ')'
                        });
                        $(".header .nav a").css({
                            'color': navFontColor
                        });
                        $(".logo img").attr("src", "images/" + bgLogo);
                    }

                    me.skinPic.each(function(index){
                        $(me.skinPic[index]).click(function(){
                            var bgImg = $(this).attr('src');
                            me.body.css({
                                'background-image': 'url(' + bgImg + ')',
                                'background-position': 'no-repeat'
                            });
                            $(".header .nav a").css("color", "#fff");
                            $(".logo img").attr("src", "images/logo_white_fe6da1ec.png");
                            localStorage.bgColor = bgImg;
                            localStorage.bgLogo = "logo_white_fe6da1ec.png";
                            localStorage.navFontColor = "#fff";
                        });
                    });
                }
            }
        }
        return {
            getInstance: function() {
                if (!instance) {
                    instance = pro();
                }
                return instance;
            }
        }
    })();
    singletonChangeSkin.getInstance().init();
});


/*$(function(){
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


});*/



