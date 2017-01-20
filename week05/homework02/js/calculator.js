/**
 * Created by xiaochunjie on 16/10/30.
 */
//计算
function calculate(){
    var n1 = parseFloat(document.getElementById("number1").value.trim());
    var n2 = parseFloat(document.getElementById("number2").value.trim());
    var op = document.getElementById("op").value;
    var msg = document.getElementById("msg");
    var resultValue = document.getElementById("resultValue");
    if (isNaN(n1) || n1.length < 0 || isNaN(n2) || n2.length < 0) {//简单验证
        msg.style.color = "#ff0000";
        msg.innerHTML = "请输入数字";
        return "error";
    }
    console.log(op);
    if ("/" == op && n2 == 0) { //如果为除法,除数不能为0
        msg.style.color = "#ff0000";
        msg.innerHTML = "地球人都知道,除数不能为0";
        return "error";
    }
    var result = calc(n1, n2, op);
    if (result != null || result != "defined") {
        msg.innerHTML = "";
    }
    resultValue.innerHTML = parseFloat(result.toFixed(8));
}
//计算函数
function calc(num1, num2, oper){
    switch (oper) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 -num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "未知操作符";
    }
}