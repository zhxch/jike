/**
 * Created by xiaochunjie on 16/11/3.
 */


var num = 0,result = 0,numshow = "0";
var operate = 0; //判断输入状态的标志
var calcul = 0; //判断计算状态的标志
var quit = 0; //防止重复按键

//数字键
var numberList = document.getElementsByName("number");
console.log(numberList);
for(var i = 0; i < numberList.length; i++){
    console.log(numberList[i].value);
    numberList[i].onclick = function(){
        var str = String(document.getElementById("calScreen").value); //获得当前显示数据
        str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
        //str = str + String(num); //给当前值追加字符
        var valNum = this.innerHTML;
        str +=  valNum;
        document.getElementById("calScreen").value = str; //刷新显示
        operate = 0; //重置输入状态
        quit = 0; //重置防止重复按键的标志
    }
}

// 00键
var doubleZero = document.getElementById("doubleZero");
doubleZero.onclick = function(){
    var str = String(document.getElementById("calScreen").value);
    str = (str!= "0") ? ((operate == 0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0";
    document.getElementById("calScreen").value = str;
    operate = 0;
}

// 小数点键
var dot = document.getElementById("dot");
dot.onclick = function(){
    var str = String(document.getElementById("calScreen").value);
    str = (str!= "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
    for(i = 0; i <= str.length;i++){ //判断是否已经有一个点号
        if(str.substr(i,1) == ".") return false; //如果有则不再插入
    }
    str = str + ".";
    document.getElementById("calScreen").value = str;
    operate = 0;
}

//退格键
var del = document.getElementById("del");
del.onclick = function(){
    var str = String(document.getElementById("calScreen").value);
    str = (str!= "0") ? str : "";
    str = str.substr(0,str.length-1);
    str = (str!= "") ? str : "0";
    document.getElementById("calScreen").value = str;
}

//清除键
var clearScreen = document.getElementById("clear");
clearScreen.onclick = function(){
    num = 0;
    result = 0;
    numshow = "0";
    document.getElementById("calScreen").value = "0";
}

//加法
var plus = document.getElementById("plus");
plus.onclick = function(){
    calculate(); //调用计算函数
    operate = 1; //更改输入状态
    calcul = 1; //更改计算状态为加
}

//减法
var minus = document.getElementById("minus");
minus.onclick = function(){
    calculate();
    operate = 1;
    calcul = 2;
}

//乘法
var multiply = document.getElementById("multiply");
multiply.onclick = function(){
    calculate();
    operate = 1;
    calcul = 3;
}

//除法
var divide = document.getElementById("divide");
divide.onclick = function(){
    calculate();
    operate = 1;
    calcul = 4;
}

//求百分数
var persent = document.getElementById("persent");
persent.onclick = function(){
    num = Number(document.getElementById("calScreen").value);
    operate = 1;
    calcul = 5;
    calculate();
}
//"sin"运算
var sin = document.getElementById("sin");
sin.onclick = function(){
    num = Number(document.getElementById("calScreen").value);
    calcul = 6;
    calculate();
    operate = 1;
}

var cos = document.getElementById("cos");
cos.onclick = function(){
    num = Number(document.getElementById("calScreen").value);
    calcul = 7;
    calculate();
    operate = 1;
}

var log2 = document.getElementById("log2");
log2.onclick = function(){
    num = Number(document.getElementById("calScreen").value);
    calcul = 8;
    calculate();
    operate = 1;
}

var log10 = document.getElementById("log10");
log10.onclick = function(){
    num = Number(document.getElementById("calScreen").value);
    calcul = 9;
    calculate();
    operate = 1;
}

//等于
var equal = document.getElementById("equal");
equal.onclick = function(){
    if(calcul != 5 && calcul != 6 && calcul != 7 && calcul != 8 && calcul != 9){
        calculate(); //等于
    }
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}

//计算方法
function calculate(){
    numshow = Number(document.getElementById("calScreen").value);
    if(num!= 0){ //判断前一个运算数是否为零以及防重复按键的状态
        switch(calcul){ //判断要输入状态
            case 1:
                if(quit != 1){
                    result = num + numshow;
                    quit = 1; //避免重复按键
                    break; //计算"+"
                }else{
                    result = num;
                    break;
                }
            case 2:
                if(quit != 1){
                    result = num - numshow;
                    quit = 1; //避免重复按键
                    break; //计算"-"
                }else{
                    result = num;
                    break;
                }
            case 3:
                if(quit != 1){
                    result = num * numshow;
                    quit = 1; //避免重复按键
                    break;
                }else{
                    result = num;
                    break;
                }
            case 4:
                if(numshow !=  0){
                    if(quit != 1){
                        result = num / numshow;
                        quit = 1; //避免重复按键
                        break;
                    }else{
                        result = num;
                        break;
                    }
                }else{
                    result = "错误";
                    break;
                }
            case 5:
                result = num / 100;
                break;
            case 6:
                result = Math.sin(num*Math.PI/180);
                break;
            case 7:
                result = Math.cos(num*Math.PI/180);
                break;
            case 8:
                if(num <= 0){//负数没有底数
                    result = "错误";
                    break;
                }else{
                    result = Math.log2(num);
                    break;
                }
            case 9:
                if(num <= 0){//负数没有底数
                    result = "错误";
                    break;
                }else{
                    result = Math.log10(num);
                    break;
                }
        }
        //quit = 1; //避免重复按键
    }
    else{
        result = numshow;
    }
    //处理结果
    if(result == "错误" || isNaN(result)){
        document.getElementById("calScreen").value = "错误";
        return false;
    }else{
        numshow = parseFloat(result.toFixed(8));
        document.getElementById("calScreen").value = numshow;
        num = result; //存储当前值
    }

}