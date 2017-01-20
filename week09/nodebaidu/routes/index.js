var express = require('express');
var router = express.Router();
var mysql = require('mysql');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
	var newsType = req.query.newsType;
	//建立数据库连接
	// var conn = mysql.createConnection({
	// 	host: 'localhost',
	// 	port: 3306,
	// 	user: 'root',
	// 	password: '',
	// 	database: 'baidunews'
	// });
	var mysqlConn = require('../db.js');
	var conn = mysql.createConnection(mysqlConn.mysql);
	conn.connect();

	//查询语句
	conn.query('SELECT * FROM `news` WHERE `newstype` = ? ORDER BY `newstime` ASC', [newsType], function(err, rows, fields){
		res.json(rows);
	})	  
});

module.exports = router;
