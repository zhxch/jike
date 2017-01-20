/**
 * Created by xiaochunjie on 16/11/9.
 */
$(function(){
    //监听window的加载事件
    $(window).on("load", function(){
        imgLocation();
        //模拟网络获取数据的图片,即后台返回的图片列表
        var dataImg = {
            "data": [{"src": "1.jpg"},{"src": "2.jpg"},{"src": "3.jpg"},{"src": "4.jpg"},{"src": "5.jpg"},{"src": "6.jpg"},{"src": "7.jpg"}]
        };
        window.onscroll = function(){
            if(scrollSide){
                $.each(dataImg.data, function(index, value){
                    //动态创建div,并追加到container容器中
                    var box = $("<div>").addClass("box").appendTo("#container");
                    //追加class="content"的元素,并追加到box中
                    var content = $("<div>").addClass("content").appendTo(box);
                    //追加img元素
                    console.log("./images/" + $(value).attr("src"));
                    $("<img>").attr("src", "./images/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        }
    });
    window.onresize = function(){
        imgLocation();
    };
});
//瀑布流图片显示方法
function imgLocation(){
    //获取盒子的宽度和设备的宽度,确定一排能放几张图片
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    //承载储存列中的所有box,即盒子的高度
    var boxArr = [];
    //确定盒子要放置的位置
    box.each(function(index, value){
        value.style.cssText = "";
        //console.log(index + "," + value);
        var boxHeight = box.eq(index).height();
        if(index < num){
            boxArr[index] = boxHeight;
            //console.log(boxHeight);
        }else{
            //摆放
            var minBoxHeight = Math.min.apply(null, boxArr);
            //console.log(minBoxHeight);
            //获取位置
            var minBoxIndex = $.inArray(minBoxHeight, boxArr);
            //console.log(minBoxIndex);
            //console.log(value);
            //得到一个jQuery对象,然后通过css进行操作
            $(value).css({
                "position": "absolute",
                "top": minBoxHeight,
                "left": box.eq(minBoxIndex).position().left
            });
            //重新记录高度
            boxArr[minBoxIndex] += box.eq(index).height();
        }
    });
}

//是否允许滚动加载图片方法
//加载图片的节点:最后一张图片出现一半的时候开始加载
function scrollSide(){
    var box = $(".box");
    //获取最后一张图片的整体高度
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    //获取当前容器的高度
    var docHeight = $(document).width();
    //获取鼠标滚动的高度
    var mouseScrollHeight = $(window).scrolltop;
    return (lastBoxHeight < mouseScrollHeight + docHeight) ? true : false;
}