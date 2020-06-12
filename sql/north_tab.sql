/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : taobao

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-06-11 19:22:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for north_tab
-- ----------------------------
DROP TABLE IF EXISTS `north_tab`;
CREATE TABLE `north_tab` (
  `sid` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(999) DEFAULT NULL,
  `picurl` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of north_tab
-- ----------------------------
INSERT INTO `north_tab` VALUES ('1', 'http://img1.thenorthface.com.cn/public/images/5d/e7/00/15b48ccf8135add727e106aae0d0245fd8dd1d88.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
INSERT INTO `north_tab` VALUES ('2', 'http://img1.thenorthface.com.cn/public/images/3b/51/37/29797238632969123d62510565c01b196ff29858.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
INSERT INTO `north_tab` VALUES ('3', 'http://img1.thenorthface.com.cn/public/images/8a/38/8f/438c7a435f96597d8dea17077fbae29f224a960d.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
INSERT INTO `north_tab` VALUES ('4', 'http://img1.thenorthface.com.cn/public/images/18/5e/9a/d498888aaab5e68a492e0c28675f08e21752e36e.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
INSERT INTO `north_tab` VALUES ('5', 'http://img1.thenorthface.com.cn/public/images/31/7a/db/049d50fe12ac59b5a07b2ece7c2f9edb0153bea8.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
INSERT INTO `north_tab` VALUES ('6', 'http://img1.thenorthface.com.cn/public/images/14/f9/27/fa8255d9f1b2b3984da2ac26005e7e88ad550f47.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
INSERT INTO `north_tab` VALUES ('7', 'http://img1.thenorthface.com.cn/public/images/f5/df/89/95ed0bc7ddc636e1bbc5c13fea20cf878bcb9871.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
INSERT INTO `north_tab` VALUES ('8', 'http://img1.thenorthface.com.cn/public/images/19/e6/2c/1199b698930f4d03ee03b9a678af3608775ddd42.jpg', 'https://www.thenorthface.com.cn/themes/tnf/images/look.png');
