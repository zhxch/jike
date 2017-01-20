/**
 * Created by xiaochunjie on 16/10/30.
 */
function Maxchar(str) { //定义一个参数，代表我们传入一个数组或者字符串（字符串本身来说也是一个数组）
    this.str = str || '';
    this.maxCharMeta = {}; //一个存储提取信息的对象
}
// class_name.prototype.method_name = function(first_argument) {
//     // body...
// };
Maxchar.prototype.parser = function() { //定义一个解析函数，挂在原型上，所有的实例都可以使用
    var str = this.str;
    /*
     objChar= {
     a:{
     char:'a',
     num:3,
     indexs:[2,4,6]
     },
     b:{
     char:'b',
     num:1,
     indexs:[1]
     }
     }
     */
    var objChar = {}, //存储提取的信息
        maxCounter = 0;
    for (var i = 0; i < str.length; i++) { //遍历以后，obj里面就会包含输入字符数组的每个字符的信息了。
        if (objChar[str[i]]) { //若已存在,更新objChar里对应身str[i]的属性值
            objChar[str[i]].num += 1;
            objChar[str[i]].indexs.push(i);
        } else { //若不存在，则代表obj还没有存在字符为str[i]的对象
            //定义一个临时对象
            var metaChar = {
                char: str[i],
                num: 1,
                indexs: [i] //第一次出现，该字符的索引数组里面只有一个元素，即当前的i
            }
            objChar[str[i]] = metaChar; //将临时对象 赋给obj
        }
        // 为了找出最多出现次数的信息，且不再重复定义遍历，就在此for循环中定义实现
        if (maxCounter < objChar[str[i]].num) { //若最大次数小于当前str[i]的num值，就更新
            this.maxCharMeta = objChar[str[i]];
            maxCounter = objChar[str[i]].num;
        }
    }
    return this; //实现链式的调用
}

// 输出
Maxchar.prototype.maxCharInfo = function() {
    return this.maxCharMeta;
}

// 视图处理
// 定义对象
var maxCharOut = {
    inputStr: null, //代表获取的输入值
    parsedObj: null, //代表解析完成的对象
    init: function() { //执行
        this.getStrInfo(); //获取信息
        // this.parser(); //位置放错了：在页面一刷新的时候，还没有获取到值，当鼠标点击以后，才获取到值，开始解析

    },
    getStrInfo: function() { //从界面上获取，利用DOM元素
        var inputStr = document.getElementById('inputStr');
        var calculateBtn = document.getElementById('calculateBtn');

        calculateBtn.onclick = function() { //给button绑定点击事件
            maxCharOut.inputStr = inputStr.value; //在点击的时候获取值
            maxCharOut.parser(); //当鼠标点击以后，才获取到值，开始解析
            maxCharOut.charView(); // 点击时，调用结果输出函数，即可以页面显示结果
        }
    },
    // 解析/计算
    parser: function() {
        // var charMeta =new Maxchar(this.inputStr)  //传入的是一个输入字符（即输入框输入的值）
        // var charMeta =new Maxchar(this.inputStr).parser() //调用
        // var charMeta =new Maxchar(this.inputStr).parser().maxCharInfo();//输出
        this.parsedObj = new Maxchar(this.inputStr).parser().maxCharInfo();
    },
    // 输出，放到页面上显示
    charView: function() { //显示的三个位置，利用DOM元素
        var maxChar = document.getElementById('maxChar');
        var maxCounter = document.getElementById('maxCounter');
        var strIndex = document.getElementById('strIndex');

        //赋值前先进行判断,parsedObj是否存在，不存在代表解析还未完成
        if (this.parsedObj) {
            maxChar.innerHTML = this.parsedObj.char;
            maxCounter.innerHTML = this.parsedObj.num;
            strIndex.innerHTML = this.parsedObj.indexs.join(','); //关于每个字符的索引数组，不能直接将数组输出，先将其变成字符串
        }
    }
};
// 立即执行函数
(function() {
    maxCharOut.init();
})();