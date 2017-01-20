<?php
/**
 * Created by PhpStorm.
 * User: xiaochunjie
 * Date: 16/11/30
 * Time: 10:16
 */
    header("Content-type:application/json; charset=utf-8");
    require_once("db.php");

    if(!$con){
        echo json_encode(array("连接信息" => "连接失败"));
    }else{
        $newsId = $_POST["newsId"];
        //删除新闻
        $sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsId}";
        mysqli_query($con, "set names 'utf8'");
        mysqli_query($con, $sql);
        echo json_encode(array("success" => "ok"));//删除成功
    }
    //关闭连接
    mysqli_close($con);
?>