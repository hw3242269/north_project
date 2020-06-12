/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : taobao

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-06-09 08:10:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `north_index`
-- ----------------------------
DROP TABLE IF EXISTS `north_index`;
CREATE TABLE `north_index` (
  `sid` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(999) NOT NULL,
  `title` varchar(200) NOT NULL,
  `pirce` varchar(20) NOT NULL,
  `picurl` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of north_index
-- ----------------------------
INSERT INTO `north_index` VALUES ('1', 'https://www.thenorthface.com.cn/index.php/product-21188.html', 'TheNorthFace北面徒步鞋男户外防水抓地上新|4PFA', '1,598.00', 'https://img1.thenorthface.com.cn/public/images/6f/5f/2b/ca0519aa61541d7970dd4d5e05f0ab7b506520c9.jpg?1583223013#h');
INSERT INTO `north_index` VALUES ('2', 'https://www.thenorthface.com.cn/index.php/product-22161.html', 'TheNorthFace北面短袖T恤女户外上新|49AO', '348.00', 'https://img1.thenorthface.com.cn/public/images/e2/05/bb/940ba76324afcaa1b7a1d9542892b99a1a1536ea.jpg?1586938519#h');
INSERT INTO `north_index` VALUES ('3', 'https://www.thenorthface.com.cn/index.php/product-22187.html', 'TheNorthFace北面短裤女户外舒适防泼水上新|4NDH', '398.00', 'https://img1.thenorthface.com.cn/public/images/8e/59/ea/ea4ebc63cdd9dc66ba7f50dd2686837d4f66316d.jpg?1586938268#h');
INSERT INTO `north_index` VALUES ('4', 'https://www.thenorthface.com.cn/index.php/product-22245.html', 'TheNorthFace北面冲锋衣男户外防水透气上新|4N9M', '1,898.00', 'https://img1.thenorthface.com.cn/public/images/82/a2/47/6d93d30e2fa659fc0b7f34b1782cd6a48ed8e1dc.jpg?1586933806#h');
INSERT INTO `north_index` VALUES ('5', 'https://www.thenorthface.com.cn/index.php/product-22257.html', 'TheNorthFace北面冲锋衣女户外防水透气上新|4N9N', '1,898.00', 'https://img2.thenorthface.com.cn/public/images/1a/64/d3/4117c35a1e6ec4c3ef7016edf8c0c7f330e77f83.jpg?1586932639#h');
INSERT INTO `north_index` VALUES ('6', 'https://www.thenorthface.com.cn/index.php/product-22301.html', 'TheNorthFace北面休闲裤男户外舒适防泼水上新|49AK', '698.00', 'https://img2.thenorthface.com.cn/public/images/6e/c1/6f/7206ba9324c8702535dfe5549d8531636fb26b79.jpg?1586930746#h');
INSERT INTO `north_index` VALUES ('7', 'https://www.thenorthface.com.cn/index.php/product-22314.html', 'TheNorthFace北面短袖T恤男户外吸湿排汗上新|49A5', '298.00', 'https://img2.thenorthface.com.cn/public/images/46/e9/e7/f62795c1c93f8617d44dc96266b62d15ef4c6264.jpg?1586930548#h');
INSERT INTO `north_index` VALUES ('8', 'https://www.thenorthface.com.cn/index.php/product-22325.html', 'TheNorthFace北面短裤男户外舒适防泼水上新|4CL1', '448.00', 'https://img1.thenorthface.com.cn/public/images/f5/25/b1/afa2bead64b9fc6c33c68510b5ec830e728ad6d6.jpg?1586919233#h');
