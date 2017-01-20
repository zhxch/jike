-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-11-30 07:02:47
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '测试数据1', 'images/2.jpg', '2016-11-28 00:00:00', '极客学院'),
(2, '百家', '测试提交', 'images/1.jpg', '2016-11-30 00:00:00', '新浪'),
(3, '军事', '军改', 'images/3.jpg', '2016-11-30 00:00:00', '搜狐新闻'),
(5, '娱乐', '123', 'images/1.jpg', '2016-11-22 00:00:00', '百度娱乐'),
(6, '本地', '111', 'images/1.jpg', '2016-11-10 00:00:00', '极客学院'),
(7, '娱乐', '222', 'images/1.jpg', '2016-11-10 00:00:00', '极客学院'),
(8, '精选', 'php是垃圾', 'images/3.jpg', '2016-11-23 00:00:00', '极客学院'),
(9, '精选', 'php', 'images/1.jpg', '2016-11-22 00:00:00', '极客学院'),
(10, '本地', '11', 'images/4.jpg', '2016-11-04 00:00:00', '234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
