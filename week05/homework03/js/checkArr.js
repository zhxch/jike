/**
 * Created by xiaochunjie on 16/10/30.
 */
//点击"检索"按钮执行
function queryArr(){
    var itemChar = document.getElementById("itemChar");
    var countChar = document.getElementById("countChar");
    var localChar = document.getElementById("localChar");
    var result = document.getElementById("result");

    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a", "m"];
    var resArr = checkArr(arr);
    //遍历 拼接字符串,向html中输出
    var resHtml = "";
    for (i in resArr){
        resHtml += "出现最多的元素:" + resArr[i].char + "<br>";
        resHtml += "出现次数:" + resArr[i].count + "<br>";
        resHtml += "出现的位置分别是:" + resArr[i].index + "<br><hr>";
    }
    result.innerHTML = resHtml;
}


//检索数组函数
function checkArr(arr) {
    var ret = {};
    var res = [];
    var res2 = [];//结果数组
    var max = 0;
    for(var i = 0; i < arr.length; i++) {
        if(!ret[arr[i]]) {
            ret[arr[i]] = {};
            ret[arr[i]].char = arr[i];
            ret[arr[i]].count = 1;
            ret[arr[i]].index = [];
            ret[arr[i]].index.push(i);
        } else {
            ret[arr[i]].count++;
            ret[arr[i]].index.push(i);
        }
    }
    //将遍历组装的对象重新放入一个新的数组
    for(var i in ret) {
        var item = ret[i];
        res.push(item);
    }
    //取出res数组中最大的数的对象
    for(var i = 0; i < res.length; i++) {
        if(i == 0) {
            max = res[i].count;
        }
        if(res[i].count == max) {
            res2.push(res[i]);
        }
    }
    return res2;
}