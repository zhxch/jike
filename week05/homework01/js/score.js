/**
 * Created by xiaochunjie on 16/10/28.
 */
function searchScore(){
    var level;
    var scoreLevel = document.getElementById("scoreLevel");
    var score = document.getElementById("score").value;
    if (isNaN(score) || score.length <= 0 || score < 0 || score > 100 || !score.trim()) {
        scoreLevel.style.color = "#ff0000";
        scoreLevel.innerHTML = "请输入0~100之间的整数";
        return "error";
    }
    var tempScore = parseInt(score / 10);
    switch (tempScore) {
        case 10:
        case 9: level = "厉害了我的哥,您是1等生";
            break;
        case 8: level = "您是2等生";
            break;
        case 7: level = "您是3等生";
            break;
        case 6: level = "您是4等生";
            break;
        case 5: level = "您是5等生";
            break;
        case 4: level = "您是6等生";
            break;
        case 3: level = "您是7等生";
            break;
        case 2: level = "您是8等生";
            break;
        case 1: level = "您是9等生";
            break;
        case 0: level = "亲啊,要努力了,您是10等生";
            break;
        case "": level = "请输入您的成绩";
            break;
    }
    scoreLevel.style.color = "#00ff00";
    scoreLevel.innerHTML = level;
}
