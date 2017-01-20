/**
 * Created by xiaochunjie on 16/11/29.
 */
/*在打开页面时，刷新新闻列表*/
$(function(){
    var newsTable = $("#newsTable tbody");
    refreshNews();
    //添加新闻
    $("#btnSubmit").click(function(e){
        e.preventDefault();//阻止默认事件
        //输入验证
        var newsTitle = $("#newsTitle").val();
        var newsType = $("#newsType").val();
        var newsImg = $("#newsImg").val();
        var newsSrc = $("#newsSrc").val();
        var newsTime = $("#newsTime").val();
        if(newsTitle === "" || newsImg === "" || newsTime === "" || newsSrc === ""){
            if(newsTitle === ""){
                $("#newsTitle").parent().addClass("has-error");
            }else{
                $("#newsTitle").parent().removeClass("has-error");
            }
            if(newsImg === ""){
                $("#newsImg").parent().addClass("has-error");
            }else{
                $("#newsImg").parent().removeClass("has-error");
            }
            if(newsTime === ""){
                $("#newsTime").parent().addClass("has-error");
            }else{
                $("#newsTime").parent().removeClass("has-error");
            }
            if(newsSrc === ""){
                $("#newsSrc").parent().addClass("has-error");
            }else{
                $("#newsSrc").parent().removeClass("has-error");
            }
        }else{
            var jsonNews = {
                newsTitle: newsTitle,
                newsType: newsType,
                newsImg: newsImg,
                newsTime: newsTime,
                newsSrc: newsSrc
            }
            //提交新闻］
            $.ajax({
                url: "../baidunews/server/insertNews.php",
                type: "POST",
                data: jsonNews,
                dataType: "JSON",
                success: function (data) {
                    console.log(data);
                    refreshNews();
                }
            });
        }
    });


    //删除新闻 （动态删除／事件委托）
    var delNewsId = null;
    newsTable.on("click", ".btn-danger", function (e) {
        //绑定事件
        $("#deleteModal").modal("show");
        delNewsId = $(this).parent().prevAll().eq(5).html();
    });
    //确认删除
    $("#deleteModal #confirmDelete").click(function(e){
        if(delNewsId){
            $.ajax({
                url: "../baidunews/server/deleteNews.php",
                type: "POST",
                data: {newsId: delNewsId},
                success: function (data) {
                    console.log("删除成功");
                    //隐藏模态框
                    $("#deleteModal").modal("hide");
                    //重新刷新列表
                    refreshNews();

                }
            });
        }
    });

    //修改新闻 （动态删除／事件委托）
    var updateNewsId = null;
    newsTable.on("click", ".btn-primary", function (e) {
        //绑定事件
        $("#updateModal").modal("show");
        updateNewsId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: "../baidunews/server/currNews.php",
            type: "GET",
            dateType: "JSON",
            data: {newsId:updateNewsId},
            success:function (data) {
                console.log(data);
                $("#unewsTitle").val(data[0].newsTitle);
                $("#unewsType").val(data[0].newsType);
                $("#unewsImg").val(data[0].newsImg);
                var uTime = data[0].newsTime.split(" ")[0];
                $("#unewsTime").val(uTime);
                $("#unewsSrc").val(data[0].newsSrc);
            }
        });
    });
    //确认修改
    $("#updateModal #confirmUpdate").click(function(e){
        $.ajax({
            url: "../baidunews/server/updateNews.php",
            type: "POST",
            dateType: "JSON",
            data: {
                newsTitle: $("#unewsTitle").val(),
                newsType: $("#unewsType").val(),
                newsImg: $("#unewsImg").val(),
                newsTime: $("#unewsTime").val(),
                newsSrc: $("#unewsSrc").val(),
                newsId:updateNewsId
            },
            success:function (data) {
                console.log(data);
                $("#updateModal").modal("hide");
                refreshNews();
            }
        });
    });

    //刷新新闻列表
    function refreshNews() {
        //清空所有的新闻列表
        newsTable.empty();
        //异步请求后台获取新闻列表
        $.ajax({
            url: "../baidunews/server/getNews.php",
            type: "GET",
            dataType: "json",
            success: function (data) {
                data.forEach(function(item, index, array){
                    var tdId = $("<td>").html(item.id);
                    var tdType = $("<td>").html(item.newsType);
                    var tdTitle = $("<td>").html(item.newsTitle);
                    var tdImg = $("<td>").html(item.newsImg);
                    var tdSrc = $("<td>").html(item.newsSrc);
                    var tdTime = $("<td>").html(item.newsTime);
                    var tdCtrl = $("<td>");
                    var btnUpdate = $("<button>").addClass("btn btn-primary btn-xs").html("修改");
                    var btnDelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
                    tdCtrl.append(btnUpdate, btnDelete);
                    var tRow = $("<tr>");
                    tRow.append(tdId, tdType, tdTitle, tdImg, tdSrc, tdTime, tdCtrl);
                    newsTable.append(tRow);
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(this);
            }
        });
    }
});
