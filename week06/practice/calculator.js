/**
 * Created by xiaochunjie on 16/11/3.
 */
//获取屏幕的值
var screenStr = document.getElementById("calScreen").value;
var operateType = 0; //定义操作类型 单个数字:0; 两个或两个以上的数字进行运算:1
var calType = ""; //计算类型
var preNum = 0; //先前输入的值(用来存储)
var result = 0; //计算结果

//数字按键方法 0 1 2 3 4 5 6 7 8 9
function numKey(num){
    if(screenStr == "0." || screenStr == "00."){
        screenStr += num;
    }else{
        //对屏幕初始值 0 的处理
        if(operateType == 0){
            screenStr = (screenStr != 0) ? screenStr : "";
        }else if(operateType == 1){
            screenStr = "";
            operateType = 0;
        }
        screenStr += num;
    }
    //把输入的值重新赋值给屏幕
    document.getElementById("calScreen").value = screenStr;
}

//"00"按键方法
function doubleZero(){
    //对屏幕初始值 0 的处理
    if(operateType == 0){
        screenStr = (screenStr != 0) ? screenStr + "00" : "";
    }else if(operateType == 1){
        screenStr = "0";
    }
    //重新赋值给屏幕
    document.getElementById("calScreen").value = screenStr;
}

//"←"退格按键方法
function delNum(){
    //对初始值进行处理:如果不为0,就返回屏幕本身数字,如果为0,置为空
    screenStr = (screenStr != 0) ? screenStr :"";
    //每点击一次"退格"键,去掉数字最后一位
    screenStr = screenStr.substring(0, screenStr.length - 1);
    //当屏幕数字为""时,置为0
    screenStr = (screenStr != "") ? screenStr : "0";
    //重新赋值给屏幕
    document.getElementById("calScreen").value = screenStr;
}

//"."小数点方法
function dot(){
    if(operateType == 0){
        screenStr = (screenStr != 0) ? screenStr : "0";
    }else if(operateType == 1){
        screenStr = "0";
    }
    //遍历检测是否有点击过"."
    for(var i = 0; i < screenStr.length; i++){
        if(screenStr.substr(i, 1) == "."){
            return false; //如果有,则不再输入"."
        }
    }
    screenStr += ".";
    //重新赋值给屏幕
    document.getElementById("calScreen").value = screenStr;
}

//"C"清除按键方法
function clearScreen(){
    document.getElementById("calScreen").value = 0;
}

//"+"加法运算
function plus(){
    //将操作类型置为 1
    operateType = 1;
    calType = document.getElementById("plus").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    calculate();
}

//"-"减法运算
function minus(){
    operateType = 1;
    calType = document.getElementById("minus").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    //calculate();
}

//"*"乘法运算
function multiply(){
    operateType = 1;
    calType = document.getElementById("multiply").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    //calculate();
}

//"/"除法运算
function divide(){
    operateType = 1;
    calType = document.getElementById("divide").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    //calculate();
}
//"%"百分比运算
function persent(){
    operateType = 0;
    calType = document.getElementById("persent").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    calculate();
}

//"sin"运算
function calSin(){
    operateType = 0;
    calType = document.getElementById("sin").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    calculate();
}

function calCos(){
    operateType = 0;
    calType = document.getElementById("cos").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    calculate();
}

function calLog2(){
    operateType = 0;
    calType = document.getElementById("log2").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    calculate();
}

function calLog10(){
    operateType = 0;
    calType = document.getElementById("log10").innerHTML;
    preNum = Number(screenStr);
    document.getElementById("calScreen").value = "";
    calculate();
}

//计算方法
function calculate(){
    screenStr = Number(document.getElementById("calScreen").value);
    preNum = Number(preNum);
    if(preNum != 0){
        switch(calType){
            case "+":
                result = preNum + screenStr;
                break;
            case "-":
                result = preNum - screenStr;
                break;
            case "*":
                result = preNum * screenStr;
                break;
            case "/":
                if(screenStr != 0){
                    result = preNum / screenStr;
                    break;
                }else{
                    result = "错误";
                    break;
                }
            case "%":
                result = preNum / 100;
                break;
            case "sin":
                result = Math.sin(preNum*Math.PI/180);
                break;
            case "cos":
                result = Math.cos(preNum*Math.PI/180);
                break;
            case "log2":
                result = Math.log2(preNum);
                break;
            case "log10":
                result = Math.log10(preNum);
                break;
        }
    }else{
        result = screenStr;
    }
    if(result != "错误"){
        screenStr = parseFloat(result.toFixed(8));
        document.getElementById("calScreen").value = screenStr;
        preNum = screenStr; //存储结果
    } else {
        document.getElementById("calScreen").value = result;
    }

}

//"="等于号操作方法
function equal(){
    if(calType != "%" && calType != "sin" && calType != "cos" && calType != "log2" && calType != "log10"){
        calculate();
    }

    preNum = 0;
    operateType = 1;
}
