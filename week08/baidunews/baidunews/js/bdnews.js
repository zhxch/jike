/**
 * Created by xiaochunjie on 16/11/28.
 */
$(function () {
    refreshNews("精选");

    $("nav a").click(function (e) {
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    });

});

function refreshNews(newsType){
    //组装数据,动态添加新闻
    var newsList = $("article ul");
    //清除所有新闻
    newsList.empty();
    //异步请求加载新闻列表
    $.ajax({
        url: "../baidunews/server/getNews.php",
        type: "GET",
        dataType: "JSON",
        data: {newsType: newsType},
        success: function (data) {
            console.log(data);
            data.forEach(function(item, index){
                var newsLi = $("<li></li>").addClass("news-list").prependTo(newsList);
                var newsImg = $("<div></div>").addClass("newsimg").appendTo(newsLi);
                var img = $("<img>").attr("src", item.newsImg).appendTo(newsImg);
                var newsContent = $("<div></div>").addClass("newscontent").appendTo(newsLi);
                var h1 = $("<h1></h1>").html(item.newsTitle).appendTo(newsContent);
                var p = $("<p></p>").appendTo(newsContent);
                var newsTime = $("<span></span>").addClass("newstime").html(item.newsTime).appendTo(p);
                var newsSrc = $("<span></span>").addClass("newssrc").html(item.newsSrc).appendTo(p);
            });
        },
        error: function () {
            console.log("异常～");
        }
    });


}