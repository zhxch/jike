<?php
/**
 * Created by PhpStorm.
 * User: xiaochunjie
 * Date: 16/11/30
 * Time: 10:32
 */
    header("Content-type:application/json; charset=utf-8");
    require_once("db.php");
    if(!$con){
        echo json_encode(array("连接信息" => "连接失败"));
    }else{
        /*获取js提交的数据*/
        $newsTitle = $_POST["newsTitle"];
        $newsType = $_POST["newsType"];
        $newsImg = $_POST["newsImg"];
        $newsTime = $_POST["newsTime"];
        $newsSrc = $_POST["newsSrc"];
        $newsId = $_POST["newsId"];

        ///更新语句
        $sql = "UPDATE `news` SET `newstitle`='{$newsTitle}',`newstype`='{$newsType}',
        `newsimg`='{$newsImg}',`newstime`='{$newsTime}',`newssrc`='{$newsSrc}' 
        WHERE `id`='{$newsId}'";
        mysqli_query($con, "set names 'utf8'");
        $result = mysqli_query($con, $sql);
        echo json_encode(array("success" => $sql));// 更新成功
    }
    //关闭连接
    mysqli_close($con);
?>