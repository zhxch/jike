<?php
/**
 * Created by PhpStorm.
 * User: xiaochunjie
 * Date: 16/11/30
 * Time: 09:40
 */
    header("Content-type:application/json; charset=utf-8");
    require_once("db.php");
    if (!$con) {

    } else {
        /*获取js提交的数据*/
        $newsTitle = $_POST["newsTitle"];
        $newsType = $_POST["newsType"];
        $newsImg = $_POST["newsImg"];
        $newsTime = $_POST["newsTime"];
        $newsSrc = $_POST["newsSrc"];

        //插入语句
        $sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) 
                VALUES ('{$newsTitle}','{$newsType}','{$newsImg}','{$newsTime}','{$newsSrc}')";
        mysqli_query($con, "set names 'utf8'");
        $result = mysqli_query($con, $sql);
        echo json_encode(array("success" => "ok"));// 插入成功
    }
    //关闭连接
    mysqli_close($con);
?>