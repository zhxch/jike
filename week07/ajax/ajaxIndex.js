/**
 * Created by xiaochunjie on 16/11/8.
 */
$(function(){
    $("#btn").on("click", function(){
        $("#result").text("请求数据中,请稍后...");
        $.get("Server.php", {name: $("#name").val()}, function(data){
            $("#result").text(data);
        }).error(function(){
            $("#result").text("通讯有问题");
        });
    });
});