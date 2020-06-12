/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : taobao

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-06-11 19:22:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for registry1903
-- ----------------------------
DROP TABLE IF EXISTS `registry1903`;
CREATE TABLE `registry1903` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `repass` varchar(40) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry1903
-- ----------------------------
INSERT INTO `registry1903` VALUES ('21', 'zhangsan', '7c4a8d09ca3762af61e59520943dc26494f8941b', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'zhangsan@126.com', '2020-03-09 11:02:20');
INSERT INTO `registry1903` VALUES ('24', 'wangwu', '6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2', '6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2', 'wangwu@126.com', '2020-03-09 11:25:50');
INSERT INTO `registry1903` VALUES ('25', 'lisi', '6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2', '6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2', 'lisi@126.com', '2020-03-09 11:27:00');
INSERT INTO `registry1903` VALUES ('26', '75480420@qq.com', '011c945f30ce2cbafc452f39840f025693339c42', '011c945f30ce2cbafc452f39840f025693339c42', '75480420@qq.com', '2020-03-09 11:28:47');
INSERT INTO `registry1903` VALUES ('27', '刘德华', '6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2', '6216f8a75fd5bb3d5f22b6f9958cdede3fc086c2', 'andy@126.com', '2020-03-09 11:29:30');
INSERT INTO `registry1903` VALUES ('28', 'lisi123', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'lisi@126.com', '2020-03-09 11:49:22');
INSERT INTO `registry1903` VALUES ('29', '123', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', null, '34', '2020-05-30 10:06:45');
INSERT INTO `registry1903` VALUES ('30', '45646', '9655b6bd7c35ed87fa919f3be97b0ac6bcac8d6d', null, '456465', '2020-05-30 10:08:08');
INSERT INTO `registry1903` VALUES ('32', 'houwang', '49a061255d40135c28184b99d25cd75e8bc9142a', null, '1005243895@qq.com', '2020-05-30 11:06:08');
INSERT INTO `registry1903` VALUES ('33', 'houwang1', 'd6ea08ae30d52ee2247266c4bedd9794f3a410a7', null, 'houwang...', '2020-05-30 11:08:28');
INSERT INTO `registry1903` VALUES ('34', 'houwang12', '49a061255d40135c28184b99d25cd75e8bc9142a', null, '1005243895@qq.com', '2020-06-11 14:14:45');
INSERT INTO `registry1903` VALUES ('35', 'houwang123', '49a061255d40135c28184b99d25cd75e8bc9142a', null, '1005243895@qq.com', '2020-06-11 14:16:22');
