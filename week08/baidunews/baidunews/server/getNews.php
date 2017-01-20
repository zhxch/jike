<?php
/**
 * Created by PhpStorm.
 * User: xiaochunjie
 * Date: 16/11/28
 * Time: 11:19
 */
    header("Content-type:application/json; charset=utf-8");
    require_once("db.php");
    if (!$con) {
        echo json_encode(array("连接信息" => "连接失败"));
    } else {//连接成功]
        if(isset($_GET["newsType"])){
            $newsType = $_GET["newsType"];
            $sql = "SELECT * FROM `news` WHERE `newstype` = '{$newsType}'";
            mysqli_query($con, "set names 'utf8'");
            $result = mysqli_query($con, $sql);
            $sendData = array();
            if (!$result) {
                echo json_encode(array("success" => $sql));
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
        }else{
            $sql = "SELECT * FROM `news`";
            mysqli_query($con, "set names 'utf8'");
            $result = mysqli_query($con, $sql);
            $sendData = array();
            if (!$result) {
                echo json_encode(array("success" => $sql));
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

    }
    mysqli_close($con);

?>