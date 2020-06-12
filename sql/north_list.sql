/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : taobao

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-06-06 17:47:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `north_list`
-- ----------------------------
DROP TABLE IF EXISTS `north_list`;
CREATE TABLE `north_list` (
  `sid` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(999) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `pirce` float(10,2) DEFAULT NULL,
  `picurl` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of north_list
-- ----------------------------
INSERT INTO `north_list` VALUES ('1', null, 'TheNorthFace北面运动背心女户外舒适透气上新|4N9P', '348.00', 'https://img1.thenorthface.com.cn/public/images/14/b2/e6/6abdc9539ae3c9d8d126c54d6a6062aeb51d698c.jpg?1590487134#h');
INSERT INTO `north_list` VALUES ('2', null, 'TheNorthFaceUE北面CITY CLIMBER SHORT男速干休闲短裤|49DO', '1198.00', 'https://img3.thenorthface.com.cn/public/images/07/aa/0a/e9584605e9d4c84f837425f4de8b21c7a648717b.jpg?1590133212#h');
INSERT INTO `north_list` VALUES ('3', null, 'TheNorthFaceUE北面CITY CLIMBER PANT男速干休闲长裤直筒|49DN', '1398.00', 'https://img1.thenorthface.com.cn/public/images/19/42/31/4239f323ac45f4652ad1b435e9b52c2af5ec20a8.jpg?1590133301#h');
INSERT INTO `north_list` VALUES ('4', null, 'TheNorthFaceUE北面CITY D2 SHIRT男防泼水舒适短袖衬衫|49DL', '998.00', 'https://img3.thenorthface.com.cn/public/images/81/66/8b/d5e76a1ae58c5b78b96650afc947c0e5b8bfd0a3.jpg?1590133383#h');
INSERT INTO `north_list` VALUES ('5', null, 'TheNorthFace北面短袖T恤女户外吸湿排汗上新|4N9J', '298.00', 'https://img1.thenorthface.com.cn/public/images/6c/d3/58/108a46b6117c2c2a7a0df0c459c49b8de8326e4f.jpg?1589881126#h');
INSERT INTO `north_list` VALUES ('6', null, 'TheNorthFace北面短裤女户外舒适防泼水防晒上新|499P', '498.00', 'https://img1.thenorthface.com.cn/public/images/9e/74/7d/758fa94558b162c0af4e0b0db98132a520078619.jpg?1589881298#h');
INSERT INTO `north_list` VALUES ('7', null, 'TheNorthFace北面短袖T恤男户外吸湿快干上新|498H', '298.00', 'https://img3.thenorthface.com.cn/public/images/e0/28/5b/f37dd09ccad5354a2b39f36ee59b70d00ae2890a.jpg?1589882199#h');
INSERT INTO `north_list` VALUES ('8', null, 'TheNorthFace北面短袖T恤男户外吸湿排汗上新|499A', '298.00', 'https://img1.thenorthface.com.cn/public/images/8d/3d/58/b838ceb412b4b47312b3496a0297ee91f5b9d770.jpg?1589882557#h');
INSERT INTO `north_list` VALUES ('9', null, 'TheNorthFace北面短裤男户外舒适透气上新|4984', '598.00', 'https://img2.thenorthface.com.cn/public/images/bd/06/ab/51c651b7797ee2a36e5455a936a9093e21fdf64f.jpg?1589942742#h');
INSERT INTO `north_list` VALUES ('10', null, 'TheNorthFace北面短裤女户外舒适防泼水上新|4987', '598.00', 'https://img2.thenorthface.com.cn/public/images/e0/5a/49/e357df38d2b00ee6ea636c9471cfd0e4dc3e9136.jpg?1589943032#h');
INSERT INTO `north_list` VALUES ('11', null, 'TheNorthFace北面短裤男户外舒适防泼水上新|4NDJ', '498.00', 'https://img1.thenorthface.com.cn/public/images/bf/7d/69/eb6a3f5299171ceb3d218485ad678c1be05d2eee.jpg?1589943412#h');
INSERT INTO `north_list` VALUES ('12', null, 'TheNorthFace北面运动背心女户外舒适透气上新|4N9P', '398.00', 'https://img2.thenorthface.com.cn/public/images/8d/d9/d8/f88f97f63e0ba6e4f2a4a09a712d2a110a0dbb04.jpg?1589943582#h');
INSERT INTO `north_list` VALUES ('13', null, 'TheNorthFace北面短袖T恤男户外吸湿排汗上新|4NDI', '498.00', 'https://img2.thenorthface.com.cn/public/images/c1/b0/3e/0bb60400b7918694813853bd67bbd4e39f77677a.jpg?1589944677#h');
INSERT INTO `north_list` VALUES ('14', null, 'TheNorthFace北面凉鞋男户外轻便舒适上新|46BG', '448.00', 'https://img2.thenorthface.com.cn/public/images/d1/1a/c2/096a18272591e717b590533347cc3b919989d691.jpg?1589945259#h');
INSERT INTO `north_list` VALUES ('15', null, 'TheNorthFace北面拖鞋女户外轻便舒适上新|47AB', '298.00', 'https://img2.thenorthface.com.cn/public/images/ad/2d/37/8f6579b429a353d7e4a2641b8b7bdb5c7ee47373.jpg?1589946105#h');
INSERT INTO `north_list` VALUES ('16', null, 'TheNorthFace北面皮肤衣男户外舒适透气上新|4CL2', '698.00', 'https://img1.thenorthface.com.cn/public/images/e0/fa/88/2649482486c3ec10dcaafbcde904dbb3daffba6e.jpg?1589959589#h');
INSERT INTO `north_list` VALUES ('17', null, 'TheNorthFace北面拖鞋男户外轻便舒适上新|47AA', '298.00', 'https://img3.thenorthface.com.cn/public/images/01/c1/ce/8366bb0b9c562cd606e102f76f8682fdc5e508be.jpg?1589959665#h');
INSERT INTO `north_list` VALUES ('18', null, 'TheNorthFace北面短裤女户外舒适防泼水上新|4N9O', '498.00', 'https://img2.thenorthface.com.cn/public/images/fa/76/71/d556ea6b2684b62463716e64433ae4f933ff33e9.jpg?1589959761#h');
INSERT INTO `north_list` VALUES ('19', null, 'TheNorthFace北面凉鞋女户外轻便舒适上新|46BF', '448.00', 'https://img2.thenorthface.com.cn/public/images/2a/6a/72/8e38fe9565ab0b1b792e443231ab01faf058a0b0.jpg?1589960343#h');
INSERT INTO `north_list` VALUES ('20', null, 'TheNorthFace北面凉鞋女户外轻便舒适上新|46B4', '548.00', 'https://img2.thenorthface.com.cn/public/images/ed/86/77/529b2b9843559ec87ac093ad82471382a39fe70d.jpg?1589961026#h');
INSERT INTO `north_list` VALUES ('21', null, 'TheNorthFace北面短裤男户外舒适防泼水上新|49AD', '498.00', 'https://img3.thenorthface.com.cn/public/images/80/54/2c/e8503ebb61afc1f7e1a90590e768c4c829455e09.jpg?1589962397#h');
INSERT INTO `north_list` VALUES ('22', null, 'TheNorthFace北面凉鞋男户外轻便舒适上新|3FWO', '348.00', 'https://img3.thenorthface.com.cn/public/images/21/b4/ed/55484e56d1de2d6bd01d45a2c7043fdcfbdc83c0.jpg?1589967050#h');
INSERT INTO `north_list` VALUES ('23', null, 'TheNorthFace北面短袖POLO男户外吸湿排汗上新|4983', '498.00', 'https://img3.thenorthface.com.cn/public/images/2e/7b/4d/55ff1e47aa5fb2ee4185084cb444ffe4f96de3bc.jpg?1589968151#h');
INSERT INTO `north_list` VALUES ('24', null, 'TheNorthFace北面凉鞋女户外轻便舒适上新|3K4B', '348.00', 'https://img1.thenorthface.com.cn/public/images/32/e6/d8/adbfcf2160bb3bd156f9a860bc6e994422f70ec1.jpg?1589968585#h');
INSERT INTO `north_list` VALUES ('25', null, 'TheNorthFace北面凉鞋男户外轻便舒适上新|46B3', '548.00', 'https://img1.thenorthface.com.cn/public/images/66/dc/ab/6ec5a37536898941cc27f04b7a7a86b5c6e1fdf5.jpg?1589969214#h');
INSERT INTO `north_list` VALUES ('26', null, 'TheNorthFace北面短袖T恤女户外吸湿排汗上新|4986', '448.00', 'https://img3.thenorthface.com.cn/public/images/2d/19/39/f2d4ae2c9086a0edc843ad204d0c399496f91e1f.jpg?1589969559#h');
INSERT INTO `north_list` VALUES ('27', null, 'TheNorthFace北面腰包通用款户外便捷收纳上新|3VWI', '498.00', 'https://img3.thenorthface.com.cn/public/images/ef/d3/b7/4f4d388cf94192d2181f30ba98e1b8a0b89e2921.jpg?1589969859#h');
INSERT INTO `north_list` VALUES ('28', null, 'TheNorthFace北面溯溪鞋男户外轻便抓地上新|48MA', '798.00', 'https://img1.thenorthface.com.cn/public/images/19/a6/1d/563f8cc810bf4436eaa29a5de3b35bef23414154.jpg?1589970140#h');
INSERT INTO `north_list` VALUES ('29', null, 'TheNorthFace北面腰包通用款户外轻巧便捷上新|3KZ5', '248.00', 'https://img1.thenorthface.com.cn/public/images/59/8b/6e/8f41b92b4f47f5efb4418499685a613f602f5876.jpg?1589970276#h');
INSERT INTO `north_list` VALUES ('30', null, 'TheNorthFace北面背包通用款户外舒适耐久上新|3VWQ', '148.00', 'https://img3.thenorthface.com.cn/public/images/ab/1d/52/25d5ab78b59a3ec718e6f71208b1f2a3b3089347.jpg?1589970375#h');
INSERT INTO `north_list` VALUES ('31', null, 'TheNorthFace北面针织卫衣女户外吸湿透气上新|4N8P', '598.00', 'https://img2.thenorthface.com.cn/public/images/e8/e7/e9/63adc29dc082a19126b995b1b1a4bc1b2c1ed150.jpg?1590028954#h');
INSERT INTO `north_list` VALUES ('32', null, 'TheNorthFaceUE北面SHORT男防泼水休闲短裤|4NEB', '1098.00', 'https://img1.thenorthface.com.cn/public/images/78/c3/fc/879bacbccb4211aa2fa9bd5949c80add3aff2da5.jpg?1589181471#h');
INSERT INTO `north_list` VALUES ('33', null, 'TheNorthFaceUE北面CORE STREET POCKET TEE男贴袋短袖T恤|49E1', '498.00', 'https://img1.thenorthface.com.cn/public/images/ab/6a/84/48d89a57441357de4fb2bc30dfba884dda7b7f61.jpg?1589181810#h');
INSERT INTO `north_list` VALUES ('34', null, 'TheNorthFaceUE北面CITY M1 LS SHIRT男宽松防泼水长袖衬衫|49CK', '1198.00', 'https://img2.thenorthface.com.cn/public/images/94/76/d5/daf7292b63531453199a4cc4a3ab04e284e9e495.jpg?1589182468#h');
INSERT INTO `north_list` VALUES ('35', null, 'TheNorthFace北面短袖T恤女户外吸湿排汗上新|499O', '298.00', 'https://img2.thenorthface.com.cn/public/images/62/a6/3a/0c85789bac23848d393da9891b457ad1944ea7ca.jpg?1587974781#h');
INSERT INTO `north_list` VALUES ('36', null, 'TheNorthFace北面短袖T恤男户外吸湿排汗上新|499K', '298.00', 'https://img1.thenorthface.com.cn/public/images/ad/a8/19/226dbfe920b54bed9a23eccd7b6f7a3ad8daab1c.jpg?1587975068#h');
INSERT INTO `north_list` VALUES ('37', null, 'TheNorthFace北面短袖T恤速干衣男户外吸湿排汗上新|4998', '208.00', 'https://img2.thenorthface.com.cn/public/images/65/32/c5/869609dcb8133d601854d75fb00fd009ec29bace.jpg?1587975321#h');
INSERT INTO `north_list` VALUES ('38', null, 'TheNorthFace北面皮肤衣女户外防风防泼水上新|49B4', '798.00', 'https://img1.thenorthface.com.cn/public/images/43/86/64/6507b79dd309f1e38c25bc546aa825546f83fd9e.jpg?1588846558#h');
INSERT INTO `north_list` VALUES ('39', null, 'TheNorthFace北面溯溪鞋女户外轻便透气上新|4OC2', '998.00', 'https://img3.thenorthface.com.cn/public/images/ad/f9/11/501e0c63b56595434f74d04c4000737be10b8bbd.jpg?1588846709#h');
INSERT INTO `north_list` VALUES ('40', null, 'TheNorthFace北面皮肤衣女户外防风防泼水上新|4985', '798.00', 'https://img1.thenorthface.com.cn/public/images/4e/f0/d3/01905af073721290422e0f8d99e47909658c1bda.jpg?1588846863#h');
INSERT INTO `north_list` VALUES ('41', null, 'TheNorthFace北面短袖T恤女户外吸湿排汗上新|499Y', '348.00', 'https://img3.thenorthface.com.cn/public/images/0d/45/c9/3ec846a40ed441f9a4e7c8c5bdce5dea4aa859ae.jpg?1587975517#h');
INSERT INTO `north_list` VALUES ('42', null, 'TheNorthFace北面短裤女户外舒适透气上新|496O', '498.00', 'https://img1.thenorthface.com.cn/public/images/a8/a7/b6/bd35c8e8bd9f516cf54f2e7be207f462b08e7e29.jpg?1588847012#h');
INSERT INTO `north_list` VALUES ('43', null, 'TheNorthFaceUE北面CITY POCKET TEE男速干宽松短袖T恤|49DM', '498.00', 'https://img3.thenorthface.com.cn/public/images/62/a1/fa/8752ef43c45b5755cbbbf2c8e42c7b79cef9a881.jpg?1587972654#h');
INSERT INTO `north_list` VALUES ('44', null, 'TheNorthFace北面皮肤衣男户外舒适防泼水上新|4CKY', '798.00', 'https://img2.thenorthface.com.cn/public/images/52/55/07/bbe00ec7ba171ba13534f621c3b5353639b5a159.jpg?1587741278#h');
INSERT INTO `north_list` VALUES ('45', null, 'TheNorthFace北面跑步鞋男户外轻便透气上新|46C3', '1198.00', 'https://img1.thenorthface.com.cn/public/images/3f/96/3a/7898ef79759e7f27ac38e8468081c8d6e29b0f7e.jpg?1587717198#h');
INSERT INTO `north_list` VALUES ('46', null, 'TheNorthFace北面跑步鞋男户外轻便透气上新|46C3', '1198.00', 'https://img1.thenorthface.com.cn/public/images/7a/22/a6/da95d0a7a847a2a3c22d3c115209e6821c2b35e5.jpg?1587699440#h');
INSERT INTO `north_list` VALUES ('47', null, 'TheNorthFace北面跑步鞋女户外轻便透气上新|46C4', '1198.00', 'https://img2.thenorthface.com.cn/public/images/49/48/2f/f5a5910f6445a97a6419b2092bfa6070494809f1.jpg?1587717292#h');
INSERT INTO `north_list` VALUES ('48', null, 'TheNorthFace北面跑步鞋女户外轻便透气上新|46C4', '1198.00', 'https://img1.thenorthface.com.cn/public/images/f9/7f/04/372fc8287153cf748bfc799a6904fab8c22b29c4.jpg?1587699571#h');
INSERT INTO `north_list` VALUES ('49', null, 'TheNorthFace北面运动帽通用款户外遮阳防护上新|CGY2', '198.00', 'https://img3.thenorthface.com.cn/public/images/0d/0d/49/149059e2c9011f3616766809201c10c1f1ec8a92.jpg?1587699661#h');
INSERT INTO `north_list` VALUES ('50', null, 'TheNorthFaceUE北面MOUNTAIN FUTURELIGHT JKT男冲锋衣|4R52', '2998.00', 'https://img1.thenorthface.com.cn/public/images/ad/ca/bb/93fc887aacd7e1da9261fad99c2e51ad8f6e7aee.jpg?1587093044#h');
INSERT INTO `north_list` VALUES ('51', null, 'TheNorthFaceUE北面MOUNTAIN FUTURELIGHT JKT男冲锋衣|4R52', '2998.00', 'https://img1.thenorthface.com.cn/public/images/84/01/d7/4d28d7c7ec02678a72bad96317cc44c1916942e0.jpg?1587094220#h');
INSERT INTO `north_list` VALUES ('52', null, 'TheNorthFaceUE北面KK FLAG SS TEE仓石一树男短袖T恤春夏|49D7', '798.00', 'https://img1.thenorthface.com.cn/public/images/0d/4c/7e/38aab472483635b619fcd0ef80cdeccd171fb137.jpg?1587094410#h');
INSERT INTO `north_list` VALUES ('53', null, 'TheNorthFaceUE北面KK CHARLIE DUTY JKT男仓石一树轻薄外套|49D4', '2698.00', 'https://img1.thenorthface.com.cn/public/images/fc/72/6f/636590435ddc7c47d912633cc16ecc2bfda60eca.jpg?1587094519#h');
INSERT INTO `north_list` VALUES ('54', null, 'TheNorthFaceUE北面KK DUTY SHORT仓石一树男速干休闲短裤|49DT', '1198.00', 'https://img1.thenorthface.com.cn/public/images/44/cf/68/1aabaed3af5e151787f16541f85a93254924ef07.jpg?1587094753#h');
