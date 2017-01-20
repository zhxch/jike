var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var xss = require('xss');


/* 建立数据库连接池 */
// var conn = mysql.createPool({
// 	host: 'localhost',
// 	port: 3306,
// 	user: 'root',
// 	password: '',
// 	database: 'baidunews'
// });
var mysqlConn = require('../db.js');
var conn = mysql.createPool(mysqlConn.mysql);

/* 后台路由页面 */

//查询新闻列表
router.get('/getnews', function(req, res, next) {
	conn.query('SELECT * FROM `news` ORDER BY `newstime` desc', function(err, rows){
		res.json(rows);
	})		  
});
//新增新闻
router.post('/insert', function(req, res){
	var newstype = req.body.newstype,
		newstitle = xss(req.body.newstitle),
		newsimg = xss(req.body.newsimg),
		newstime = req.body.newstime,
		newssrc = xss(req.body.newssrc);
	conn.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)', 
		[newstitle, newstype, newsimg, newstime, newssrc], function(err, result){
		if(!err){
			console.log(result.insertId);
			res.json({message: "success"});
		}
		
	});

});

//删除新闻
router.post('/delete', function(req, res){
	var newsid = req.body.newsid;
	conn.query('DELETE FROM `news` WHERE `news`.`id` = ?', [newsid], function(err, result){
		console.log(result.affectdRows);
		res.json({message: "success"});
	});
});

//模态框取值
router.get('/currnews', function(req, res){
	var newsid = req.query.newsid;
	conn.query('SELECT * FROM `news` WHERE `id`=?', [newsid], function(err, rows){
		res.json(rows);
	});
});

//确认更新
router.post('/update', function(req, res){
	var newsid = req.body.id,
		newstype = req.body.newstype,
		newstitle = xss(req.body.newstitle),
		newsimg = xss(req.body.newsimg),
		newstime = req.body.newstime,
		newssrc = xss(req.body.newssrc);
	conn.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?', 
		[newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows){
			console.log(rows.changedRows);
			res.json({message: "success"});

	});
});

module.exports = router;
