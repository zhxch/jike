<?php
/**
 * Created by PhpStorm.
 * User: xiaochunjie
 * Date: 16/11/30
 * Time: 10:50
 */

    header("Content-type:application/json; charset=utf-8");
    require_once("db.php");
    if(!$con){
        echo json_encode(array("连接信息" => "连接失败"));
    }else{
        $newsId = $_GET["newsId"];
        //获取当前编辑的新闻
        $sql = "SELECT * FROM `news` WHERE `id` = {$newsId}";
        mysqli_query($con, "set names 'utf8'");
        $result = mysqli_query($con, $sql);
        $sendData = array();
        if (!$result) {
            echo json_encode(array("success" => "none"));
        } else {//执行成功
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($sendData, array(
                    "id" => $row["id"],
                    "newsType" => $row["newstype"],
                    "newsTitle" => $row["newstitle"],
                    "newsImg" => $row["newsimg"],
                    "newsTime" => $row["newstime"],
                    "newsSrc" => $row["newssrc"]
                ));
            }
            echo json_encode($sendData);
        }
    }
    //关闭连接
    mysqli_close($con);

?>